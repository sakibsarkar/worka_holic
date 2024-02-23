"use client";
import Image from "next/image";
import ModalBox from "@/Components/ui/ModalBox";
import UpdateBio from "@/Components/Form/userInfo/UpdateBio";
import UpdateDisplayName from "@/Components/Form/userInfo/UpdateDisplayName";
import UpdateSellerTitle from "@/Components/Form/userInfo/UpdateSellerTitle";
import { useContext, useState } from "react";
import { FaEdit, FaSearchLocation } from "react-icons/fa";
import { FaCamera, FaPen, FaUser } from "react-icons/fa6";
import { singleImage } from "@/config/uploadImage/UploadImage";
import { UserContext } from "@/providers/UserProvider";
import { formatDate } from "@/utilsFunction/dateConverter";

// import { getServerSession } from "next-auth";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const ProfileCard = ({ userData = {} }) => {
  const { setUser, user } = useContext(UserContext)
  const [isOpen, setIsOpen] = useState(false)
  const [isBio, setIsBio] = useState(false)
  const [isTitle, setIsTitle] = useState(false)


  const userDetails = {
    name: "Ahammad Abdullah",
    userName: "ahammadabdullah",
    bio: "Full stack Developer",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    skills: ["React", "Node", "Express", "MongoDB", "Tailwind CSS"],
    language: ["English", "Bangla", "Hindi"],

    from: "Dhaka",
    accountCreatedAt: "May 2014",
  };
  const userImageUrl = "https://t4.ftcdn.net/jpg/05/42/36/11/360_F_542361185_VFRJWpR2FH5OiAEVveWO7oZnfSccZfD3.jpg";


  const handleAvater = async (e) => {
    const img = e.target.files[0];
    const url = await singleImage(img)

    const res = await fetch(`/api/user`, {
      method: "PATCH",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({ avater: url })
    })
    const data = await res.json();

    if (data.success) {
      setUser({ ...user, avater: url })
    }

  }


  const { languages, _id, bio, avater, name, userName, accountTitle, email, role, skills, country, responseTime, lastDeliveryTime, activeStatus, accountStatus, createdAt, updatedAt } = userData || {}

  return (
    <div>
      {/* profile top card */}
      <div className="p-8 border-[1px] border-gray-300 w-[400px] mb-10 bg-white">
        <div className="flex flex-col items-center mb-5">
          <div className=" h-[194px] w-[194px] object-cover rounded-full relative">
            <Image
              className="rounded-full w-full h-full object-cover border"
              src={avater || userImageUrl}
              width={200}
              height={200}
              alt="user.png"
            />
            <label htmlFor="avater" className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-gray-50 border border-gray-100 cursor-pointer absolute right-0 top-7">
              <FaCamera className="text-gray-500" />
              <input type='file'
                name='image'
                accept='image/*'
                onChange={handleAvater}
                className="hidden"
                id="avater" />
            </label>
          </div>
          <h3 className="cursor-pointer hover:underline text-2xl font-semibold text-gray-800 mt-3 flex items-center gap-2" onClick={() => setIsOpen(!isOpen)}>{name} <span className="cursor-pointer"><FaPen size={15} /></span> </h3>
          <ModalBox title={"Change Display name"} isOpen={isOpen} setIsOpen={setIsOpen}>
            <UpdateDisplayName isOpen={isOpen} setIsOpen={setIsOpen} />
          </ModalBox>
          <ModalBox title={"Title seller"} isOpen={isTitle} setIsOpen={setIsTitle}>
            <UpdateSellerTitle isOpen={isTitle} setIsOpen={setIsTitle} />
          </ModalBox>
          <p>@{userName}</p>
          <p className="flex items-center gap-2 cursor-pointer hover:underline"
            onClick={() => setIsTitle(!isTitle)}>{accountTitle || "Add your title"} <span className="cursor-pointer text-gray-600"><FaPen size={10} /></span> </p>
        </div>
        <hr />
        <div className="pt-5">
          <p className="flex justify-between">
            <span className="flex items-center gap-4 font-medium">
              <FaSearchLocation /> <span>From</span>
            </span>
            <span className="font-semibold"> {country}</span>
          </p>
          <p className="flex justify-between">
            <span className="flex items-center gap-4 font-medium">
              <FaUser /> Member since
            </span>
            <span className="font-semibold">
              {formatDate(createdAt)}
            </span>
          </p>
        </div>
      </div>
      {/* description and skills cards */}
      <div className="p-8 border-[1px] border-gray-300 w-[400px] bg-white ">
        {/* description */}
        <div>
          <div className="flex justify-between mb-4">
            <p className="font-semibold">Description</p>{" "}
            <p className="text-sm cursor-pointer" onClick={() => setIsBio(!isBio)} >Edit Description</p>
          </div>
          <p>{bio}</p>
          <ModalBox title={"Seller bio"} isOpen={isBio} setIsOpen={setIsBio}>
            <UpdateBio isOpen={isBio} setIsOpen={setIsBio} />
          </ModalBox>
        </div>
        <div className="my-5">
          <hr />
        </div>
        {/* skills */}
        <div>
          <div className="flex justify-between mb-4">
            <p className="font-semibold">Skills</p>{" "}
            <p className="text-sm">Add new</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {skills?.map((skill, index) => (
              <span key={index} className="bg-gray-100 px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="my-5">
          <hr />
        </div>
        {/* language */}

        <div>
          <div className="flex justify-between mb-4">
            <p className="font-semibold">Language</p>{" "}
            <p className="text-sm">Add new</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {languages?.type?.map((language, index) => (
              <span key={index} className="bg-gray-100 px-3 py-1 rounded-full">
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
