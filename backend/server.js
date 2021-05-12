import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import cabinRoutes from './routes/cabinRoutes.js';

dotenv.config();

//Initialize express application
const app = express();
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

app.use('/api/cabins', cabinRoutes);

//Start server
app.listen(5000, () => console.log(`Listening on port ${process.env.PORT}...`));
