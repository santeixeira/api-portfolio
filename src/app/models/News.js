import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String, required: true, unique: true},
  subject: { type: String, required: true, unique: true },
  text: { type: String, required: true },
  img: { type: String, required: false },
  createdAt: { type: Date, required: true, default: Date() },
  updatedAt: { type: Date, required: true, default: Date() },
}, {
  versionKey: false
});

export const News = mongoose.model('News', newsSchema)
