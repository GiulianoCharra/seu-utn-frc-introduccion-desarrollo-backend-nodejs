const mongoose = require("mongoose");

// Verificamos si la base de datos ya está conectada
const isConnected = mongoose.connection.readyState;

if (!isConnected) {
  runDB().catch((err) => console.log("El error es:", err.reason));
} else {
  console.log("La base de datos ya está conectada");
}

async function runDB() {
  await mongoose.connect(process.env.MONGO_URL);
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
