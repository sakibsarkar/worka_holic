import ConnectDB from "@/config/db/ConnectDB";
import Order from "@/models/OrderModel";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export const GET = async (req) => {
    try {
        ConnectDB();
        const session = await getServerSession(authOptions);
        const gigOwnerId = session?.user?.id;
        const status = req.nextUrl.searchParams.get("status");

        let query = {
            ownerId: gigOwnerId
        }
        console.log(query);
        if (status == 'Pending') {
            query.deliveryStatus = "Pending"
        }
        if (status == 'Cancel') {
            query.deliveryStatus = "Cancel"
        }
        if (status == 'Delivery') {
            query.deliveryStatus = "Delivery"
        }
        if (status == 'Accept') {
            query.deliveryStatus = "Accept"
        }

        const orders = await Order.find(query).populate('gigId').populate("ownerId").populate("clientId");
        return NextResponse.json({ message: "Get orders", success: true, orders }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: error.message, success: false }, { status: 500 })
    }
}

export const POST = async (req) => {
    try {
        ConnectDB();
        const body = await req.json();
        // console.log("order model",body);
        await Order.create(body);
        return NextResponse.json({ message: "Order created", success: true }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: error.message, success: false }, { status: 500 })
    }


}


export const PATCH = async (req) => {
    try {
        ConnectDB();
        const id = req.nextUrl.searchParams.get('id');
        const body = await req.json();
        await Order.findByIdAndUpdate({ _id: id }, { ...body }, { new: true, runValidators: true })
        return NextResponse.json({ message: "Order Updated", success: true }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: error.message, success: false }, { status: 500 })
    }
}

