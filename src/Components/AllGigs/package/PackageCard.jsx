import React from 'react';
import { BiCheck } from 'react-icons/bi';
import { FaClock } from 'react-icons/fa6';

const PackageCard = () => {
    return (
        <>
            <div className='border p-6'>
                <div className='flex justify-between items-center text-gray-600 mb-3'>
                    <span className='text-lg font-semibold'>UIUX Lite</span>
                    <span className='text-xl font-bold'>$ 45</span>
                </div>
                <p className='text-base text-gray-500'>Website 1 page or 3 sections Mobile App 3 screens</p>
                <div className='flex gap-2 items-center mt-3 text-gray-600'>
                    <FaClock />
                    <span className='font-semibold'>6 Days Delivery</span>
                </div>
                <ul className='mt-2 flex flex-col gap-1'>
                    <li className='flex gap-2 items-center'>
                        <BiCheck />
                        <span className='font-normal text-base'>1 page</span>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <BiCheck />
                        <span className='font-normal text-base'>  Responsive design</span>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <BiCheck />
                        <span className='font-normal text-base'> Prototype</span>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <BiCheck />
                        <span className='font-normal text-base'> Source file</span>
                    </li>
                </ul>
                <div className='mt-3 '>
                    <button type={'button'} className={"w-full btn hover:bg-gray-900 rounded text-white bg-black"}>
                        Continue
                    </button>
                </div>
            </div>

            <div className='mt-3 p-6'>
                <button type={'button'} className={"w-full btn text-gray-800 bg-white border hover:bg-gray-600 rounded hover:text-white "}>
                    Contact Me
                </button>
            </div>   
        </>
    );
};

export default PackageCard;