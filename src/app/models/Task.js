import mongoose from "mongoose";

const pomEnum = [
  "Sprint Livre",
  "Sprint 25/05",
  "Sprint 40/15",
  "Sprint 50/10",
];

const taskSchema = new mongoose.Schema(
  {
    id: { type: String },
    timeSeconds: { type: Number, required: true },
    description: { type: String, required: true },
    typePomodoro: { type: String, enum: pomEnum },
    project: { type: Object, required: true},
    createdAt: { type: Date, required: true, default: Date() },
  },
  {
    versionKey: false,
  }
);

export const Task = mongoose.model("Task", taskSchema);
