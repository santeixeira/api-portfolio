import mongoose from "mongoose";

const pomEnum = [
  "Sprint Livre",
  "Sprint 25/05",
  "Sprint 40/15",
  "Sprint 50/10",
];

const taskSchema = new mongoose.Schema(
  {
    timeSeconds: { type: Number, required: true, unique: false },
    description: { type: String, required: true, unique: false},
    typePomodoro: { type: String, enum: pomEnum, required: true, unique: false},
    project: { type: Object, required: true, unique: false},
    createdAt: { type: Date, required: true, default: Date() },
  },
  {
    versionKey: false,
  }
);

export const Task = mongoose.model("Task", taskSchema);
