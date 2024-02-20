import Image from 'next/image';
import React from 'react';
import { FaClock, FaHouse, FaStar } from 'react-icons/fa6';
import { BiCheck } from "react-icons/bi";
import PrimaryButton from '@/Components/buttons/PrimaryButton';

const GigDetails = () => {
    return (
        <>
            <section className='mt-10 mb-8'>
                <div className="container">
                    <ul className='flex gap-2 items-center flex-wrap text-sm text-gray-500'>
                        <li><a href="#" className='text-base font-normal text-gray-700'><FaHouse /> </a></li> / 
                        <li><a href="#" className='text-base font-normal text-gray-700'>Graphic Design</a></li> / 
                        <li><a href="#" className='text-base font-normal text-gray-700'>Web Design</a></li> / 
                        <li><a href="#" className='text-base font-normal text-gray-700'>UI/UX Design</a></li>
                    </ul>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className='grid lg:grid-cols-3 gap-10'>
                        <div className='lg:col-span-2'>
                            <h1 className='text-2xl font-bold'>I will do professional UI UX design for websites, mobile apps or dashboards</h1>
                            <div className='flex gap-3 mt-3 mb-3'>
                                <div>
                                    <div className='w-[65px] h-[65px] rounded-full'>
                                        <Image className='w-[65px] h-[65px] rounded-full' src="https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/903f5bd8a2cde66d26c5421aef08aa0d-1702839268928/32cb23e3-e6e9-42db-af4b-fd583da4e895.JPG" width={100} height={100} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className='flex gap-4 items-center'> <span className='text-lg font-bold'>Mohin Rana</span> <span className='text-xs bg-gray-800 text-white inline-block px-2 py-1 rounded'>Work aholic choose</span> </div>
                                    <div className='flex items-center gap-2'>
                                        <div className='flex items-center gap-1'><FaStar /> <span>5.0</span></div>
                                        | <div className='text-sm font-medium'> 2 Orders in Queue </div>
                                    </div>
                                </div>
                            </div>

                            {/* Gallary  */}
                            <div>
                                <div>
                                    <div className='w-full bg-gray-100'>
                                        <Image className='mx-auto' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/347821489/original/3ac699d5ae33fc598f8d228e0672487e52a11cee/ui-ux-website-mobile-app-landing-page-dashboard-software-figma-design.jpg" width={600} height={400} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className='flex justify-center gap-2 items-center mt-3 '>
                                        <Image className='w-[100px]' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/347821489/original/3ac699d5ae33fc598f8d228e0672487e52a11cee/ui-ux-website-mobile-app-landing-page-dashboard-software-figma-design.jpg" width={100} height={100} alt="" />
                                        <Image className='w-[100px]' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/347821489/original/3ac699d5ae33fc598f8d228e0672487e52a11cee/ui-ux-website-mobile-app-landing-page-dashboard-software-figma-design.jpg" width={100} height={100} alt="" />
                                        <Image className='w-[100px]' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/347821489/original/3ac699d5ae33fc598f8d228e0672487e52a11cee/ui-ux-website-mobile-app-landing-page-dashboard-software-figma-design.jpg" width={100} height={100} alt="" />
                                    </div>
                                </div>
                            </div>
                            {/* About gig */}
                            <div className='mt-5'>
                                <h2 className='text-xl font-semibold text-gray-700'>About Gig</h2>
                                <div className='text-base text-gray-600'>
                                    With over many years of experience Lead UI/UX Designer, I specialize in enhancing the visual design of Mobile Apps and Websites. My meticulous process ensures timely and exceptional results:
                                    Project Understanding:
                                    - I deeply understand your project goals and requirements to align the designs with your objectives.
                                    Audience Discovery:
                                    - I identify your target audience, enabling me to tailor designs that resonate effectively with your users.
                                    Wireframing:
                                    - Strategic planning is executed through meticulous project wireframing, ensuring a thoughtful and organized approach.
                                    Visual-Design:
                                    - I craft stunning visual elements that elevate the aesthetics of your Webflow site, delivering a captivating user experience.
                                </div>
                            </div>

                            {/* About seller */}
                            <div className='mt-8'>
                                <h3 className='text-xl font-semibold text-gray-600 mb-3'>About the seller</h3>
                                <div className='flex gap-3 mt-3 mb-3'>
                                    <div>
                                        <div className='w-[65px] h-[65px] rounded-full'>
                                            <Image className='w-[65px] h-[65px] rounded-full' src="https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/903f5bd8a2cde66d26c5421aef08aa0d-1702839268928/32cb23e3-e6e9-42db-af4b-fd583da4e895.JPG" width={100} height={100} alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex gap-4 items-center'> <span className='text-lg font-bold text-gray-800'>Mohin Rana</span> </div>
                                        <div className='flex gap-4 items-center'> <span className='text-base font-normal text-gray-700'>Web Development with React</span> </div>
                                        <div className='flex items-center gap-2'>
                                            <div className='flex items-center gap-1'><FaStar /> <span>5.0</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='border rounded-md p-8'>
                                    <div className='flex flex-col mb-4 gap-5'>
                                        <div className='grid grid-cols-2 gap-2'>
                                            <div>
                                                <p className='text-gray-500 font-medium'>From</p>
                                                <p className='text-gray-600 font-semibold'>Bangladesh</p>
                                            </div>
                                            <div>
                                                <p className='text-gray-500 font-medium'>Member since</p>
                                                <p className='text-gray-600 font-semibold'>Oct 2023</p>
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-2 gap-2'>
                                            <div>
                                                <p className='text-gray-500 font-medium'>Avg. response time</p>
                                                <p className='text-gray-600 font-semibold'>1 hour</p>
                                            </div>
                                            <div>
                                                <p className='text-gray-500 font-medium'>Last delivery</p>
                                                <p className='text-gray-600 font-semibold'>4 day</p>
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-2 gap-2'>
                                            <div>
                                                <p className='text-gray-500 font-medium'>Languages</p>
                                                <p className='text-gray-600 font-semibold'>English</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='py-3'>
                                        <p className='text-gray-600'>I am proficient UI/UX designer and a skilled social media marketer. I'm deeply passionate about facilitating business growth online and possess a profound expertise in SEO techniques that significantly boost online visibility.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:col-span-1'>
                            <div className=' sticky top-10 '>
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
                            </div>

                           
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GigDetails;