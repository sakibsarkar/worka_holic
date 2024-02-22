import ConnectDB from "@/config/db/ConnectDB";
import User from "@/models/UserModel";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export const GET = async () => {
    try {
        ConnectDB();

        const session = await getServerSession(authOptions);

        const user = await User.findById({ _id: session?.user?.id }).select("-password")
        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
} 