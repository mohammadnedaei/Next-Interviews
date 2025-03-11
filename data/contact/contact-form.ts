import { ContactFormField } from "@/data/types";

export const contactFormInfo: ContactFormField[] = [
    { name: "firstName", label: "First Name", placeholder: "Enter your first name", type: "text" },
    { name: "lastName", label: "Last Name", placeholder: "Enter your last name", type: "text" },
    { name: "email", label: "Email", placeholder: "Enter your email address", type: "email" },
    { name: "phoneNumber", label: "Phone Number", placeholder: "Enter your phone number", type: "text" },
    { name: "message", label: "Message", placeholder: "Enter your message", type: "textarea" },
    { name: "termsAccepted", label: "I agree to the Terms and Conditions", type: "switch" },
    { type: "button", label: "Let's talk" }
];
