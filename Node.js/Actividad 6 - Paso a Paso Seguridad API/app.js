const express = require("express");
const { auth } = require("express-oauth2-jwt-bearer");
const librosRouter = require("./src/routes/libro.route.js");
const errorHandler = require("./src/middlewares/errorHandler.js");

// Configuracion Middleware con el Servidor de Autorización
const autenticacion = auth({
  audience: "http://localhost:3000/api/productos",
  issuerBaseURL: "https://dev-utn-frc-iaew.auth0.com/",
  tokenSigningAlg: "RS256",
});

const app = express();
app.use(express.json());
app.use("/libros", autenticacion, librosRouter);
app.use(errorHandler);
app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});
