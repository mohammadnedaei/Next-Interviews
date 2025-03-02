import Navbar from "@/app/(home)/_components/navbar";
import Footer from "@/app/(home)/_components/footer";

const HomeLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <>
            <Navbar />
            <>
                {children}
            </>
            <Footer />
        </>
    )
}
export default HomeLayout
