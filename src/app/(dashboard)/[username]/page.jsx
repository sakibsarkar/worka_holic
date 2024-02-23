"use client";
import Gigs from "@/Components/dashboard/Profile/Gigs";
import ProfileCard from "@/Components/dashboard/Profile/ProfileCard";
import React, { useContext } from "react";
import { UserContext } from "@/providers/UserProvider";

const ProfilePage = () => {

  const { user, loading } = useContext(UserContext)


  return (
    <div className="flex gap-20">
      {
        loading ?
          ""
          :
          <>
            <ProfileCard userData={user} />
            <Gigs />
          </>
      }
    </div>
  );
};

export default ProfilePage;
