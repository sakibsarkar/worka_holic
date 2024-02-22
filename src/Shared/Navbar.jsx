"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { FaInfo } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { GrBusinessService } from "react-icons/gr";
import { MdOutlinePriceChange } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { UserContext } from "@/providers/UserProvider";

const Navbar = () => {
    const {user,setUser} = useContext(UserContext)
    const [isToggle,setIsToggle] = useState(false)
    const [show, setShow] = useState(false)

    const path = usePathname()
    const routes = [
        {
            href: "/",
            text: "Home",
            icon: <GoHomeFill />
        },
        {
            href: "/gigs",
            text: "Gigs",
            icon: <GrBusinessService />
        },

        {
            href: "/pricing",
            text: "Pricing",
            icon: <MdOutlinePriceChange />
        },

        {
            href: "/about",
            text: "About",
            icon: <FaInfo />
        }
    ]

    const handleShow = () => {
        setShow(true)
        document.body.classList.add("noScroll")
    }
    const handleHide = () => {
        setShow(false)
        document.body.classList.remove("noScroll")
    }
    console.log(user);
    // const handleLogout = async () => {
    //     await signOut();
    //     // setUser(null)
    // }


    return (
        <nav className="bg-white w-full flex  py-[20px] ">
            <div className="box justify-between items-center hidden md:flex ">
                <div className="logo w-150px">
                    <Image src={logo} width={170} height={170} alt="logo" />
                </div>

                <ul className="flex justify-center items-center gap-5 text-xl">
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/"}>Gigs</Link></li>
                    <li><Link href={"/"}>Pricing</Link></li>
                    <li><Link href={"/"}>About</Link></li>
                </ul>


                <div className="flex justify-between items-center gap-3">
                    {
                        user?._id ? <>
                            <div className="relative">
                                <span onClick={() => setIsToggle(!isToggle)} className="w-[40px] h-[40px]  ring-2 ring-gray-100 overflow-hidden inline-block p-[2px] rounded-full">
                                    <Image className="w-[40px] cursor-pointer h-[40px] object-cover rounded-full" src={user?.avater ? user?.avater : "https://t4.ftcdn.net/jpg/05/42/36/11/360_F_542361185_VFRJWpR2FH5OiAEVveWO7oZnfSccZfD3.jpg"} width={50} height={50} alt="" />
                                </span>
                                {
                                    isToggle && <ul className="absolute right-0 top-full w-[150px] bg-white overflow-hidden z-10 rounded-md shadow">
                                    <li> <Link href={`/${user?.userName}`} className="px-3 py-2 hover:bg-gray-100 w-full inline-block text-gray-700">Dashboard</Link> </li>
                                    <li> <button onClick={() => signOut()} className="px-3 py-2 text-left hover:bg-gray-100 w-full inline-block text-gray-700">Logout</button> </li>
                                </ul>
                                }
                                
                            </div>
                        </> : <>
                           <Link href={"/register"}>Hire people</Link>
                            <Link href={"/login"} className="bg-[#007456] text-white flex justify-center items-center w-[120px] py-[7px] rounded-3xl text-[#007456s]">Login</Link>
                    </>
                    }
                 
                </div>

            </div >

            <div className="bg-white w-[95%] flex justify-between py-[10px] md:hidden">
                <div className="logo w-150px">
                    <Image src={logo} width={100} height={100} alt="logo" />
                </div>
                <button onClick={handleShow} className="text-[25px]">
                    {
                        show ? <RxCross2 /> : <RxHamburgerMenu />
                    }
                </button>



                <div className="fixed left-0 top-0 h-screen w-[0] bg-[lightgrey] z-50"
                    id={show ? "drawerOpen" : 'drawerClose'}
                >

                    <button onClick={handleHide} className="absolute top-[10px]
                        right-[20px] text-[30px] cursor-pointer z-[999]"><RxCross2 /></button>

                    <div className="flex flex-col justify-center items-center gap-[15px] mt-[50px] transition-[0.5s] overflow-hidden ">
                        {
                            routes.map((route, index) => <Link
                                key={index}
                                className="flex justify-start items-center text-[20px] gap-[15px] w-full pl-[20px] py-[8px]"
                                id={path === route.href ? "activeRoute" : ""}
                                href={route.href}
                            >
                                {route.icon}
                                {route.text}
                            </Link>)
                        }
                    </div>
                </div>




            </div>
        </nav>
    );
};

export default Navbar;