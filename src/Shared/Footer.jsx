import Image from "next/image";
import footerLogo from "../../public/footerLogo.webp";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="relative">
      <div
        style={{ backgroundColor: "#065f46" }}
        className="absolute left-0 w-full overflow-hidden"
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="relative block fill-white"
          ></path>
        </svg>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col mx-4">
            <Image
              className="mt-2"
              src={footerLogo}
              width={170}
              height={170}
              alt="logo"
            />

            <div className="absolute mt-16 text-white">
              <p className="text-xl font-bold">WorkAholic Industries Limited</p>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-xl text-white">Services</h1>
            <ul>
              <Link href="/">
                <li className="my-4 list-none text-white">Design</li>
              </Link>
              <Link href="/">
                <li className="my-4 list-none text-white">Development</li>
              </Link>
              <Link href="/">
                <li className="my-4 list-none text-white">Advertisement</li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-xl text-white">Company</h1>
            <ul>
              <Link href="/">
                <li className="my-3 list-none text-white">About Us</li>
              </Link>
              <Link href="/">
                <li className="my-3 list-none text-white">Contact Us</li>
              </Link>
              <Link href="/">
                <li className="my-3 list-none text-white">Gigs</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;