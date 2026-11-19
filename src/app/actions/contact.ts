"use server";

import { getPayloadClient } from "@/lib/payload";
import { supabase } from "@/lib/supabase";

const str = (formData: FormData, key: string, max: number) => {
    const value = formData.get(key);
    return typeof value === "string" ? value.trim().slice(0, max) : "";
};

/**
 * Saves a contact-form enquiry to both the Payload CMS (Enquiries collection) and Supabase.
 * The two saves are independent: the enquiry counts as submitted when at least one of them
 * succeeds, so an outage of either store never loses the enquiry.
 */
export async function submitContactForm(formData: FormData) {
    const name = str(formData, "name", 200);
    const email = str(formData, "email", 320);
    const phone = str(formData, "phone", 50);
    const service = str(formData, "service", 200);
    const message = str(formData, "message", 5000);

    // DPDP consent details, filled in by the contact form when Sentinel is linked.
    const consentLanguage = str(formData, "consent_language", 50);
    const consentMarketing = formData.get("consent_marketing") === "true";
    const consentProofHash = str(formData, "consent_proof_hash", 200);

    if (!name || !email || !message) {
        return { error: "Name, email, and message are required." };
    }

    // Supabase first, so the Payload record can note whether the Supabase copy exists.
    let savedToSupabase = false;
    try {
        const { error } = await supabase.from("contact").insert({ name, email, phone, service, message });
        if (error) throw error;
        savedToSupabase = true;
    } catch (err) {
        console.error("Supabase enquiry save failed:", err);
    }

    let savedToPayload = false;
    try {
        const payload = await getPayloadClient();
        await payload.create({
            collection: "enquiries",
            // Visitors cannot create enquiries through the API; only this server action may.
            overrideAccess: true,
            data: {
                name,
                email,
                phone: phone || undefined,
                service: service || undefined,
                message,
                consent: {
                    language: consentLanguage || undefined,
                    marketing: consentMarketing,
                    sealed: Boolean(consentProofHash),
                    proofHash: consentProofHash || undefined,
                },
                savedToSupabase,
            },
        });
        savedToPayload = true;
    } catch (err) {
        console.error("Payload enquiry save failed:", err);
    }

    if (!savedToPayload && !savedToSupabase) {
        return { error: "Failed to submit form. Please try again." };
    }

    // === TELEGRAM NOTIFICATION ===
    try {
        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (botToken && chatId) {
            const telegramMessage = `
📬 *New Contact Form Submission*
*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone || 'Not provided'}
*Service:* ${service || 'Not specified'}
*Message:* ${message}
            `.trim();

            await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: telegramMessage,
                    parse_mode: 'Markdown'
                })
            });
        }
    } catch (telegramError) {
        // Don't fail the form submission if Telegram notification fails
        console.error("Telegram notification error:", telegramError);
    }

    // === N8N WEBHOOK NOTIFICATION ===
    try {
        const webhookUrl = process.env.N8N_WEBHOOK_URL;
        if (webhookUrl) {
            await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, phone, service, message })
            });
        }
    } catch (webhookError) {
        console.error('N8N webhook error:', webhookError);
    }

    return { success: true };
}
