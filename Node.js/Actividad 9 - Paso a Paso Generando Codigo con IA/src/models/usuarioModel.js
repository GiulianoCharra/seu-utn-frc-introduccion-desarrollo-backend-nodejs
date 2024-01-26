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

const UsuarioSchema = new mongoose.Schema(
  {
    nombre: String,
    email: String,
  },
  { collection: "usuarios" }
);

const Usuario = mongoose.model("Usuario", UsuarioSchema);

module.exports = Usuario;
