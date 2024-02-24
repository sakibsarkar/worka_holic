"use client";
import Gig from "./Gig";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { UserContext } from "@/providers/UserProvider";

const Gigs = () => {
  const gigDetails = [
    {
      image:
        "https://cdn.discordapp.com/attachments/796439138403352596/1209982172707037284/9f9dcba527bff337c1f5a050733d3ae940b602b4-1667055510.png?ex=65e8e6b6&is=65d671b6&hm=69c862dd45a07b39b552781170dbc8ecfe38563982fbd986355f59557921ec0a&",
      title: "I will design a modern business logo",
      price: 10,
    },
    {
      image:
        "https://cdn.discordapp.com/attachments/796439138403352596/1209982172707037284/9f9dcba527bff337c1f5a050733d3ae940b602b4-1667055510.png?ex=65e8e6b6&is=65d671b6&hm=69c862dd45a07b39b552781170dbc8ecfe38563982fbd986355f59557921ec0a&",
      title: "I will design a modern business logo",
      price: 10,
    },
    {
      image:
        "https://cdn.discordapp.com/attachments/796439138403352596/1209982172707037284/9f9dcba527bff337c1f5a050733d3ae940b602b4-1667055510.png?ex=65e8e6b6&is=65d671b6&hm=69c862dd45a07b39b552781170dbc8ecfe38563982fbd986355f59557921ec0a&",
      title: "I will design a modern business logo",
      price: 10,
    },
  ];

  const [gigsData, setGigsData] = useState([])
  const [refetch, setRefetch] = useState(false)
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/api/gigs")
      const myGigs = await res.json()
      setGigsData(myGigs)
    }
    getData()
  }, [refetch])


  const { user } = useContext(UserContext)


  return (
    <div className="flex-1 ">
      <div className="p-8 border-[1px] border-gray-300  mb-10 bg-white">
        <p className="font-semibold">Gigs</p>
      </div>
      <div className="flex flex-wrap gap-5">
        {gigsData.map(gig => (
          <Gig key={gig._id} gigDetails={gig} setRefetch={setRefetch} refetch={refetch} />
        ))}

        <Link href={"/createGig"} className="magic border-[1px] border-gray-300 bg-white w-[300px] flex flex-col justify-center items-center h-[318px] overflow-hidden gap-5 cursor-pointer relative" >

          <div className="magic_hover absolute  bg-primary-color z-1"></div>
          <p className="magic_text font-medium relative z-[2] flex flex-col justify-center items-center">
            <FaPlusCircle className="text-6xl" />
            Create a new gig
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Gigs;
