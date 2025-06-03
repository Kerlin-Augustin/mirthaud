import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  accountType: String,
  createdAt: { type: Date, default: Date.now },
  email: {type: String, required: true},
  username: { type: String, required: true },
  password: {type: String, required: true},
})

export const UserModel = mongoose.model('User', userSchema)