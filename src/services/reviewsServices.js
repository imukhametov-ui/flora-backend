import { Review } from "../db/models/Review.js";

export const getAllReviews = async () => {
  return await Review.findAll({
    order: [["createdAt", "DESC"]],
  });
};

export const createReview = async (data) => {
  return await Review.create(data);
};