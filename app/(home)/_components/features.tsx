import {IFeatureProps} from "@/types/features";
import Image from "next/image";

const features = ({features} : IFeatureProps) => {
    return (
        <section id="features">
            <div className="overflow-hidden py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pt-4 lg:pr-8">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base/7 font-semibold text-indigo-600">Ace Every Interview</h2>
                                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty  sm:text-5xl">
                                    Your Ultimate Interview Prep Hub
                                </p>
                                <p className="mt-6 text-lg/8">
                                    Build your personalized collection of interview questions, store answers, and test your knowledge with quick quizzes.
                                    Whether you&#39;re preparing for a tech interview, a corporate job, or just brushing up on your skills, we’ve got you covered.
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base/7 lg:max-w-none">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold">
                                                <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                                                {feature.name}
                                            </dt>{' '}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <Image
                            alt="App screenshot"
                            src="/images/screenshot/screenshot-desktop.png"
                            width={2432}
                            height={1442}
                            className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default features
