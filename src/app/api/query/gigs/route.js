import ConnectDB from "@/config/db/ConnectDB";
import Gig from "@/models/GigsModel";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    ConnectDB()

    // query params
    const id = req.nextUrl.searchParams.get("gig_id") || ''
    const search = req.nextUrl.searchParams.get("search") || ''
    const category = req.nextUrl.searchParams.get("category") || ''
    const rating = req.nextUrl.searchParams.get("rating") || ''
    const priceRange = req.nextUrl.searchParams.get("priceRange") || ''


    const rangeArr = priceRange.split("@")

    // find query
    const query = {}

    if (id) {
        query._id = id
    }

    if (search) {
        query.title = new RegExp(search, "i")
    }
    if (category) {
        query.category = category
    }
    if (rating) {
        query.rating = parseInt(rating)
    }
    if (priceRange) {

        if (rangeArr[1] == "e") {
            query.price = {
                $gte: parseInt(rangeArr[0]),
            }
        }

        else {
            query.price = {
                $gte: parseInt(rangeArr[0]),
                $lte: parseInt(rangeArr[1])
            }
        }
    }


    const result = await Gig.find(query).populate("userId")
    return NextResponse.json(result)

}