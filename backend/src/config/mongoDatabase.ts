import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

const Mongo_URI = process.env.MONGO_URI!

// Setup Mongoose
export async function connectToDB() {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(Mongo_URI);
    console.log("Connected to MongoDB via Mongoose");
    console.log("Connected to database:", mongoose.connection.db?.databaseName);
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1)
  }
}