import ConnectDB from "@/config/db/ConnectDB";
import Gig from "@/models/GigsModel";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    ConnectDB()

    // query params
    const id = req.nextUrl.searchParams.get("gig_id")
    const search = req.nextUrl.searchParams.get("search")

    // find query
    const query = {}

    if (id) {
        query._id = id
    }

    if (search) {
        query.title = new RegExp(search, "i")
    }


    const result = await Gig.findOne(query).populate("userId")
    return NextResponse.json(result)

}