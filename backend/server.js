import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

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
app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID));


if (process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, 'frontend/build')));
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')));
}

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
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
