const express = require("express");
const router = express.Router();
const book_controller = require("../controllers/libro.controller");
const { requiredScopes } = require("express-oauth2-jwt-bearer");

// Obtener todos los libros
router.get("/", requiredScopes("read:productos"), book_controller.getAllBook);

// Obtener un libro por ID
router.get("/:id", requiredScopes("read:productos"), book_controller.getBookById);

// Crear un nuevo libro
router.post("/", requiredScopes("write:libros"), book_controller.createBook);

// Actualizar un libro existente
router.put("/:id", requiredScopes("write:libros"), book_controller.updateBook);

// Eliminar un libro existente
router.delete("/:id", requiredScopes("write:libros"), book_controller.deleteBook);

module.exports = router;
