const express = require("express");
const router = express.Router();

const {
  getAllUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  deleteUsuario,
} = require("../controllers/usuarioController");

// Importamos la libreria para validar scopes
const { requiredScopes } = require("express-oauth2-jwt-bearer");

// Ruta para obtener todos los usuarios
router.get("/", requiredScopes("read:libros"), getAllUsuarios);

// Ruta para obtener un Usuario por id
router.get("/:id", requiredScopes("read:libros"), getUsuarioById);

// Ruta para crear un nuevo Usuario
router.post("/", requiredScopes("write:libros"), createUsuario);

// Ruta para actualizar un Usuario existente
router.put("/:id", requiredScopes("write:libros"), updateUsuario);

// Ruta para eliminar un Usuario
router.delete("/:id", requiredScopes("write:libros"), deleteUsuario);

module.exports = router;
