import ConnectDB from "@/config/db/ConnectDB";
import Gig from "@/models/GigsModel";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        ConnectDB()
        const body = await req.json()
        await Gig.create(body)
        return NextResponse.json({ inserted: true, error: false })
    }

    catch (err) {
        return NextResponse({ inserted: false, error: true })
    }
}