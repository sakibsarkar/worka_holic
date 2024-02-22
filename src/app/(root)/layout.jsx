import Footer from "@/Shared/Footer";
import Navbar from "@/Shared/Navbar";

const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer/>
        </>
    );
};

export default MainLayout;