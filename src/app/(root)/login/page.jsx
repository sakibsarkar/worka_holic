import Link from "next/link";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
const Login = () => {
    return (
        <div>
            <h2 className="flex items-center justify-center text-3xl  mt-5 font-bold text-[#007456] ">Please Login</h2>
            <div className="flex items-center mt-5 ml-5 justify-center">
    <div class=" shrink-0 w-full max-w-md  flex items-center justify-center gap-10 p-10 bg-base-200">
      <form class="w-full">
       
       
        {/* email */}
        <div class="flex mt-5 flex-col">
          <label class="label">
            <span class="label-text mb-5"> Account or Email</span>
          </label>
          <input type="email" placeholder=" Enter Account or email" class="border mt-3 w-[320px] p-2 rounded-md" required />
        </div>
        {/* password */}
        <div class="flex mt-5 flex-col">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" class="border w-[320px] mt-3 p-2 rounded-md" required />
        </div>
        
        <div class=" mt-6 items-center flex justify-center">
          <button class="btn btn-primary w-1/2">Login</button>
        </div>
        <div className="mt-3"> <p className="text-sm">Do not have an account? please  <Link href={"/register"} className="text-[#007456] font-bold">Signup</Link></p></div>
        <p className="text-gray-400 mt-5 text-sm items-center flex justify-center">Or Continue with </p>
        <p className="flex text-3xl items-center justify-center mt-5 gap-2"><FaFacebook className="text-blue-500"></FaFacebook> <AiFillGoogleCircle className="text-red-500"></AiFillGoogleCircle> <FaLinkedin className="text-blue-600"></FaLinkedin></p>
      </form>
     
    
 
</div>
    </div>

        </div>
    );
};

export default Login;