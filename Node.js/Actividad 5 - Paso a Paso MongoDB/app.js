const express = require("express");
const app = express();
app.use(express.json());
// Importamos el Router de Libros
const librosRouter = require("./src/routes/libro.route.js");
// Importamos el Middleware Error Handler
const errorHandler = require("./src/middlewares/errorHandler.js");
app.use("/libros", librosRouter);
app.use(errorHandler);
app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});
