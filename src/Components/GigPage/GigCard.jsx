import Image from "next/image";
import { FaStar } from "react-icons/fa";

const GigCard = ({ detail }) => {
  const details = {
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
  };
  return (
    <div className="bg-white w-[300px] p-3 rounded-lg mx-auto">
      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="rounded-lg"
            width={300}
            height={250}
            src={detail.image}
            alt=""
          />
        </div>
        <div className="flex gap-5">
          <Image
            className="rounded-full"
            width={50}
            height={30}
            src={detail.user.image}
            alt=""
          />
          <div>
            <p>{detail.user.name}</p>
            <p className="flex items-center gap-2 font-semibold">
              <FaStar /> {detail.ratings}
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-lg">{detail.title}</h2>
        </div>
        <div className="flex justify-end">
          <button className="btn btn-primary w-36">See Details</button>
        </div>
      </div>
    </div>
  );
};

export default GigCard;
