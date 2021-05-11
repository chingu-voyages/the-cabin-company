const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

//Initialize express application
const app = express();
app.use(express.json());

//Start server
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}...`));