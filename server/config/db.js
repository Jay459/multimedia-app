// server/config/db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(`MongoDB Error: ${error.message}`);
        process.exit(1); // Exit process if DB fails
    }
};

export default connectDB;
