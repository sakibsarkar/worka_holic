import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
    return (
         <div className="bg-gray-100 py-10">
          
       <div className="bg-white h-full">
       <h1 className="mt-8 mb-16 text-center pt-8 text-4xl font-bold">
        Contact <span className="text-primary-color">Us</span>
      </h1>
       <div className="flex flex-col lg:flex-row px-20 ">
            <div className="flex-1">
            <form className="bg-white border border-black max-w-md mx-auto p-4 lg:p-8 mb-8 rounded-md">
           <div className="flex gap-1 lg:gap-4">
           <div>
                <input placeholder="First name" className="w-full mb-4 px-3 py-2 border-none rounded-sm bg-gray-100 focus:border-green-600" required type="text" />
            </div>
            <div>
                <input placeholder="Last name" className="w-full mb-4 px-3 py-2 border-none rounded-sm bg-gray-100 focus:border-green-600" required type="text" />
            </div>
           </div>
            <div>
                <input placeholder="Subject" className="w-full mb-4 px-3 py-2 border-none rounded-sm bg-gray-100 focus:border-green-600" required type="text" />
            </div>
            <div>
                <textarea rows='6' placeholder="Your message...." className="w-full mb-4 px-3 py-2 border-none rounded-sm bg-gray-100 focus:border-green-600" required type="text" />
            </div>
            <div>
            <button type={'button'} className={"w-full btn text-white bg-primary-color border hover:bg-gray-600 rounded-3xl hover:text-white "}>
                    Submit
            </button>
            </div>
         </form>
            </div>
            <div className="flex-1">
                <h1 className="text-3xl font-semibold mt-8 lg:mt-0 mb-2">Workaholic</h1>
                <p>Welcome to Workaholic, your one-stop digital marketplace for all your professional needs!<br></br>Whether you are a freelancer seeking new opportunities or a business in search of top talent, Workaholic connects you with the perfect match</p>
                <button type={'button'} className={"btn text-white w-32 bg-primary-color mt-6 border hover:bg-gray-600 rounded-3xl hover:text-white "}>
                    Visit Us
            </button>
            <div className="mt-6 mb-4">
                <div className="flex gap-1">
                <FiPhone className="text-xl text-green-700"></FiPhone>
                <p>+80123456789</p>
                </div>
                <div className="flex gap-1">
                <IoLocationOutline className="text-xl text-green-700"></IoLocationOutline>
                <p>Mirpur-1, section-1 Block c Dhaka</p>
                </div>
                <div className="flex gap-1">
                <MdOutlineMailOutline className="text-xl text-green-700"></MdOutlineMailOutline>
                <p>workaholic@gmail.com</p>
                </div>
            </div>
            </div>
        </div>
       </div>
        </div>
    
    );
};

export default Contact;