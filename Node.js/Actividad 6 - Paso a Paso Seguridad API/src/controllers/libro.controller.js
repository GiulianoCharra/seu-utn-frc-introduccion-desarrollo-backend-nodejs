const Libro = require("../models/libro.model.js");

// Obtener todos los libros
async function getAllBook(req, res, next) {
  try {
    const libros = await Libro.find();
    res.json(libros);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los libros" });
  }
}

// Obtener un libro por ID
async function getBookById(req, res, next) {
  try {
    const libro = await Libro.findById(req.params.id);
    res.json(libro);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar el Libro" });
  }
}

// Crear un nuevo libro
async function createBook(req, res, next) {
  try {
    const nuevoLibro = new Libro(req.body);
    await nuevoLibro.save();
    res.json(nuevoLibro);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el Libro" });
  }
}

// Actualizar un libro existente
async function updateBook(req, res, next) {
  try {
    const libro = await Libro.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(libro);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el Libro" });
  }
}

// Eliminar un libro
async function deleteBook(req, res, next) {
  try {
    await Libro.findByIdAndDelete(req.params.id);
    res.json({ message: "Libro eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el Libro" });
  }
}
module.exports = {
  getAllBook,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
