import mongoose from "mongoose";

export const genero = new mongoose.Schema({
  value: { type: String, enum: ["Masculino", "Feminino", "Outro"] },
});
