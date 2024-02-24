import ConnectDB from "@/config/db/ConnectDB";
import Order from "@/models/OrderModel";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        ConnectDB();

        const orders = await Order.find({}).populate('gigId').populate("ownerId").populate("clientId");
        return NextResponse.json({message:"Get orders",success:true,orders},{status:200})
    } catch (error) {
        return NextResponse.json({message:error.message,success:false},{status:500})
    }
}

export const POST = async (req) => {
    try {
        ConnectDB();
        const body = await req.json();
        // console.log("order model",body);
        await Order.create(body);
        return NextResponse.json({message:"Order created",success:true},{status:201})
    } catch (error) {
        return NextResponse.json({message:error.message,success:false},{status:500})
    }
    
}


export const PATCH = async (req) => {
    try {
         ConnectDB();
        const id = req.nextUrl.searchParams.get('id');
        const body = await req.json();
        console.log(id, body);
        await Order.findByIdAndUpdate({_id:id},{...body},{new:true, runValidators:true})
        return NextResponse.json({message:"Order Updated",success:true},{status:201})
    } catch (error) {
        return NextResponse.json({message:error.message,success:false},{status:500})
    }
}

