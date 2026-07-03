import Joi from "joi";

export const bouquetCreateSchema = Joi.object({
  photoURL: Joi.string().uri().allow("").optional(),
  title: Joi.string().min(2).required(),
  description: Joi.string().allow("").optional(),
  price: Joi.number().positive().required(),
  favorite: Joi.boolean().optional(),
});

export const bouquetUpdateSchema = Joi.object({
  photoURL: Joi.string().uri().allow("").optional(),
  title: Joi.string().min(2).optional(),
  description: Joi.string().allow("").optional(),
  price: Joi.number().positive().optional(),
  favorite: Joi.boolean().optional(),
}).min(1);

export const bouquetFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});
