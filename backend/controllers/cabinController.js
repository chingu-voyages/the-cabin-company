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
        pricePerNight: req.body.pricePerNight,
        address: req.body.address,
        beds: req.body.beds,
        baths: req.body.baths,
        image: req.body.image
    });

    const newCabin = await cabin.save();

    res.status(201).json({
        cabin: newCabin
    });

});

//Route: POST api/cabins/:id
//Function: Creates a new booking for a cabin
//Security: Logged in users 

export const bookCabin = asyncHandler(async (req, res) => {
    const { checkIn, checkOut, isPaid } = req.body;
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const numNights = (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24);

    const cabin = await Cabin.findById(req.params.id);
    //Check whether there is a product with that ID and whether user has already reviewed it
    if (cabin) {
        //If the dates of the requested booking fall within the range of an existing booking, send error
        const blockedDates = cabin.bookings.find(booking => checkInDate >= booking.checkIn && checkInDate <= booking.checkOut || checkOutDate >= booking.checkIn && checkOutDate <= booking.checkOut);
        if (blockedDates) {
            res.status(400);
            throw new Error('Someone has already booked this cabin on these dates. Please pick a new date.');
        }

        const booking = {
            checkIn,
            checkOut,
            isPaid,
            numNights,
            totalPrice: cabin.pricePerNight * numNights
        };

        cabin.bookings.push(booking);

        await cabin.save();
        res.status(201).json({ booking: cabin.bookings.find(b => b.checkIn.getTime() === checkInDate.getTime()) });

    } else {
        res.status(404);
        throw new Error('Could not find the cabin you are looking for.');
    }


});

export const payBooking = asyncHandler(async (req, res) => {
    const { paymentResult, booking } = req.body;
    const cabin = await Cabin.findById(req.params.id);
    // Add payment details to order instance
    if (cabin) {
        cabin.bookings.map(b => console.log(b._id));
        console.log(booking._id);
        const paidBooking = cabin.bookings.find(b => +b._id === +booking._id);

        paidBooking.isPaid = true;
        paidBooking.paymentResult = {
            id: paymentResult.id,
            status: paymentResult.status,
        };

        await cabin.save();

        res.json({ booking: paidBooking });

    } else {
        res.status(404);
        throw new Error('Order not found');
    }
});