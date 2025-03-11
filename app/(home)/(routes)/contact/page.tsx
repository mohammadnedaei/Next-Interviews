"use client";

import ContactForm from "@/app/(home)/(routes)/contact/_components/contact-form";
import {stats} from "@/data";
import {contactPageConstants} from "@/data"

const Contact = ()=> {
    return (
        <div className="isolate">
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <div
                    aria-hidden="true"
                    className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#0575E6] to-[#021B79] opacity-20"
                    />
                </div>
                <div
                    aria-hidden="true"
                    className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#0575E6] to-[#021B79] opacity-20"
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Work with us</h2>
                        <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
                            Passionate about making tech interviews easier? We&#39;re always looking for talented individuals to join our team.
                        </p>
                    </div>
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            {stats.map((stat) => (
                                <div key={stat.name} className="flex flex-col-reverse gap-1">
                                    <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                                    <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-2xl text-center mt-20">
                <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{contactPageConstants.title?? ''}</h2>
                <p className="mt-2 text-lg/8 text-gray-600 dark:text-primary/70">{contactPageConstants.description?? ''}</p>
            </div>
            <ContactForm />
        </div>
    )
}

export default Contact
