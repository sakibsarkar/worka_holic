import ConnectDB from "@/config/db/ConnectDB";
import Order from "@/models/OrderModel";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        ConnectDB();
        const body = await req.json();
        // console.log("order model",body);
        await Order.create(body);
        return NextResponse.json({message:"Order updated",success:true},{status:201})
    } catch (error) {
        return NextResponse.json({message:error.message,success:false},{status:500})
    }
}