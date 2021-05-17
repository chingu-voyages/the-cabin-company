import mongoose from 'mongoose';

const cabinSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    streetAddress: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zipCode: {
        type: Number,
        required: true
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
    }
});

const Cabin = mongoose.model('Cabin', cabinSchema);

export default Cabin;