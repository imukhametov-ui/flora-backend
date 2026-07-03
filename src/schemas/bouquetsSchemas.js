const Joi = require('joi');

const createSchema = Joi.object({
  photoURL: Joi.string().uri().allow('', null),
  title: Joi.string().min(1).required(),
  description: Joi.string().allow('', null),
  price: Joi.number().precision(2).required(),
  favorite: Joi.boolean().default(false)
});

const updateSchema = Joi.object({
  photoURL: Joi.string().uri().allow('', null),
  title: Joi.string().min(1),
  description: Joi.string().allow('', null),
  price: Joi.number().precision(2),
  favorite: Joi.boolean()
});

module.exports = { createSchema, updateSchema };
