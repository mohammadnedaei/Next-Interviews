import {z} from "zod";

export const contactFormSchema = z.object({
    firstName: z
        .string()
        .min(1, { message: "First name is required" })
        .max(25, { message: "First name must be 25 characters or less" }),
    lastName: z
        .string()
        .min(1, { message: "Last name is required" })
        .max(50, { message: "Last name must be 50 characters or less" }),
    email: z
        .string()
        .email({ message: "Invalid email address format" }),
    phoneNumber: z
        .string().regex(/^\+?\d{7,}$/, {
            message: "Phone number must start with '+' and contain at least 7 digits."
        }),
    message: z
        .string()
        .min(10, { message: "Message must be at least 10 characters long" })
        .max(1000, { message: "Message must be 1000 characters or less" }),
    termsAccepted: z
        .boolean()
        .refine(value => value, { message: "You must accept the terms and conditions" })
})

export type ContactFormData = z.infer<typeof contactFormSchema>;
