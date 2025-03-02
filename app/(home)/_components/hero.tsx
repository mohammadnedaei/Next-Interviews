"use client";


import {BeamsBackground} from "@/components/ui/beams-background";
import {motion} from "motion/react";
import {ArrowRight} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
const Hero = () => {
    return (
        <div>
            <BeamsBackground>
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 items-center justify-center px-4"
                >
                    <h1 className="text-5xl md:text-7xl font-bold dark:text-white text-center">
                        Interviews are not scary any more.
                    </h1>
                    <div className="font-light text-xl md:text-4xl dark:text-neutral-200 py-4">
                        And this, is your career.
                    </div>
                    <div className="flex flex-wrap items-center gap-4 w-full justify-center">
                        <Button size="lg" variant="slate">
                            <Link href={"/about"}>Learn More</Link>
                        </Button>
                        <Button className="group" variant="default" size="lg">
                            Get Started
                            <ArrowRight
                                className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-2"
                                size={18}
                                strokeWidth={3}
                                aria-hidden="true"
                            />
                        </Button>
                    </div>
                </motion.div>
            </BeamsBackground>
        </div>
    )
}
export default Hero
