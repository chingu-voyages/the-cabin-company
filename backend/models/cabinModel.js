import mongoose from 'mongoose';

const bookingSchema = mongoose.Schema({
    checkIn: {
        type: Date,
        required: true
    },
    checkOut: {
        type: Date,
        required: true
    },
    numNights: Number,
    totalPrice: Number,
    isPaid: {
        type: Boolean,
        default: false
    }
});

const cabinSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    pricePerNight: {
        type: Number,
        required: true
    },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zipCode: { type: Number, required: true }
    },
    beds: {
        type: Number,
        default: 1
    },
    baths: {
        type: Number,
        default: 1
    },
    image: {
        type: String,
    },
    bookings: [bookingSchema]
});

const Cabin = mongoose.model('Cabin', cabinSchema);

export default Cabin;