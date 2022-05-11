import { mongoose } from "mongoose";

export default function connectionDb() {
  mongoose.connect("mongodb+srv://sil:6zex9sPMGO2Wx576@sil.qcj3d.mongodb.net/sil-plants?");
  const conn = mongoose.connection;
  conn.on("error", console.log.bind(console, 'Houve um erro na conexao.'))
  conn.once("open", () => {
    console.log('Sucesso na conexao.')
  })

}