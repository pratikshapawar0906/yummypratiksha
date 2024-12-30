const joi=require('joi')
// Middleware/validation.js
const userBookTable = require('../Models/userBookTable');

const contactValidation = (req, res, next) => {
    const schema = joi.object({
        name: joi.string().min(3).max(100).required(),
        email: joi.string().email().required(),
        subject: joi.string().min(3).max(100).required(),
        message: joi.string().min(10).max(10000).required(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400)
            .json({message :"Bad request",error})
    }

    next();
};


// Validation for booking a table
const bookTableValidation = async (req, res, next) => {
    const schema = joi.object({
        name: joi.string().min(3).max(100).required(),
        email: joi.string().email().required(),
        phone: joi.string().min(10).max(15).required(),
        time: joi.string().required(),
        date: joi.string().required(),
        members: joi.number().min(1).max(20).required(),
        message: joi.string().max(10000).optional(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({
            message: "Validation error",
            error: error.details[0].message,
        });
    }

    const { time, date } = req.body;

    try {
        // Check if a booking already exists for the same date and time
        const existingBooking = await userBookTable.findOne({ time, date });

        if (existingBooking) {
            return res.status(409).json({
                message: "A table is already booked at the selected time and date.",
                success: false,
            });
        }

        next();
    } catch (dbError) {
        console.error("Database error during validation:", dbError.message);
        return res.status(500).json({
            message: "An error occurred during validation",
            success: false,
            error: dbError.message,
        });
    }
};



module.exports= { 
    
    contactValidation,
    bookTableValidation
}
