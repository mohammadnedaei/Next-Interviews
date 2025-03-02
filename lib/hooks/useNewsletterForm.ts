"use client";
import {NewsletterFormData, newsletterFormSchema} from "@/lib/schemas";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

export function useNewsletterForm(defaultValues?: Partial<NewsletterFormData>) {
    return useForm<NewsletterFormData>({
        resolver: zodResolver(newsletterFormSchema),
        defaultValues: {
            email: "",
            ...defaultValues
        }
    })
}
