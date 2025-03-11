import {Mic} from "lucide-react";
import {BeamsBackground} from "@/components/ui/beams-background";
import Image from "next/image";

const Testimonials = () => {
    return (
        <BeamsBackground>


        <section id="testimonials" className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
            <div className="absolute inset-0 -z-10 opacity-20" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <Mic className="h-15 w-15 mx-auto" />
                <h2 className="mt-6 text-center text-3xl/9 font-extrabold sm:text-4xl/10">Hear from Our Users</h2>
                <figure className="mt-10">
                    <blockquote className="text-center text-xl/8 font-semibold sm:text-2xl/9">
                        <p>
                            “This app completely transformed how I prepare for interviews!
                            Being able to organize my own question sets and test myself with quick quizzes has been a game-changer.
                            I walked into my last interview more confident than ever—and I landed the job!”
                        </p>
                    </blockquote>
                    <figcaption className="mt-10">
                        <Image
                            width={200}
                            height={200}
                            alt="User Testimonial"
                            src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            className="mx-auto size-20 rounded-full"
                        />
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold">Angela Carter</div>
                            <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-500">
                                <circle r={1} cx={1} cy={1} />
                            </svg>
                            <div>Software Engineer at Microsoft</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
        </BeamsBackground>
    );
};
export default Testimonials;
