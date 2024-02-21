import Image from "next/image";
import { FaSearchLocation } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

const ProfileCard = () => {
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
  const userImageUrl =
    "https://cdn.discordapp.com/attachments/796439138403352596/1209968948695670834/9743ecac80966a95e9d328c08b995c04.png?ex=65e8da65&is=65d66565&hm=5601b0aa10312c569e59ace0e04ae26ec63056e4db9011501a0e8eef24289c4e&";

  return (
    <div>
      {/* profile top card */}
      <div className="p-8 border-[1px] border-gray-300 w-[400px] mb-10 bg-white">
        <div className="flex flex-col items-center mb-5">
          <Image
            className="rounded-full"
            src={userImageUrl}
            width={200}
            height={200}
            alt="user.png"
          />
          <h3 className="text-2xl font-semibold mt-3">{userDetails.name}</h3>
          <p>@{userDetails.userName}</p>
          <p>{userDetails.bio}</p>
        </div>
        <hr />
        <div className="pt-5">
          <p className="flex justify-between">
            <span className="flex items-center gap-4 font-medium">
              <FaSearchLocation /> <span>From</span>
            </span>
            <span className="font-semibold"> {userDetails.from}</span>
          </p>
          <p className="flex justify-between">
            <span className="flex items-center gap-4 font-medium">
              <FaUser /> Member since
            </span>
            <span className="font-semibold">
              {userDetails.accountCreatedAt}
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
            <p className="text-sm">Edit Description</p>
          </div>
          <p>{userDetails.description}</p>
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
            {userDetails.skills.map((skill, index) => (
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
            {userDetails.language.map((language, index) => (
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
