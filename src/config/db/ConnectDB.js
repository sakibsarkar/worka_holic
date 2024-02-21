
import mongoose from "mongoose"
const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connect MongooDB");
    } catch (error) {
        console.log("DB ERROR:", error.message);
    }
}

export default ConnectDB;