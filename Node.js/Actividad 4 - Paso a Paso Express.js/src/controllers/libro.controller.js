const libros = require("../../data");
const libroSchema = require("../schemas/libro.schema");


// Obtener todos los libros
function getAllBook(req, res, next) {
  try {
    res.json(libros);
  } catch (err) {
    next(err);
  }
}

// Obtener un libro por ID
function getBookById(req, res, next) {
  try {
    const id = parseInt(req.params.id);
    const libro = libros.find((l) => l.id === id);
    if (!libro) {
      const error = new Error("Libro no encontrado");
      error.status = 404;
      throw error;
    }
    res.json(libro);
  } catch (err) {
    next(err);
  }
}

// Crear un nuevo libro
function createBook(req, res, next) {
  try {
    const { error, value } = libroSchema.validate(req.body);
    if (error) {
      const validationError = new Error("Error de validación");
      validationError.status = 400;
      validationError.details = error.details.map((detail) => detail.message);
      throw validationError;
    }
    const { titulo, autor } = value;
    const nuevoLibro = {
      id: libros.length + 1,
      titulo,
      autor,
    };
    libros.push(nuevoLibro);
    res.status(201).json(nuevoLibro);
  } catch (err) {
    next(err);
  }
}

// Actualizar un libro existente
function updateBook(req, res, next) {
  try {
    const id = parseInt(req.params.id);
    const { error, value } = libroSchema.validate(req.body);
    if (error) {
      const validationError = new Error("Error de validación");
      validationError.status = 400;
      validationError.details = error.details.map((detail) => detail.message);
      throw validationError;
    }
    const { titulo, autor } = value;
    const libro = libros.find((l) => l.id === id);
    if (!libro) {
      const error = new Error("Libro no encontrado");
      error.status = 404;
      throw error;
    }
    libro.titulo = titulo || libro.titulo;
    libro.autor = autor || libro.autor;
    res.json(libro);
  } catch (err) {
    next(err);
  }
}

// Eliminar un libro
function deleteBook(req, res, next) {
  try {
    const id = parseInt(req.params.id);
    const index = libros.findIndex((l) => l.id === id);
    if (index === -1) {
      const error = new Error("Libro no encontrado");
      error.status = 404;
      throw error;
    }
    const libroEliminado = libros.splice(index, 1);
    res.json(libroEliminado[0]);
  } catch (err) {
    next(err);
  }
}
module.exports = {
  getAllBook,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
