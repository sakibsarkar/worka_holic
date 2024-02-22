"use client";
import { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";

const category = ["Web developer", "Devops Engineer", "Full stack developer"];
const DeliveryTime = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const CreateGig = () => {
  //for category
  const [selectedCategory, setSelectedCategory] = useState("");

  // for delivery days
  const [selectedDays, setSelectedDays] = useState(1)

  //for skills
  const [selectedSkills, setSelectedSkills] = useState([]);


  // skill feild ref 
  const skillFeildRef = useRef(null)


  // for adding skill after pressing "space bar"
  const handleAddSkill = (e) => {
    const keyCode = e.keyCode
    let value = e.target.value
    let skills = [...selectedSkills]
    // spacebar key code = 32
    if (keyCode == 32) {
      skills.push(value.trim())
      setSelectedSkills(skills)
      skillFeildRef.current.value = ""
    }
  }


  const handleRemoveSkill = (index) => {
    let replica = [...selectedSkills]
    replica.splice(index, 1)
    setSelectedSkills(replica)
  }


  return (
    <div>
      <form className="w-11/12 mx-auto border-2 border-gray-200 shadow-sm bg-white min-h-[600px] p-4">
        <div className="mt-8">
          <input
            type="text"
            placeholder="I will do"
            className="border-2 border-gray-200 rounded-md py-1 px-1 w-full h-20"
          />
        </div>
        <div className="mt-8">
          <textarea placeholder="Type something here..." className="border-2 border-gray-200 rounded-md py-1 px-1 w-full min-h-[150px]" name="" id="" cols="30" rows="4"></textarea>
        </div>

        <div className="flex justify-start items-center gap-[10px]">
          {
            selectedSkills?.map((skill, i) => <p
              key={i + "i"}
              className="px-[10px] py-[5px] cursor-pointer bg-gray-200 rounded-full text-[#707070] cursor-pointerf flex justify-start items-center gap-[5px]"
              onClick={handleRemoveSkill}
            ><RxCross2 /> {skill}</p>)
          }
        </div>
        <div className="flex justify-center items-center gap-[20px] mt-[20px]">


          <div className="w-full">
            <input type="text"
              placeholder="Skills for this gig"
              className="pl-1  w-full  rounded-md py-2 -mr-8 text-gray-500 cursor-pointer border-2 border-gray-200"
              onKeyUp={handleAddSkill}
              ref={skillFeildRef}
            />
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full rounded-md py-2 text-gray-500 cursor-pointer border-2 border-gray-200"
          >
            <option value="">Select a Category</option>
            {
              category.map((cat, i) => <option key={i} value={cat}>
                {cat}
              </option>)
            }
          </select>


        </div>
        <div className="flex justify-center items-center gap-[20px] mt-[20px]">

          <div className="w-full">
            <input
              type="text"
              placeholder="Price"
              className="border-2 border-gray-200 rounded-md py-2 px-1 w-full pl-1 text-gray-500"
            />
          </div>


          <select
            className="w-full rounded-md py-2 text-gray-500 cursor-pointer border-2 border-gray-200"
            value={selectedDays}
            onChange={(e) => setSelectedDays(e.target.value)}
          >
            <option value="">Delivery time</option>
            {
              DeliveryTime.map((time, i) => <option key={i + "skil"} value={time}>
                {time} {time < 2 ? "Day" : "Days"}
              </option>)
            }
          </select>

        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between mt-12">

          <div>
            <input className="file:bg-gradient-to-b file:from-sky-300" accept="image/*" type="file" name="" />
          </div>
          <div>
            <button className="btn rounded-md mt-4 lg:mt-0 bg-black text-white" >
              Save & Continue
            </button>
          </div>
        </div>
      </form>

    </div>
  );
};

export default CreateGig;
