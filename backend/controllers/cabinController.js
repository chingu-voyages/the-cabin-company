import asyncHandler from 'express-async-handler';
import Cabin from '../models/cabinModel.js';

//Route: GET /api/cabins/
//Function: Gets a list of all cabins in DB
//Security: Public 
export const getAllCabins = asyncHandler(async (req, res) => {

    const cabins = await Cabin.find();
    res.status(200).json({
        cabins
    });
});

//Route: GET /api/cabins/:id
//Function: Gets a single cabin by the id that is passed into the request 
//Security: Public 
export const getCabinById = asyncHandler(async (req, res) => {

    const cabin = await Cabin.findById(req.params.id);

    if (cabin) {
        res.json(cabin);
    } else {
        res.status(404);
        throw new Error('Cabin not found with that ID');
    }

});

//Route: POST api/cabins/
//Function: Creates a new cabin and adds it to the DB
//Security: Logged in users 

export const createCabin = asyncHandler(async (req, res) => {

    //TODO: check if user is logged in

    const cabin = new Cabin({
        name: req.body.name,
        price: req.body.price,
        streetAddress: req.body.streetAddress,
        zipCode: req.body.zipCode,
        beds: req.body.beds,
        baths: req.body.baths,
        image: req.body.image
    });

    const newCabin = await cabin.save();

    res.status(201).json({
        cabin: newCabin
    });

});