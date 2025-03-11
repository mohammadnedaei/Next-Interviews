import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useContactForm } from "@/lib/hooks/useContactForm";
import { useState } from "react";
import { ContactFormData } from "@/lib/schemas";
import { contactFormInfo } from "@/data";

const ContactForm = () => {
    const contactForm = useContactForm();
    const [submitLoading, setSubmitLoading] = useState(false);

    const onSubmit = (data: ContactFormData) => {
        setSubmitLoading(true);
        setTimeout(() => {
            console.log("Data submitted:", data);
            setSubmitLoading(false);
            contactForm.reset();
        }, 2000);
    };

    return (
        <Form {...contactForm}>
            <form onSubmit={contactForm.handleSubmit(onSubmit)} className="mx-auto mt-16 max-w-xl sm:mt-20 mb-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

                    {contactFormInfo.map((field) => {
                        if (field.type === "button") {
                            return (
                                <div key="submit-button" className="sm:col-span-2 w-1/2 mx-auto mt-5">
                                    <Button
                                        type="submit"
                                        disabled={submitLoading}
                                        className="w-full rounded-md bg-indigo-600 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-indigo-600"
                                    >
                                        {submitLoading ? (
                                            <>
                                                <Loader2 className="animate-spin mr-2" />
                                                Please wait
                                            </>
                                        ) : (
                                            field.label?? ""
                                        )}
                                    </Button>
                                </div>
                            );
                        }

                        if (field.type === "switch") {
                            return (
                                <FormField
                                    key={field.name}
                                    name={field.name}
                                    control={contactForm.control}
                                    render={({ field: switchField }) => (
                                        <FormItem className="flex items-center gap-3 sm:col-span-2">
                                            <FormControl>
                                                <Switch
                                                    checked={!!switchField.value}
                                                    onCheckedChange={switchField.onChange}
                                                />
                                            </FormControl>
                                            <FormLabel className="text-sm text-gray-900">
                                                {field.label?? ""}
                                            </FormLabel>
                                        </FormItem>
                                    )}
                                />
                            );
                        }

                        return (
                            <FormField
                                key={field.name}
                                name={field.name}
                                control={contactForm.control}
                                render={({ field: inputField }) => (
                                    <FormItem className={["message", "email", "phoneNumber"].includes(field.name) ? "sm:col-span-2" : ""}>
                                        <FormLabel className="block text-sm font-semibold text-gray-900">
                                            {field.label}
                                        </FormLabel>
                                        <FormControl>
                                            {field.type === "textarea" ? (
                                                <Textarea
                                                    {...inputField}
                                                    value={typeof inputField.value === "boolean" ? "" : inputField.value}
                                                    placeholder={field.placeholder?? ""}
                                                    className="block w-full rounded-md bg-white text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                                                />
                                            ) : (
                                                <Input
                                                    {...inputField}
                                                    type={field.type}
                                                    value={typeof inputField.value === "boolean" ? "" : inputField.value}
                                                    placeholder={field.placeholder?? ""}
                                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                                                />
                                            )}
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        );
                    })}

                </div>
            </form>
        </Form>
    );
};

export default ContactForm;
