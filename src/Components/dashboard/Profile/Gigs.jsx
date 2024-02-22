"use client";
import Link from "next/link";
import Gig from "./Gig";
import { FaPlusCircle } from "react-icons/fa";

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


  const handleCreateGig = async () => {
    const res = await fetch("/api/gigs", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        image: "https://example.com/image1.jpg",
        rating: 4.5,
        title: "Professional Logo Design",
        description: "I will create a unique and eye-catching logo for your business.",
        price: 50,
        skils: ["Graphic Design", "Logo Design", "Illustrator"],
        deliveryTime: 3
      })
    })
    const x = await res.json()


  }

  return (
    <div className="flex-1 ">
      <div className="p-8 border-[1px] border-gray-300  mb-10 bg-white">
        <p className="font-semibold">Gigs</p>
      </div>
      <div className="flex flex-wrap gap-5">
        {gigDetails.map((gig, index) => (
          <Gig key={index} gigDetails={gig} />
        ))}

        <div className="magic border-[1px] border-gray-300 bg-white w-[300px] flex flex-col justify-center items-center h-[295px] overflow-hidden gap-5 cursor-pointer relative" onClick={handleCreateGig}>

          <div className="magic_hover absolute  bg-primary-color z-1"></div>
          <p className="magic_text font-medium relative z-[2] flex flex-col justify-center items-center">
            <Link href="/createGig"><FaPlusCircle className="text-6xl" /></Link>
            Create a new gig
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gigs;
