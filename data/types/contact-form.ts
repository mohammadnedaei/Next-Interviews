import { ContactFormData } from "@/lib/schemas";

export interface BaseField {
    name: keyof ContactFormData;
    label: string;
}

export interface InputField extends BaseField {
    type: "text" | "email" | "textarea";
    placeholder: string;
}

export interface SwitchField extends BaseField {
    type: "switch";
}

export interface ButtonField {
    type: "button";
    label: string;
}

export type ContactFormField = InputField | SwitchField | ButtonField;
