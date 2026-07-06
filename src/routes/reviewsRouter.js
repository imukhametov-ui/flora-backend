import express from "express";

import { getReviews, addReview } from "../controllers/reviewsControllers.js";
import validateBody from "../middlewares/validateBody.js";
import { createReviewSchema } from "../schemas/reviewsSchemas.js";

const router = express.Router();

router.get("/", getReviews);

router.post(
  "/",
  validateBody(createReviewSchema),
  addReview
);

export default router;