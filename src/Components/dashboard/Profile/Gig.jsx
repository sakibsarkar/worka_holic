import Image from "next/image";
import Link from "next/link";

const Gig = ({ gigDetails }) => {

  const { _id, userId, image, rating, status, title, description, price, skills, deliveryTime, __v } = gigDetails || {}

  return (
    <div className="w-[300px] h-[294px]">
      <Image width={300} height={250} src={image} alt="gig.png" className="w-full h-[200px] object-cover" />
      <div className="p-3 border-[1px] border-gray-300 bg-white space-y-4 w-full">
        <Link href={`gig/${_id}`} className="font-medium hover:underline">{title}</Link>
        <p className="flex items-center justify-end font-semibold text-lg gap-2">
          <span className="text-sm ">STARTING AT </span> ${price}
        </p>
      </div>
    </div>
  );
};

export default Gig;
