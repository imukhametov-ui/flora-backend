import express from "express";

import {
  getAllBouquets,
  getBouquetById,
  createBouquet,
  updateBouquet,
  deleteBouquet,
  updateFavorite,
} from "../controllers/bouquetsControllers.js";

import validateBody from "../middlewares/validateBody.js";

import {
  bouquetCreateSchema,
  bouquetUpdateSchema,
  bouquetFavoriteSchema,
} from "../schemas/bouquetsSchemas.js";

const bouquetsRouter = express.Router();

bouquetsRouter.get("/", getAllBouquets);
bouquetsRouter.get("/:id", getBouquetById);
bouquetsRouter.post("/", validateBody(bouquetCreateSchema), createBouquet);
bouquetsRouter.put("/:id", validateBody(bouquetUpdateSchema), updateBouquet);
bouquetsRouter.delete("/:id", deleteBouquet);
bouquetsRouter.patch(
  "/:id/favorite",
  validateBody(bouquetFavoriteSchema),
  updateFavorite
);

export default bouquetsRouter;