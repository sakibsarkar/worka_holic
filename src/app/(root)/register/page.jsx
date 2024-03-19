'use client'
import RegisterForm from "@/Components/Form/RegisterForm";
import Link from "next/link";
import { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
const Register = () => {
    const [userRole, setUserRole] = useState('Seller');
    const handleRole = (val) => {
        setUserRole(val)
    }
    return (
        <div>
            <div className="flex items-center justify-center mt-5  gap-10">
                <button onClick={() => handleRole('Client')} className="bg-gray-300 flex gap-2 rounded-none p-3 btn btn-success "> <IoPersonOutline className="mt-1 "></IoPersonOutline>Client</button>
                <button onClick={() => handleRole('Seller')} className="bg-[#007456] text-white flex  rounded-none p-3 justify-center gap-2 items-center text-[#007456s]"><MdWorkOutline className=""></MdWorkOutline>Seller</button></div>
                <div className="flex items-center mt-5 ml-5 justify-center">
                <div class=" shrink-0 w-full max-w-md  flex items-center justify-center gap-10 p-10 bg-base-200">
                    <RegisterForm userRole={userRole} />          
                </div>
            </div>
        </div>
    );
};

export default Register;