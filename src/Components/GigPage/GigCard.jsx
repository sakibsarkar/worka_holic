import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const GigCard = ({ gig }) => {
  const { _id, userId, image, rating, status, title, description, price, skills, deliveryTime } = gig || {}
  return (

    <div className="bg-white w-[300px] h-[380px] p-3 rounded-lg mx-auto">
      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="rounded-lg"
            width={300}
            height={250}
            src={image}
            alt=""
          />
        </div>
        <div className="flex gap-5">
          <div className="w-[40px] h-[40px] rounded-[50%] overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              width={50}
              height={30}
              src={userId?.avater}
              alt=""
            />
          </div>
          <div>
            <p>{userId?.name}</p>
            <p className="flex items-center gap-2 font-semibold">
              <FaStar /> {rating}
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-lg">{title}</h2>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-bold text-[18px]">${price}</p>
          <Link href={`/gig/${_id}`} className="btn btn-primary w-36">See Details</Link>
        </div>
      </div>
    </div>
  );
};

export default GigCard;
