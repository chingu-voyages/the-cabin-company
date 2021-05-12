import Cabin from '../models/cabinModel.js';

//Route: GET /api/cabins/
//Function: Gets a list of all cabins in DB
//Security: Public 
export const getAllCabins = async (req, res) => {
    try {
        const cabins = await Cabin.find();
        res.status(200).json({
            cabins
        });
    } catch (err) {
        console.log(err);
    }
};

//Route: GET /api/cabins/:id
//Function: Gets a single cabin by the id that is passed into the request 
//Security: Public 
export const getCabinById = async (req, res) => {
    try {
        const cabin = await Cabin.findById(req.params.id);
        res.status(200).json({
            cabin
        });
    } catch (err) {
        console.log(err);
    }
};

//Route: POST api/cabins/
//Function: Creates a new cabin and adds it to the DB
//Security: Logged in users 

export const createCabin = async (req, res) => {
    try {
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
    } catch (err) {
        console.log(err);
    }
};