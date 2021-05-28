import express from 'express';
import * as cabinController from '../controllers/cabinController.js';

const router = express.Router();


router.route('/')
    .get(cabinController.getAllCabins)
    .post(cabinController.createCabin);

router.route('/:id')
    .get(cabinController.getCabinById);

export default router;