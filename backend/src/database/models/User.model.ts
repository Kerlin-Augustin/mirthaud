import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  accountType: String,
  age: Number,
  createdAt: { type: Date, default: Date.now },
  email: {type: String, required: true, unique: true, lowercase: true},
  hasAcceptedDisclaimer: Boolean,
  interviews: [String],
  password: {type: String, required: true},
  phoneNumber: Number,
  resume: [String],
  username: { type: String, required: true },
})

export const UserModel = mongoose.model('User', userSchema)