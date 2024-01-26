const Usuario = require("../models/usuarioModel.js");

exports.getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
};

exports.getUsuarioById = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el Usuario" });
  }
};

exports.createUsuario = async (req, res) => {
  try {
    const nuevoUsuario = await Usuario.create(req.body);
    await nuevoUsuario.save();
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el Usuario" });
  }
};

exports.updateUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el Usuario" });
  }
};

exports.deleteUsuario = async (req, res) => {
  try {
    const libroId = req.params.id;

    const libroEliminado = await Usuario.findByIdAndRemove(libroId);

    res.status(200).json(libroEliminado);
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el Usuario" });
  }
};
