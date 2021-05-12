import Cabin from '../models/cabinModel.js';


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

export const createCabin = async (req, res) => {
    try {
        const cabin = new Cabin({
            name: req.body.name,
            price: req.body.price,
            streetAddress: req.body.streetAddress,
            zipCode: req.body.zipCode,
            beds: req.body.beds,
            baths: req.body.baths
        });

        const newCabin = await cabin.save();

        res.status(201).json({
            cabin: newCabin
        });
    } catch (err) {
        console.log(err);
    }
};