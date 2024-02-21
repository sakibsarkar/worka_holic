import AllGigs from "@/Components/AllGigs/AllGigs";
import HomeBanner from "@/Components/sections/Banners/HomeBanner";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";


const HomePage = async () => {
   const session = await getServerSession(authOptions);
   console.log(session);

    return (
        <>
            <HomeBanner />
            <AllGigs />
        </>
    );
};

export default HomePage;