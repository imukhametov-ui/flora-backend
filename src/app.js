const express = require('express');
const bouquetsRouter = require('./routes/bouquetsRouter');
const errorHandler = require('./middlewares/errorHandler');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');
const sequelize = require('./db/sequelize');

const app = express();

app.use(express.json());
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/bouquets', bouquetsRouter);
app.use(errorHandler);

async function initDb() {
  await sequelize.sync();
}

module.exports = { app, initDb };
