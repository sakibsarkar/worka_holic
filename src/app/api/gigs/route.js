import ConnectDB from "@/config/db/ConnectDB";
import Gig from "@/models/GigsModel";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export const GET = async (req) => {
    const session = await getServerSession(authOptions)
    const userId = session.user.id
    const status = req.nextUrl.searchParams.get("status")

    let query = {
        userId: userId
    }

    if (status) {
        query.status = status
    }

    const result = await Gig.find(query).populate("userId")
    return NextResponse.json(result)

}


// gig post api
export const POST = async (req) => {
    try {
        ConnectDB()
        const body = await req.json()
        await Gig.create(body)
        return NextResponse.json({ inserted: true, error: false })
    } catch (err) {
        return NextResponse({ inserted: false, error: true })
    }
}


// gig delete api
export const DELETE = async (req) => {
    try {
        ConnectDB()
        const session = await getServerSession(authOptions)
        const gig_id = req.nextUrl.searchParams.get("gig_id")
        const userId = session.user.id;

        let query = {
            _id: gig_id,
            userId: userId,
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

        const { image, title, description, price, skills, deliveryTime, category } = await req.json()
        const gig_id = req.nextUrl.searchParams.get("gig_id")
        console.log(gig_id);
        const update = {
            image,
            title,
            description,
            price,
            skills,
            deliveryTime,
            category
        }

        const find = { _id: gig_id }

        await Gig.updateOne(find, update)
        return NextResponse.json({ message: "done" })

    }

    catch (err) {
        console.log(err);
    }
}