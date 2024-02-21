import Gigs from "@/Components/dashboard/Profile/Gigs";
import ProfileCard from "@/Components/dashboard/Profile/ProfileCard";
import React from "react";

const ProfilePage = async () => {
  return (
    <div className="flex gap-20">
      <ProfileCard />
      <Gigs />
    </div>
  );
};

export default ProfilePage;
