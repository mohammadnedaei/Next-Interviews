import {Footer as AppFooter} from "@/components/ui/footer";
import {Github, Linkedin, Mic} from "lucide-react";

const Footer = () => {
    return (
        <div className="w-full px-12">
            <AppFooter
                logo={<Mic className="h-7 w-7" />}
                brandName="Next Interviews"
                socialLinks={[
                    {
                        icon: <Linkedin className="h-5 w-5" />,
                        href: "https://www.linkedin.com/in/mohammad-nedaei/",
                        label: "Linkedin",
                    },
                    {
                        icon: <Github className="h-5 w-5" />,
                        href: "https://github.com/mohammadnedaei",
                        label: "GitHub",
                    },
                ]}
                mainLinks={[
                    { href: "/auth", label: "Get Started" },
                    { href: "/about", label: "About" },
                    { href: "/", label: "Home" },
                    { href: "/contact", label: "Contact Us" },
                ]}
                copyright={{
                    text: `© ${new Date().getFullYear()} Next Interviews`,
                    license: "All rights reserved",
                }}
            />
        </div>
    )
}
export default Footer
