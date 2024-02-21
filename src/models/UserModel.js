
import {model, Schema, models} from "mongoose"

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    accountTitle: {
        type: String,
    },
    userName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
    },
   
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    phone: {
        type: String,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    avater: {
        type: String,
    },
    role: {
        type: String,
        default: 'User', // User or Client
    },
    skills: {
        type: Array,
    },
    country: {
        type: String,
        default: 'Bangladesh', 
    },
    responseTime: {
        type: Number,
        default: 1, // hours
    },
    languages:{
        types: Array
    },
    lastDeliveryTime:{
        type: Number,
        default: 1, // hours
    },
    aboutAccount:{
        type: String,
    },
    activeStatus: {
        type: String,
        default: 'offline', // Offline , Online
    },
    accountStatus:{
        type: String,
        default: 'Active', // Active , InActive
    },
},{timestamps:true})

const User = models.User || model("User", userSchema);

export default User;