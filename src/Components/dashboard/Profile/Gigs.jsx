import { FaPlusCircle } from "react-icons/fa";
import Gig from "./Gig";

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
  return (
    <div className="flex-1 ">
      <div className="p-8 border-[1px] border-gray-300  mb-10 bg-white">
        <p className="font-semibold">Gigs</p>
      </div>
      <div className="flex flex-wrap gap-5">
        {gigDetails.map((gig, index) => (
          <Gig key={index} gigDetails={gig} />
        ))}
        <div className=" border-[1px] border-gray-300 bg-white w-[300px] flex flex-col justify-center items-center h-[295px] gap-5 ">
          <FaPlusCircle className="text-6xl" />{" "}
          <p className="font-medium">Create a new gig</p>
        </div>
      </div>
    </div>
  );
};

export default Gigs;
