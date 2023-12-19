const mongoose = require("mongoose");

runDB().catch((err) => console.log("el error:",err.reason.servers));

async function runDB() {
  await mongoose.connect("mongodb://127.0.0.1:27017/biblioteca");
  console.log("Conectado a la base de datos");
}

const LibroSchema = new mongoose.Schema(
  {
    titulo: String,
    autor: String,
  },
  { collection: "libros" }
);
const Libro = mongoose.model("Libro", LibroSchema);

module.exports = Libro;
