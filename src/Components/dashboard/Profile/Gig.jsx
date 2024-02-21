import Image from "next/image";

const Gig = ({ gigDetails }) => {
  return (
    <div>
      <Image width={300} height={250} src={gigDetails.image} alt="gig.png" />
      <div className="p-3 space-y-2">
        <p className="font-medium">{gigDetails.title}</p>
        <p className="flex items-center justify-end font-semibold text-lg gap-2">
          <span className="text-sm ">STARTING AT </span> ${gigDetails.price}
        </p>
      </div>
    </div>
  );
};

export default Gig;
