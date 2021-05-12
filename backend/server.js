const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

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

//Start server
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}...`));