import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";

const Navbar = () => {
    return (
        <nav className="bg-transparentw-full flex justify-center py-[20px]">
            <div className="w-[1300px] flex justify-between items-center">


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
                    <Link href={"/register"}>Hire people</Link>
                    <Link href={"/login"} className="bg-white flex justify-center items-center w-[120px] py-[7px] rounded-3xl text-[#007456s]">Login</Link>
                </div>

            </div >
        </nav>
    );
};

export default Navbar;