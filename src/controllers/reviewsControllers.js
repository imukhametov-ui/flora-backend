import {
  getAllReviews,
  createReview,
} from "../services/reviewsServices.js";

export const getReviews = async (req, res, next) => {
  try {
    const reviews = await getAllReviews();

    res.json(reviews);
  } catch (err) {
    next(err);
  }
};

export const addReview = async (req, res, next) => {
  try {
    const review = await createReview(req.body);

    res.status(201).json(review);
  } catch (err) {
    next(err);
  }
};