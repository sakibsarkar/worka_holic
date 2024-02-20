import Navbar from "@/Shared/Navbar";

const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default MainLayout;