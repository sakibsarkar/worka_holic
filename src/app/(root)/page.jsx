import AllGigs from "@/Components/AllGigs/AllGigs";
import ChoosePlans from "@/Components/ChoosePlans/ChoosePlans";
import HomeBanner from "@/Components/sections/Banners/HomeBanner";
import Service from "@/Components/sections/Service";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Contact from "@/Components/sections/Contact";

const HomePage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <HomeBanner />
      <AllGigs />
      <ChoosePlans />
      <Service />
      <Contact/>
    </>
  );
};

export default HomePage;
