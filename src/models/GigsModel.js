import { Schema, Types, model, models } from "mongoose";

const gigsScema = new Schema({
    image: {
        type: String,
        required: true
    },
    userId: {
        type: Types.ObjectId
    },
    rating: {
        type: Number,
    },
    status: {
        type: String,
        default: "Pending"
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
    skils: {
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