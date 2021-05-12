import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import cabinRoutes from './routes/cabinRoutes.js';

dotenv.config();

//Initialize express application
const app = express();
app.use(express.json());

//Start server
app.listen(5000, () => console.log(`Listening on port ${process.env.PORT}...`));
