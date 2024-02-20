import AllGigs from "@/Components/AllGigs/AllGigs";
import ChoosePlans from "@/Components/ChoosePlans/ChoosePlans";
import HomeBanner from "@/Components/sections/Banners/HomeBanner";

const HomePage = () => {
  return (
    <>
      <HomeBanner />
      <AllGigs />
      <ChoosePlans />
    </>
  );
};

export default HomePage;
