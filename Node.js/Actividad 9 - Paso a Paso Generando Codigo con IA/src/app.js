const express = require("express");

const { auth } = require("express-oauth2-jwt-bearer");
const errorHandler = require("./middlewares/errorHandler");


require('dotenv').config();

// Configuración Middleware con el Servidor de Autorización 
const autenticacion = auth({
  audience: process.env.OAUTH_AUDIENCE,
  issuerBaseURL: process.env.OAUTH_URL,
  tokenSigningAlg: "RS256",
});


const app = express();
app.use(express.json());

// Importamos el Router de Libros
const librosRouter = require("./routes/libros");
const usuarioRouter = require("./routes/usuarios")

//Configuramos el middleware de autenticación
app.use("/api/libros", autenticacion,  librosRouter);
app.use("/api/usuarios", autenticacion, usuarioRouter);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});

module.exports = app;