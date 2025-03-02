import Hero from "@/app/(home)/_components/hero";
import Features from "@/app/(home)/_components/features";
import {CloudIcon, TimerIcon, VerifiedIcon} from "lucide-react";
import {IFeatureItem} from "@/types/features";
import Testimonials from "@/app/(home)/_components/testimonials";
import Newsletter from "@/app/(home)/_components/newsletter";
const features: IFeatureItem[] = [
    {
        name: 'Access Your Interview Collections Anywhere',
        description:
            'Store your interview questions and answers securely in the cloud, so you can access them anytime, from any device.',
        icon: CloudIcon,
    },
    {
        name: 'Verified Pre-Made Interview Sets',
        description:
            'Save time with expert-curated interview question sets, covering a variety of industries and roles.',
        icon: VerifiedIcon,
    },
    {
        name: "Instant Short Quizzes for Quick Practice",
        description:
            'Test your knowledge with fast, interactive quizzes designed to reinforce your learning and improve recall.',
        icon: TimerIcon,
    },
];
const LandingPage = () => {
  return (
      <>
        <Hero />
          <Features features={features} />
          <Testimonials />
          <Newsletter />
      </>
  )
}
export default LandingPage
