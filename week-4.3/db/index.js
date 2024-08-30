import mongoose from "mongoose";



const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect("mongodb+srv://civilstudent9900:J1Irwf8y2HKb5jGU@cluster0.eko36.mongodb.net/")
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB