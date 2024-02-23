import Image from "next/image";
import img from "../../../public/no_data.png";

const NoDataFound = () => {
    return (
        <div className="w-full h-[80vh] flex flex-col justify-center items-center gap-[20px]">
            <Image alt="no data" src={img} width={600} height={570} />
            <p className="text-primary-color text-[30px]">opss!.. No Gig found</p>
        </div>
    );
};

export default NoDataFound;