import {z} from "zod";

export const newsletterFormSchema = z.object({
    email: z.string().email()
})

export type NewsletterFormData = z.infer<typeof newsletterFormSchema>;
