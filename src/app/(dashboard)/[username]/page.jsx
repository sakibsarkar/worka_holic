"use client";
import Gigs from "@/Components/dashboard/Profile/Gigs";
import ProfileCard from "@/Components/dashboard/Profile/ProfileCard";
import React, { useEffect, useState } from "react";

const ProfilePage = () => {

  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const handleGetUser = async () => {
      setIsLoading(true)
      const res = await fetch("/api/userInfo")
      const data = await res.json()
      setUser(data)
      setIsLoading(false)
    }
    handleGetUser()
  }, [])

  return (
    <div className="flex gap-20">
      {
        isLoading ?
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
