<<<<<<< HEAD
import { Types } from "mongoose";
import { Schema, model, models } from "mongoose";
=======
import { Schema, Types, model, models } from "mongoose";
>>>>>>> 148ccbbb7121d502ebb3034b30bec2fe0debb42b

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