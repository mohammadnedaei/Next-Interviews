"use client";

import {CalendarDays, HandshakeIcon, Loader2} from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { NewsletterFormData } from "@/lib/schemas";
import { Input } from "@/components/ui/input";
import { useNewsletterForm } from "@/lib/hooks/useNewsletterForm";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Newsletter = () => {
    const newsletterForm = useNewsletterForm();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const emailValue = newsletterForm.getValues("email");
        if (emailValue) {
            newsletterForm.trigger("email");
        }
    }, [newsletterForm.formState.isDirty]);

    const onSubmit = async (data: NewsletterFormData) => {
        setLoading(true);
        setTimeout(() => {
            console.log("Data submitted:", data);
            setLoading(false);
            newsletterForm.reset();
        }, 2000);
    };

    return (
        <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                    <div className="max-w-xl lg:max-w-lg">
                        <h2 className="text-4xl font-semibold tracking-tight">Subscribe to our newsletter</h2>
                        <p className="mt-4 text-lg">
                            Stay updated with our latest insights and exclusive content delivered straight to your inbox.
                        </p>
                        <div className="mt-6 flex max-w-md gap-x-4">
                            <Form {...newsletterForm}>
                                <form className="flex flex-wrap md:flex-nowrap justify-center gap-4 w-full items-center" onSubmit={newsletterForm.handleSubmit(onSubmit)}>
                                    <FormField control={newsletterForm.control} name="email" render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel className="sr-only">Email address</FormLabel>
                                            <FormControl>
                                                <Input className="border-2 h-10 dark:bg-zinc-700" type="email" placeholder="Enter your email" {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )} />
                                    <Button
                                        className="flex-none  w-[140px] rounded-md disabled:bg-gray-500 bg-indigo-500 px-3.5 py-2.5 text-sm font-regular text-white/90 shadow-xs hover:bg-indigo-600 transition hover:cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                        type="submit"
                                        disabled={!newsletterForm.formState.isValid || !newsletterForm.formState.isDirty || loading}
                                    >
                                        {loading ? (
                                            <>
                                                <Loader2 className="animate-spin mr-2" />
                                                Please wait
                                            </>
                                        ) : (
                                            "Subscribe"
                                        )}
                                    </Button>
                                </form>
                            </Form>
                        </div>
                    </div>
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                        <div className="flex flex-col items-start">
                            <div className="rounded-md p-2 ring-1">
                                <CalendarDays aria-hidden="true" className="size-6" />
                            </div>
                            <dt className="mt-4 text-base font-semibold">Weekly articles</dt>
                            <dd className="mt-2 text-base/7 text-gray-400">
                                Get fresh insights, expert tips, and in-depth guides delivered to you every week.
                            </dd>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="rounded-md p-2 ring-1">
                                <HandshakeIcon aria-hidden="true" className="size-6" />
                            </div>
                            <dt className="mt-4 text-base font-semibold">No spam</dt>
                            <dd className="mt-2 text-base/7 text-gray-400">
                                We respect your inbox—only valuable content, no unnecessary emails.
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
