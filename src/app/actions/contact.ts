"use server";

import { supabase } from "@/lib/supabase";

export async function submitContactForm(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
        return { error: "Name, email, and message are required." };
    }

    try {
        const { error } = await supabase.from("contact").insert({
            name,
            email,
            phone,
            service,
            message,
        });

        if (error) {
            console.error("Supabase error:", error);
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
    } catch (err) {
        console.error("Unexpected error:", err);
        return { error: "An unexpected error occurred." };
    }
}
