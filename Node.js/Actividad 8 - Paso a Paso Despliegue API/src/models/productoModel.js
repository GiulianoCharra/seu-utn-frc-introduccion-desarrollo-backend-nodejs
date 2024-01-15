const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGO_URL);
runDB().catch((err) => console.log("El error es:", err));

async function runDB() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Conectado a la base de datos");
}

const ProductoSchema = new mongoose.Schema(
  {
    nombre: String,
    precio: String,
  },
  { collection: "productos" }
);

const Producto = mongoose.model("Producto", ProductoSchema);

module.exports = Producto;
