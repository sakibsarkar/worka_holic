import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import ConnectDB from "@/config/db/ConnectDB";
import User from "@/models/UserModel";

export const POST = async (req) => {
    try {
        ConnectDB();
        const body = await req.json();
        const password = body.password;
        const passGenarate = await bcrypt.hash(password, 10)
        await User.create({...body, password: passGenarate})
        return NextResponse.json({message : "Register",success:true},{status:201});

    } catch (error) {
        return NextResponse.json({message : error.message},{status:500})
    }
} 