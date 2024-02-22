import Image from "next/image";
import logo from "./../../../../public/logo.png";
import Link from "next/link";
import { FaMailchimp, FaUser } from "react-icons/fa6";

const NavBar = () => {
  return (
    <div className="flex justify-between text-xl max-w-7xl  mx-auto py-5 items-center font-semibold">
      <div className="flex items-center gap-10">
        <Image src={logo} width={200} alt="logo.png" />
        <div className="flex gap-6">
          <Link href={"/"}>Menu 1</Link>
          <Link href={"/dashboard/orders"}>Orders</Link>
        </div>
      </div>
      <div className="flex gap-6 mr-5">
        <FaMailchimp />
        <FaUser />
      </div>
    </div>
  );
};

export default NavBar;
