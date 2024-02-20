import Link from "next/link";
import { IoPersonOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
const Register = () => {
    return (
        <div>
            <div className="flex items-center justify-center mt-5  gap-10"><button className="bg-gray-300 flex gap-2 rounded-none p-3 btn btn-success "> <IoPersonOutline className="mt-1 "></IoPersonOutline>Candidate</button>
            <button className="bg-[#007456] text-white flex  rounded-none p-3 justify-center gap-2 items-center text-[#007456s]"><MdWorkOutline className=""></MdWorkOutline>Employer</button></div>
          
  
    
    <div className="flex items-center mt-5 ml-5 justify-center">
    <div class=" shrink-0 w-full max-w-md  flex items-center justify-center gap-10 p-10 bg-base-200">
      <form class="w-full">
       <div className="flex gap-5">
         {/* first name */}
         <div class="flex flex-col">
          <label class="label">
            <span class="label-text">First Name</span>
          </label>
          <input type="text" placeholder="Name" class="border w-[150px] p-1 " required />
        </div>
        {/* last name */}
        <div class="flex flex-col">
          <label class="label">
            <span class="label-text">Last Name</span>
          </label>
          <input type="text" placeholder="Name" class="border w-[150px] p-1 " required />
        </div>
        
       </div>
       {/* username */}
       <div class="flex  mt-5 flex-col">
          <label class="label">
            <span class="label-text">Username</span>
          </label>
          <input type="text" placeholder="Name" class="border w-[320px] p-1 " required />
        </div>
        {/* email */}
        <div class="flex mt-5 flex-col">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" class="border w-[320px] p-1" required />
        </div>
        {/* password */}
        <div class="flex mt-5 flex-col">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" class="border w-[320px] p-1" required />
        </div>
        <div className="flex mt-5"><input type="checkbox"  className="checkbox" />
        <p className="ml-5 text-sm">Accept the <span className="text-[#007456] font-bold">Terms</span> and <span className="text-[#007456] font-bold">Privacy Policy</span></p></div>
        <div class=" mt-6 items-center flex justify-center">
          <button class="btn btn-primary w-1/2">Signup</button>
        </div>
        <div className="mt-3"> <p className="text-sm">Already have an account? please  <Link href={"/login"} className="text-[#007456] font-bold">Login</Link></p></div>
      </form>
     
    
 
</div>
    </div>
        </div>
    );
};

export default Register;