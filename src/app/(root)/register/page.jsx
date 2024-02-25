"use client";
import Link from "next/link";
import RegisterForm from "@/Components/Form/RegisterForm";
import { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";

const Register = () => {

    const [selectedRole, setSelectedRole] = useState("buyer")

    const selectedStyle = {
        background: "#007456",
        color: "white"
    }
    return (
        <div>
            <div className="flex items-center justify-center mt-5  gap-10"><button className="bg-gray-300 flex gap-2 rounded-none p-3 btn btn-success"
                style={selectedRole == "buyer" ? selectedStyle : {}}
                onClick={() => setSelectedRole("buyer")}
            > <IoPersonOutline className="mt-1 ">
                </IoPersonOutline>Buyer
            </button>
                <button className="bg-gray-300 flex items-center justify-center gap-2 rounded-none p-3 btn btn-success "
                    onClick={() => setSelectedRole("seller")}
                    style={selectedRole == "seller" ? selectedStyle : {}}
                >
                    <MdWorkOutline className=""></MdWorkOutline>Seller
                </button>
            </div>



            <div className="flex items-center mt-5 ml-5 justify-center">
                <div class=" shrink-0 w-full max-w-md  flex items-center justify-center gap-10 p-10 bg-base-200">
                    <RegisterForm selectedRole={selectedRole} />



                </div>
            </div>
        </div>
    );
};

export default Register;