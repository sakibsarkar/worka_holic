"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "./../../../../public/logo.png";
import { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { FaUserPen } from "react-icons/fa6";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { VscFileSubmodule } from "react-icons/vsc";

const NavBar = () => {

  const [show, setShow] = useState(false)

  return (
    <div className="flex justify-between text-xl max-w-7xl  mx-auto py-5 items-center font-semibold">
      <div className="flex items-center gap-10">
        <Link href="/"><Image src={logo} width={200} alt="logo.png" /></Link>
        <div className="flex gap-6">
          <Link href={"/profile"}>Profile</Link>
          <Link href={"/dashboard/orders"}>Orders</Link>
          <Link href={"/"}>Home</Link>
        </div>
      </div>
      <div className="flex justify-end gap-6 mr-5 relative w-[170px] cursor-pointer" onClick={() => setShow(!show)}>
        <FaUser />
        {
          show ?
            <div className="absolute w-full overflow-hidden top-[25px] rounded-md left-0 bg-gray-100 border-[1px] border-gray-400 flex flex-col justify-start items-start" >

              <Link href={"/profile"} className="text-[#696969] text-[15px] flex justify-start pl-[7px] items-center gap-[5px] border-b-[1px]  border-[#a7a7a7] w-full py-[2px] hover:bg-[#e2e2e2]">
                <FaUserPen />Profile
              </Link>


              <Link href={"/createGig"} className="text-[#696969] text-[15px] flex justify-start pl-[7px] items-center gap-[5px] border-b-[1px]  border-[#a7a7a7] w-full py-[2px] hover:bg-[#e2e2e2]">
                <MdOutlineCreateNewFolder /> Create a new Gig
              </Link>


              <Link href={"/dashboard/orders"} className="text-[#696969] text-[15px] flex justify-start pl-[7px] items-center gap-[5px] border-b-[1px] border-[#a7a7a7] w-full py-[2px] hover:bg-[#e2e2e2]">
                <VscFileSubmodule /> Manage Orders
              </Link>

            </div>
            :
            ""
        }
      </div>
    </div>
  );
};

export default NavBar;
