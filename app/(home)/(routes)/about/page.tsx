import {ChevronsLeftRightEllipsis, MonitorSmartphone} from "lucide-react";
import {team} from "@/data"
import Image from "next/image";
const About = () => {
    return (
        <div className="py-8 sm:py-12">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 mb-10">
                <h2 className="text-center text-base/7 font-semibold text-indigo-600">Crush Your Next Tech Interview</h2>
                <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
                    Master coding interviews with ease
                </p>
                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white dark:bg-zinc-800 lg:rounded-l-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-primary max-lg:text-center">
                                    Real Interview Questions
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-primary/70 max-lg:text-center">
                                    Access a vast collection of real-world coding and system design questions from top companies.
                                </p>
                            </div>
                            <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                                    <Image
                                        width={400}
                                        height={650}
                                        className="size-full object-cover object-bottom"
                                        src="/images/screenshot/screenshot-mobile.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
                    </div>
                    <div className="relative max-lg:row-start-1">
                        <div className="absolute inset-px rounded-lg bg-white dark:bg-zinc-800 max-lg:rounded-t-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-primary max-lg:text-center">Quizzes & Challenges</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-primary/70 max-lg:text-center">
                                    Test your skills with interactive quizzes and coding challenges.
                                </p>
                            </div>
                            <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                                <ChevronsLeftRightEllipsis size={80} fill={"currentColor"} />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
                    </div>
                    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                        <div className="absolute inset-px rounded-lg bg-white dark:bg-zinc-800"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-primary max-lg:text-center">Mock Interviews</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-primary/70 max-lg:text-center">
                                    Simulate real interview environments and get AI-powered feedback.
                                </p>
                            </div>
                            <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                                <MonitorSmartphone size={80} fill={"currentColor"} />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
                    </div>
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white dark:bg-zinc-800 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-primary max-lg:text-center">
                                    Community & Discussion
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-primary/70 max-lg:text-center">
                                    Join a thriving community of learners, share insights, and discuss solutions to tough interview questions. Get tips from experts and improve together!
                                </p>
                            </div>
                            <Image
                                width={400}
                                height={650}
                                className="w-11/12 mx-auto mt-15 rounded-xl"
                                src="/images/icons/support.svg"
                                alt=""
                            />
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                    </div>
                </div>
            </div>
            <div className="py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-zinc-100 sm:text-4xl">Meet Our Team</h2>
                        <p className="mt-6 text-lg text-gray-600 dark:text-zinc-300">
                            Passionate engineers and educators, dedicated to making tech interviews easier for everyone.
                        </p>
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {team.map((person) => (
                            <li key={person.name}>
                                <div className="flex items-center gap-x-6">
                                    <Image width={50} height={50} alt="team-item" src={person.imageUrl} className="size-16 rounded-full" />
                                    <div>
                                        <h3 className="text-base/7 font-semibold tracking-tight text-gray-900 dark:text-zinc-300">{person.name}</h3>
                                        <p className="text-sm/6 font-semibold text-indigo-500">{person.role}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default About
