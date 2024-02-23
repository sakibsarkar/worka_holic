import GigCard from "@/Components/GigPage/GigCard";
import Header from "@/Components/GigPage/Header";
import React from "react";

const page = () => {
  const details = [
    {
      id: "01",
      title: "I will be creating a new website for you in 3 days.",
      image:
        "https://cdn.discordapp.com/attachments/796439138403352596/1209982172707037284/9f9dcba527bff337c1f5a050733d3ae940b602b4-1667055510.png?ex=65e8e6b6&is=65d671b6&hm=69c862dd45a07b39b552781170dbc8ecfe38563982fbd986355f59557921ec0a&",
      price: "$100",
      ratings: "5",
      user: {
        name: "Ahammad Abbdullah",
        image:
          "https://cdn.discordapp.com/attachments/796439138403352596/1209968948695670834/9743ecac80966a95e9d328c08b995c04.png?ex=65e8da65&is=65d66565&hm=5601b0aa10312c569e59ace0e04ae26ec63056e4db9011501a0e8eef24289c4e&",
      },
    },
    {
      id: "02",
      title: "I will be creating a new website for you in 3 days.",
      image:
        "https://cdn.discordapp.com/attachments/796439138403352596/1209982172707037284/9f9dcba527bff337c1f5a050733d3ae940b602b4-1667055510.png?ex=65e8e6b6&is=65d671b6&hm=69c862dd45a07b39b552781170dbc8ecfe38563982fbd986355f59557921ec0a&",
      price: "$100",
      ratings: "5",
      user: {
        name: "Ahammad Abbdullah",
        image:
          "https://cdn.discordapp.com/attachments/796439138403352596/1209968948695670834/9743ecac80966a95e9d328c08b995c04.png?ex=65e8da65&is=65d66565&hm=5601b0aa10312c569e59ace0e04ae26ec63056e4db9011501a0e8eef24289c4e&",
      },
    },
    {
      id: "03",
      title: "I will be creating a new website for you in 3 days.",
      image:
        "https://cdn.discordapp.com/attachments/796439138403352596/1209982172707037284/9f9dcba527bff337c1f5a050733d3ae940b602b4-1667055510.png?ex=65e8e6b6&is=65d671b6&hm=69c862dd45a07b39b552781170dbc8ecfe38563982fbd986355f59557921ec0a&",
      price: "$100",
      ratings: "5",
      user: {
        name: "Ahammad Abbdullah",
        image:
          "https://cdn.discordapp.com/attachments/796439138403352596/1209968948695670834/9743ecac80966a95e9d328c08b995c04.png?ex=65e8da65&is=65d66565&hm=5601b0aa10312c569e59ace0e04ae26ec63056e4db9011501a0e8eef24289c4e&",
      },
    },
    {
      id: "03",
      title: "I will be creating a new website for you in 3 days.",
      image:
        "https://cdn.discordapp.com/attachments/796439138403352596/1209982172707037284/9f9dcba527bff337c1f5a050733d3ae940b602b4-1667055510.png?ex=65e8e6b6&is=65d671b6&hm=69c862dd45a07b39b552781170dbc8ecfe38563982fbd986355f59557921ec0a&",
      price: "$100",
      ratings: "5",
      user: {
        name: "Ahammad Abbdullah",
        image:
          "https://cdn.discordapp.com/attachments/796439138403352596/1209968948695670834/9743ecac80966a95e9d328c08b995c04.png?ex=65e8da65&is=65d66565&hm=5601b0aa10312c569e59ace0e04ae26ec63056e4db9011501a0e8eef24289c4e&",
      },
    },
    {
      id: "03",
      title: "I will be creating a new website for you in 3 days.",
      image:
        "https://cdn.discordapp.com/attachments/796439138403352596/1209982172707037284/9f9dcba527bff337c1f5a050733d3ae940b602b4-1667055510.png?ex=65e8e6b6&is=65d671b6&hm=69c862dd45a07b39b552781170dbc8ecfe38563982fbd986355f59557921ec0a&",
      price: "$100",
      ratings: "5",
      user: {
        name: "Ahammad Abbdullah",
        image:
          "https://cdn.discordapp.com/attachments/796439138403352596/1209968948695670834/9743ecac80966a95e9d328c08b995c04.png?ex=65e8da65&is=65d66565&hm=5601b0aa10312c569e59ace0e04ae26ec63056e4db9011501a0e8eef24289c4e&",
      },
    },
  ];
  return (
    <div className="bg-gray-200 pb-20">
      <Header />
      <div className="my-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {details?.map((detail) => (
          <GigCard key={detail.id} detail={detail} />
        ))}
      </div>
    </div>
  );
};

export default page;
