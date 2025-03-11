"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendNewsletterEmail = async(email: string) => {
    try {
        const response = await resend.emails.send({
            from: process.env.FROM_EMAIL?? "",
            to: email,
            subject: "Thank you for subscribing!",
            html: `<p>Welcome to our newsletter! Stay tuned for updates.</p>`,
        });
        if (!response.error) return {success: true, response}
        return {success: false, response}
    } catch (error) {
        return { success: false, error: error };
    }
}
