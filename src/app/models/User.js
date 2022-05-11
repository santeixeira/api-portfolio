import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: String },
  username: { type: String, required: true, unique: true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date() },
  updatedAt: { type: Date, required: true, default: Date() },
}, {
  versionKey: false
});

export const Users = mongoose.model('Users', userSchema)
