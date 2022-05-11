import mongoose from "mongoose";
import { genero } from "../utils/index.js";

const infoSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    nome: { type: String, required: true, unique: true },
    cpf: { type: String, required: true, unique: true },
    cep: { type: String, required: true },
    rg: { type: String, required: true },
    genero: { type: String, required: true },
    nascimento: { type: Date, required: true },
    tel_contato: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

export const Infos = mongoose.model("Infos", infoSchema);
