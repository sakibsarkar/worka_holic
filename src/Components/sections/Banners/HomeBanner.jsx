import PrimaryButton from '@/Components/buttons/PrimaryButton';
import Image from 'next/image';
import React from 'react';
import { IoSearchSharp } from "react-icons/io5";

const HomeBanner = () => {
    
    return (
        <section className='bg-primary-color'>
            <div className="container px-5 md:px-0">
                <div className='flex items-center justify-center gap-3 min-h-screen'>
                    <div className='grid lg:grid-cols-2 gap-2 items-center'>
                        <div className=' order-1 flex flex-col gap-10'>
                            <h1 className='text-4xl md:text-5xl font-bold text-white'>Find your <span className='italic font-bold'>dream </span> job now</h1>
                            <div className='flex flex-col gap-2 '>
                                <div className='lg:flex items-center bg-white px-3 gap-2 rounded-md lg:rounded-[80px]  '>
                                    <div className='py-3 flex w-full '>
                                        <div className='py-3'>
                                            <IoSearchSharp size={25} className='text-gray-600' />
                                        </div>
                                        <input type="text" className='py-2 w-full px-2 focus-visible:outline-none' placeholder='Search...' />
                                    </div>
                                    <div className='py-3 border-y md:border-y-0 lg:border-x w-full'>
                                        <select name="" className=' w-full lg:w-[200px] py-2 px-2 focus-visible:outline-none' id="">
                                            <option value="">Category</option>
                                            <option value="">Category</option>
                                        </select>
                                    </div>
                                    <div className='py-3 text-center lg:text-left'>
                                        <PrimaryButton>
                                            Search
                                        </PrimaryButton>
                                    </div>
                                </div>
                                <div className='flex flex-col lg:flex-row gap-2 text-white mb-4'>
                                    <span>Popular Searches:</span> 
                                    <ul className='flex flex-wrap items-center gap-2'>
                                        <li><a href="" className=' hover:text-gray-200 transition-all ' >Data</a>,</li>
                                        <li><a href="" className=' hover:text-gray-200 transition-all ' >Web Design</a>,</li>
                                        <li><a href="" className=' hover:text-gray-200 transition-all ' >Web Development</a></li>
                                    </ul>
                                </div>
                            </div>
                           

                            <div>
                                <p className='text-white mb-2 text-lg font-medium '>5k+ candidates get job</p>
                                <div>
                                    <Image className='' src="https://civi.uxper.co/wp-content/uploads/2022/12/number-3.png" width={250} height={60} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='order-2'>
                            <div>
                                <Image className='animate-bunchCustom ' width={500} height={300} src="https://civi.uxper.co/wp-content/uploads/2022/12/girl-work-on-table.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;