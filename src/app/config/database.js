import { mongoose } from "mongoose";
import { config } from "dotenv";

config();

export default function connectionDb() {
  mongoose.connect(`${process.env.DATABASE_CONNECTION}`);
  const conn = mongoose.connection;
  conn.on("error", console.log.bind(console, "Houve um erro na conexao."));
  conn.once("open", () => {
    console.log("Sucesso na conexao.");
  });
}
