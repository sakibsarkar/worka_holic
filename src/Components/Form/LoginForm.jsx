'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { FaFacebook, FaLinkedin } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import { signIn } from "next-auth/react";
import { UserContext } from '@/providers/UserProvider';

const LoginForm = () => {
    const router = useRouter();
    
    const {setUser} = useContext(UserContext)

    const handleSubmit = async e => {
        e.preventDefault();
    
        const email  = e.target.email.value ;
        const password  = e.target.password.value ;

        // Validation
        if(!email) return toast.warning("Email is required");
        if(!password) return toast.warning("Password is required");

        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });
      
          
            if (res.error) {
                toast.error("Invalid Credentials");
                return;
            }
            try {
                const res = await fetch(`/api/user`,{
                    method:"GET"
                });
                const data = await res.json();
                setUser(data?.user);
            } catch (error) {
                
            }
            router.replace("/");
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
        <form onSubmit={handleSubmit} className="w-full">
       
       
            {/* email */}
            <div className="flex mt-5 flex-col">
                <label className="label">
                <span className="label-text mb-5"> Account or Email</span>
                </label>
                <input type="email" name='email' placeholder=" Enter Account or email" className="border mt-3 w-[320px] p-2 rounded-md" required />
            </div>

            {/* password */}
            <div className="flex mt-5 flex-col">
                <label className="label">
                <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="border w-[320px] mt-3 p-2 rounded-md" required />
            </div>
       
            <div className=" mt-6 items-center flex justify-center">
                <button type='submit' className="btn btn-primary w-1/2">Login</button>
            </div>
            <div className="mt-3"> <p className="text-sm">Do not have an account? please  <Link href={"/register"} className="text-[#007456] font-bold">Signup</Link></p></div>
            <p className="text-gray-400 mt-5 text-sm items-center flex justify-center">Or Continue with </p>
            <p className="flex text-3xl items-center justify-center mt-5 gap-2"><FaFacebook className="text-blue-500"></FaFacebook> <AiFillGoogleCircle className="text-red-500"></AiFillGoogleCircle> <FaLinkedin className="text-blue-600"></FaLinkedin></p>
        </form>   
        </>
    );
};

export default LoginForm;