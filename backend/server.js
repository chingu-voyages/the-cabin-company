import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import cabinRoutes from './routes/cabinRoutes.js';

dotenv.config();

//Initialize express application
const app = express();
app.use(cors());
app.use(express.json());

//Connect MongoDb database
const connectToDb = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        });
        console.log('Database connected');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

connectToDb();

//Routing
app.use('/api/cabins', cabinRoutes);

//Error handing for unhandled routes
app.use((req, res, next) => {
    const error = new Error('Route not found');
    res.status(404);
    next(error);
});

//Error handling for general errors
app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message
    });
});

//Start server
app.listen(5000, () => console.log(`Listening on port ${process.env.PORT}...`));
