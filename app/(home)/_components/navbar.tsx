"use client";
import Link from "next/link";
import MobileSidebar from "@/app/(home)/_components/mobile-sidebar";
import { INavLink } from "@/types/nav";
import {ThemeToggle} from "@/components/ui/theme-toggle";
import {useTheme} from "next-themes";
import {Mic} from "lucide-react";

const navLinks: INavLink[] = [
    {title: "About", href: "/about"},
    {title: "Services", href: "/#features"},
    {title: "Contact Us", href: "/contact"},
    {title: "Sign in", href: "/auth"}
]
const Navbar = () => {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";
    return (
        <nav className={`w-full mx-auto ${isDark ? "bg-zinc-800/50" : "bg-zinc-100"} border-b px-2 border-gray-300 p-3`}>
            <div className="flex justify-between px-4 md:px-0">
                <div className="md:mx-4 my-2 flex items-center gap-3 max-w-max">
                    <Mic className="h-7 w-7" />
                    <Link href="/" className="text-bold text-lg font-black">Next Interviews</Link>
                </div>
                <div className="items-center max-w-max flex md:hidden">
                    <MobileSidebar links={navLinks} />
                </div>

                <div className="hidden md:flex mx-4 my-2 items-center max-w-max gap-8">
                    {navLinks.map((link, index) => (
                            <Link key={index} href={link.href} className={`text-md  transition 
                            ${link.title === "Sign in" ? "text-white px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700" : "hover:text-primary"}`}>{link.title}</Link>
                    ))}
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    )
}
export default Navbar
