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

        return { success: true };
    } catch (err) {
        console.error("Unexpected error:", err);
        return { error: "An unexpected error occurred." };
    }
}
