import 'dotenv/config';
import app from './app.js';
import { connectDB } from './config/db.js';

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} in ${NODE_ENV} mode`);
  });
});