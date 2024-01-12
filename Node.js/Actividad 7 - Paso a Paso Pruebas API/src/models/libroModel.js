const mongoose = require("mongoose");

//mongoose.connect(process.env.MONGO_DB);
runDB().catch((err) => console.log("El error es:", err.reason));

async function runDB() {
  await mongoose.connect(process.env.MONGO_DB);
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
