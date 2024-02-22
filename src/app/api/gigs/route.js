import ConnectDB from "@/config/db/ConnectDB";
import Gig from "@/models/GigsModel";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        ConnectDB()
        const body = await req.json()
        console.log(body);
        await Gig.create(body)
        return NextResponse.json({ result: true })
    }

    catch (err) {
        console.log(err);
    }
}