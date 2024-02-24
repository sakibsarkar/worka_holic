import { NextResponse } from "next/server";

export const GET = async (req) => {
    const { id } = req.query
    console.log("Get methods",id);

    return NextResponse.jons("asdf")
}