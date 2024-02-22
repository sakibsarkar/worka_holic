import ConnectDB from "@/config/db/ConnectDB";
import User from "@/models/UserModel";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

// GET single User by session id
export const GET = async () => {
    try {
        ConnectDB();

        const session = await getServerSession(authOptions);

        const user = await User.findById({ _id: session?.user?.id }).select("-password")
        return NextResponse.json({ message: "user", success: true, user }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
} 


export const PATCH = async (req) => {

    try {
        ConnectDB();
        const session = await getServerSession(authOptions);
        const body = await req.json();

        await User.findByIdAndUpdate({_id:session?.user?.id}, body, {
            new: true,
            runValidators:true
        })

        return NextResponse.json({message:"Updated",success:true},{status:200})

    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}