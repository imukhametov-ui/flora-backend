import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize.js";

export const Review = sequelize.define(
  "Review",
  {
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);