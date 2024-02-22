import ConnectDB from "@/config/db/ConnectDB";
import Gig from "@/models/GigsModel";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export const GET = async (req) => {
    const session = await getServerSession(authOptions)
    const userId = session.user.id
    const result = await Gig.find({ userId: userId }).populate("userId")
    return NextResponse.json(result)

}


// gig post api
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


// gig delete api
export const DELETE = async (req) => {
    try {
        ConnectDB()
        const session = await getServerSession(authOptions)
        const gig_id = req.nextUrl.searchParams.get("id")
        const userId = session.user.id;

        let query = {
            userId,
            _id: gig_id
        }

        await Gig.deleteOne(query)

        return NextResponse.json({ deleted: true })
    }
    catch (err) {
        console.log(err);
        return NextResponse.json({ deleted: false, message: "error occ" })
    }
}


// gig update
export const PUT = async (req) => {
    try {
        ConnectDB()

        const { image, rating, status, title, description, price, skills, deliveryTime } = await req.json()
        const gig_id = req.nextUrl.searchParams.get("id")

        const update = {
            image,
            rating,
            status,
            title,
            description,
            price,
            skills,
            deliveryTime,
        }

        const find = { _id: gig_id }

        await Gig.updateOne(find, update)
        return NextResponse.json({ message: "done" })

    }

    catch (err) {
        console.log(err);
    }
}