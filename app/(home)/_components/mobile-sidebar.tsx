import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Menu} from "lucide-react";
import Link from "next/link";
import {DialogTitle} from "@radix-ui/react-dialog";
import {VisuallyHidden} from "@radix-ui/react-visually-hidden";
import {IMobileSidebarProps} from "@/types";
import {ThemeToggle} from "@/components/ui/theme-toggle";

const MobileSidebar = ({links} : IMobileSidebarProps) => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="hover:cursor-pointer" size={28} />
            </SheetTrigger>
            <SheetContent>
                <VisuallyHidden>
                    <DialogTitle></DialogTitle>
                </VisuallyHidden>
                <div className="mt-20 items-center flex flex-col gap-4">
                    {links.map((link, index) => (
                        <Link key={index} href={link.href} className={`transition 
                            ${link.title === "Sign in" ? "text-md text-white px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700" : "text-lg hover:text-gray-900"}`}>{link.title}</Link>
                    ))}
                    <ThemeToggle />
                </div>
            </SheetContent>
        </Sheet>
    )
}
export default MobileSidebar
