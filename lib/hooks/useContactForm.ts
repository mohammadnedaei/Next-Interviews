"use client";

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {ContactFormData, contactFormSchema} from "@/lib/schemas";

export const useContactForm = (defaultValues?: Partial<ContactFormData>) => {
    return useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            message: "",
            termsAccepted: false,
            ...defaultValues
        },
    })
}
