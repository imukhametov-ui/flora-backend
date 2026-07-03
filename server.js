require('dotenv').config();
const { app, initDb } = require('./src/app');

const PORT = process.env.PORT || 3000;

initDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to initialize DB', err);
  process.exit(1);
});
