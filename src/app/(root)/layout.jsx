import Footer from "@/Shared/Footer";
import Navbar from "@/Shared/Navbar";
import { Suspense } from "react";

const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Suspense fallback={<div>Loading....</div>} >
                {children}
            </Suspense>
            <Footer />
        </>
    );
};

export default MainLayout;