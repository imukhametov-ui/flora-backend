import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

import bouquetsRouter from "./routes/bouquetsRouter.js";
import reviewsRouter from "./routes/reviewsRouter.js";
import errorHandler from "./middlewares/errorHandler.js";
import swaggerDocument from "./swagger/swagger.json" with { type: "json" };

const app = express();
app.get("/", (req, res) => {
  res.json({
    message: "Flora backend API is running",
    docs: "/api/docs",
    bouquets: "/api/bouquets"
  });
});

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/bouquets", bouquetsRouter);
app.use("/api/reviews", reviewsRouter);

app.use(errorHandler);

export default app;
