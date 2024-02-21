import { NextResponse } from "next/server";
import ConnectDB from "@/config/db/ConnectDB";
import User from "@/models/UserModel";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken"

export const GET = async () => {
    try {
        ConnectDB();

        const token = cookies().get('token')?.value;

        if (!token) {
            return NextResponse.json({ message: "Unauthorized", success: false }, { status: 401 });
        }
        console.log("Token token token token:",process.env.JWT_SECRET);
        jwt.verify(token, process.env.JWT_SECRET,  (err, decoded) => {
            if (err) {
                console.log("Mohin Rana");
                return NextResponse.json({ message: err.message, success: false }, { status: 401 });
            }
            try {
                // const user = await User.findById({_id:decoded?.id}).select("-password");
                // console.log("User",user);
                return NextResponse.json({ message: "User", success: true }, { status: 200 });
            } catch (error) {
                console.error(error);
                return NextResponse.json({ message: "Error finding user", success: false }, { status: 404 });
            }
        });
    } catch (error) {
        return NextResponse.json({message : error.message},{status:500})
    }
} 