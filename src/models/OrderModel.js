import { Schema, Types, model, models } from "mongoose";

const orderScema = new Schema({
    clientId: {
        type: Types.ObjectId,
        ref: "User"
    },
    ownerId: {
        type: Types.ObjectId,
        ref: "User"
    },
    gigId: {
        type: Types.ObjectId,
        ref: "Gig"
    },
    orderNote: {
        type: String,
    },
    deliveryTime: {
        type : String,
    },
    deliveryStatus: {
        type: String,
        default: "Pending" // Pending, Cancel, Delivery, Accept
    },
},{timestamps:true})

const Order = models.Order || model("Order", orderScema);

export default Order;