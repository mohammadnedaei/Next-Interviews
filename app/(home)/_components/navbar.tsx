import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="w-full mx-auto bg-gray-800 text-white rounded-b-md border-b p-3">
            <div className="hidden md:flex justify-between">
                <div className="mx-4 my-2 flex items-center gap-4">
                    <Image src={"/logo/logo.png"} alt={"logo"} width={40} height={40} />
                    <span className="text-bold text-lg">Next Interviews</span>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
