const express = require("express");
const router = express.Router();
const book_controller = require("../controllers/libro.controller");

// Obtener todos los libros
router.get("/", book_controller.getAllBook);

// Obtener un libro por ID
router.get("/:id", book_controller.getBookById);

// Crear un nuevo libro
router.post("/", book_controller.createBook);

// Actualizar un libro existente
router.put("/:id", book_controller.updateBook);

// Eliminar un libro existente
router.delete("/:id", book_controller.deleteBook);

module.exports = router;
