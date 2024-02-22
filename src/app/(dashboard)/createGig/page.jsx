/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const options = ["Web developer", "Devops Engineer", "Full stack developer"];
const skills = ["HTML", "CSS", "Javascript", "ReactJs", "NodeJs", "ExpressJs", "MongoDB", "Php", "MySql"];
const page = () => {
    //for category
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);
  //for skills
  const [showSkill, setShowSkill] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <form className="w-11/12 mx-auto border-2 border-gray-200 shadow-sm bg-white h-[600px] p-4">
        <div className="mt-8">
          <input
            type="text"
            placeholder="I will do"
            className="border-2 border-gray-200 rounded-md py-1 px-1 w-full h-20"
          />
        </div>
        <div className="mt-8">
          <textarea placeholder="Type something here..." className="border-2 border-gray-200 rounded-md py-1 px-1 w-full" name="" id="" cols="30" rows="4"></textarea>
        </div>
        <div className="flex mt-8">
          <div className="flex-1">
          <DatePicker className="w-full md:w-[325px] lg:w-[560px] pl-1 px-1 py-2 rounded-md mr-4 text-gray-500 cursor-pointer border-2 border-gray-200" selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>
          <div className="flex-1">
          <div className="inline-flex rounded-md">
            <div className="relative inline-flex shadow-sm bg-white ">
              <input
                type="text"
                value={selected || "Select a category"}
                onClick={() => setShow(!show)}
                readOnly
                className="pl-1 w-full md:w-[325px] lg:w-[560px] rounded-md py-2 -mr-8 text-gray-500 cursor-pointer border-2 border-gray-200"
              />
              <IoIosArrowDown
                onClick={() => setShow(!show)}
                className="text-gray-600 mt-3 cursor-pointer"
              ></IoIosArrowDown>

              <div className="relative">
                {show && (
                  <ul className="absolute z-10">
                    {options.map((option, i) => (
                      <li
                        key={i}
                        className="py-2 mt-1 px-4 text-gray-600 w-64"
                        onClick={() => {
                          setSelected(option);
                          setShow(false);
                        }}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="flex mt-8">
        <div className="flex-1">
        <input
            type="text"
            placeholder="Price"
            className="border-2 border-gray-200 rounded-md py-2 px-1 w-full md:w-[325px] lg:w-[560px] mr-4 pl-1 text-gray-500"
          />
          </div>
        <div className="flex-1">
        <div className="inline-flex rounded-md">
            <div className="relative inline-flex shadow-sm bg-white">
              <input
                type="text"
                value={selectedSkill || "Skills"}
                onClick={() => setShowSkill(!showSkill)}
                readOnly
                className="pl-1 w-full md:w-[325px] lg:w-[560px] rounded-md py-2 -mr-8 text-gray-500 cursor-pointer border-2 border-gray-200"
              />
              <IoIosArrowDown
                onClick={() => setShowSkill(!showSkill)}
                className="text-gray-600 mt-3 cursor-pointer"
              ></IoIosArrowDown>

              <div className="relative">
                {showSkill && (
                  <ul className="absolute z-10">
                    {skills.map((skill, i) => (
                      <li
                        key={i}
                        className="py-2 mt-1 px-4 text-gray-600 w-64"
                        onClick={() => {
                          setSelectedSkill(skill);
                          setShowSkill(false);
                        }}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between mt-12">
            <div><input className="file:bg-gradient-to-b file:from-sky-300" type="file" name="" id="" /></div>
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

export default page;
