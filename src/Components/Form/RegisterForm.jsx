"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const RegisterForm = ({userRole}) => {
  const { push } = useRouter();
  const handleSubmit = async e => {
    e.preventDefault();

    const name = e.target.firstName.value + " " + e.target.lastName.value;
    const userName = e.target.userName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!name) return toast.warning("Name is required");
    if (!userName) return toast.warning("User name is required");
    if (!email) return toast.warning("Email is required");
    if (!password) return toast.warning("Password is required");

    const obj = { name, userName, email, password,role:userRole };
    console.log(obj);
    try {
      const res = await fetch(`/api/register`, {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify(obj)
      })
      const data = await res.json();
      if (data.success) {
        e.target.reset();
        push('/login')
      }
    } catch (error) {
      console.log("ERRor", error.message);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex gap-5">
          {/* first name */}
          <div className="flex flex-col">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="firstName"
              className="border w-[150px] p-1 "
              required
            />
          </div>
          {/* last name */}
          <div className="flex flex-col">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="border w-[150px] p-1 "
              required
              name="lastName"
            />
          </div>
        </div>
        {/* username */}
        <div className="flex  mt-5 flex-col">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="border w-[320px] p-1 "
            required
            name="userName"
          />
        </div>
        {/* email */}
        <div className="flex mt-5 flex-col">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="border w-[320px] p-1"
            required
            name="email"
          />
        </div>
        {/* password */}
        <div className="flex mt-5 flex-col">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="border w-[320px] p-1"
            required
            name="password"
          />
        </div>
        <div className="flex mt-5">
          <input type="checkbox" className="checkbox" />
          <p className="ml-5 text-sm">
            Accept the <span className="text-[#007456] font-bold">Terms</span>{" "}
            and <span className="text-[#007456] font-bold">Privacy Policy</span>
          </p>
        </div>
        <div className=" mt-6 items-center flex justify-center">
          <button type="submit" className="btn btn-primary w-1/2">Signup</button>
        </div>
        <div className="mt-3">
          <p className="text-sm">
            Already have an account? please{" "}
            <Link href={"/login"} className="text-[#007456] font-bold">
              Login
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
