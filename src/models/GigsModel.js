import { Schema, Types, model, models } from "mongoose";

const gigsScema = new Schema({
    userId: {
        type: Types.ObjectId,
        ref: "User"
    },
    image: {
        type: String,
        required: true
    },
    userId: {
        type: Types.ObjectId
    },
    rating: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: "pending"
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,

    },
    skills: {
        type: Array,
        required: true,
    },
    deliveryTime: {
        type: Number,
        required: true
    },


})

const Gig = models.Gig || model("Gig", gigsScema);

export default Gig;