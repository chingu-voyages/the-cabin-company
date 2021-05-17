import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cabins from './data/cabins.js';
import Cabin from './models/cabinModel.js';

dotenv.config();

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

// To import cabin data from the data folder, cd into the backend and run NPM RUN IMPORT
// You may add or change data in the 'data/cabins.js' folder and then update the DB using this seeder 
const importData = async () => {
    try {
        //Clear out existing data
        await Cabin.deleteMany();
        //Seed data from data files
        await Cabin.insertMany(cabins);

        console.log('Imported your data!');
        process.exit();

    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

const deleteData = async () => {
    try {
        //Clear out existing data
        await Cabin.deleteMany();

        console.log('Deleted your data!');
        process.exit();

    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    deleteData();
} else {
    importData();
}