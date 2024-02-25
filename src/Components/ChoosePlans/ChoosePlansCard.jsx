import { FaCheck } from "react-icons/fa6";

const ChoosePlansCard = ({ details }) => {
  return (
    <div className="bg-white w-[300px] rounded-md p-5 border-2 hover:border-yellow-200 hover:border-2">
      <div className="flex justify-between">
        <h4 className="text-primary-color font-semibold">{details?.name}</h4>
        {details?.recommendation === "true" && (
          <small className="text-black bg-yellow-200 rounded p-1 font-bold">
            Recommended
          </small>
        )}
      </div>
      <h2 className="text-4xl font-semibold">
        {details?.price} <sub className="text-xl">/{details?.price_time}</sub>
      </h2>
      <div className="my-4 font-semibold">
        <hr />
      </div>
      <ul className="text-sm flex flex-col gap-2 ">
        {details?.features.map((feature, index) => (
          <li className="flex items-center gap-2 " key={index}>
            <FaCheck className="text-primary-color" /> <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="btn btn-primary bg-white text-black border-2 hover:bg-primary-color hover:text-white hover:border-primary-color w-full mt-4">
        Get started
      </button>
    </div>
  );
};

export default ChoosePlansCard;
