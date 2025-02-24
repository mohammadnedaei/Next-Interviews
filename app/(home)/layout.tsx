import Navbar from "@/app/(home)/_components/navbar";

const HomeLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <>
            <Navbar />
            <>
                {children}
            </>
            {/*{TODO : Footer}*/}
        </>
    )
}
export default HomeLayout
