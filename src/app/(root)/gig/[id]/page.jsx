
import Image from "next/image";
import PackageCard from "@/Components/AllGigs/package/PackageCard";

import { FaHouse, FaStar } from "react-icons/fa6";
// import { formatDate } from "@/utilsFunction/dateConverter";

const GigDetails = async ({params}) => {

    const id = params?.id;
    const res = await fetch(`http://localhost:3000/api/query/gigs?gig_id=${id}`)
    const gigData = await res.json()

    const { _id, userId, image, rating, status, title, description, price, skills, deliveryTime } = gigData[0] || {}
    return (
      
        <section className='mb-20'>
            <section className='mt-10 mb-8'>
                <div className="box ">
                    <ul className='flex gap-2 items-center flex-wrap text-sm text-gray-500'>
                        <li><a href="#" className='text-base font-normal text-gray-700'><FaHouse /> </a></li> /
                        <li><a href="#" className='text-base font-normal text-gray-700'>Graphic Design</a></li> /
                        <li><a href="#" className='text-base font-normal text-gray-700'>Web Design</a></li> /
                        <li><a href="#" className='text-base font-normal text-gray-700'>UI/UX Design</a></li>
                    </ul>
                </div>
            </section>
            <section>
                <div className="box">
                    <div className='grid lg:grid-cols-3 gap-10'>
                        <div className='lg:col-span-2'>
                            <h1 className='text-2xl font-bold text-gray-800'>{title}</h1>
                            <div className='flex gap-3 mt-3 mb-3'>
                                <div>
                                    <div className='w-[40px] h-[40px] md:w-[65px] md:h-[65px] rounded-full'>
                                        <Image className='w-[40px] h-[40px] object-cover md:w-[65px] md:h-[65px] rounded-full' src={userId?.avater} width={100} height={100} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className='flex gap-4 items-center'> <span className='text-lg font-bold'>{userId?.name}</span> <span className='text-xs hidden bg-gray-800 text-white md:inline-block px-2 py-1 rounded'>Work aholic choose</span> </div>
                                    <div className='flex items-center gap-2'>
                                        <div className='flex items-center gap-1'><FaStar /> <span>{rating?.toFixed(2)}</span></div>
                                        | <div className='text-sm font-medium'> 2 Orders in Queue </div>
                                    </div>
                                </div>
                            </div>

                            {/* Gallary  */}
                            <div>
                                <div>
                                    <div className='w-full h-[450px] bg-gray-100 rounded-lg overflow-hidden'>
                                        <Image className='mx-auto w-full h-full object-cover' src={image} width={600} height={400} alt="" />
                                    </div>
                                </div>
                                <div className='hidden lg:flex justify-center'>
                                    <div className='flex justify-center gap-2 items-center mt-3 '>
                                        <Image className='w-[100px]' src={image} width={100} height={100} alt="" />
                                        <Image className='w-[100px]' src={image} width={100} height={100} alt="" />
                                        <Image className='w-[100px]' src={image} width={100} height={100} alt="" />


                                    </div>
                                </div>
                            </div>
                            <div className='lg:hidden mt-10'>
                                <PackageCard />
                            </div>
                            {/* About gig */}
                            <div className='mt-5'>
                                <h2 className='text-xl font-semibold text-gray-700'>About Gig</h2>
                                <div className='text-base text-gray-600 text-justify'>
                                    {description}
                                </div>
                            </div>

                            {/* skills */}
                            <div className="mt-5">
                                <h2 className='text-xl font-semibold text-gray-700'>Skills</h2>
                                <div className="flex justify-start items-center gap-[7px] mt-3">
                                    {
                                        skills?.map((skill, i) => <p
                                            key={i}
                                            className="bg-slate-200 w-fit px-[15px] py-[5px] rounded-full"

                                        >
                                            {skill}
                                        </p>)
                                    }
                                </div>
                            </div>

                            {/* About seller */}
                            <div className='mt-8'>
                                <h3 className='text-xl font-semibold text-gray-600 mb-3'>About the seller</h3>
                                <div className='md:flex gap-3 mt-3 mb-3'>
                                    <div>
                                        <div className='w-[65px] h-[65px] mx-auto md:ml-0 rounded-full'>
                                            <Image className='w-[65px] h-[65px] rounded-full' src={userId?.avater} width={100} height={100} alt="" />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <div className='flex gap-4 items-center justify-center md:justify-start'> <span className='text-lg font-bold text-gray-800'>{userId?.name}</span> </div>
                                        <div className='flex  gap-4 items-center justify-center md:justify-start'> <span className='text-base font-normal text-gray-700'>{userId?.accountTitleaccountTitle}</span> </div>
                                        <div className='flex items-center gap-2 justify-center md:justify-start'>
                                            <div className='flex items-center gap-1'><FaStar /> <span>5.0</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='border rounded-md p-8'>
                                    <div className='flex flex-col mb-4 gap-5'>
                                        <div className='grid md:grid-cols-2 gap-2'>
                                            <div>
                                                <p className='text-gray-500 font-medium'>From</p>
                                                <p className='text-gray-600 font-semibold'>Bangladesh</p>
                                            </div>
                                            <div>
                                                <p className='text-gray-500 font-medium'>Member since</p>
                                                {/* <p className='text-gray-600 font-semibold'>{formatDate(userId?.createdAt)}</p> */}
                                            </div>
                                        </div>
                                        <div className='grid md:grid-cols-2 gap-2'>
                                            <div>
                                                <p className='text-gray-500 font-medium'>Avg. response time</p>
                                                <p className='text-gray-600 font-semibold'>1 hour</p>
                                            </div>
                                            <div>
                                                <p className='text-gray-500 font-medium'>Last delivery</p>
                                                <p className='text-gray-600 font-semibold'>4 day</p>
                                            </div>
                                        </div>
                                        <div className='grid md:grid-cols-2 gap-2'>
                                            <div>
                                                <p className='text-gray-500 font-medium'>Languages</p>
                                                <p className='text-gray-600 font-semibold'>English</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='py-3'>
                                        <p className='text-gray-600'>{userId?.bio}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='hidden lg:block lg:col-span-1'>
                            <div className=' sticky top-10 '>
                                <PackageCard gigData={gigData[0]}  />
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default GigDetails;