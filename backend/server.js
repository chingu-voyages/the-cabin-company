const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

//Initialize express application
const app = express();
app.use(express.json());

//Start server
app.listen(5000, () => console.log(`Listening on port ${process.env.PORT}...`));
