const Joi = require("joi");

const libroSchema = Joi.object({
  titulo: Joi.string().required().label("Título"),
  autor: Joi.string().required().label("Autor"),
});

module.exports = libroSchema;