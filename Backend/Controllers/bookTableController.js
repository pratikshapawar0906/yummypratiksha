// Controllers/bookTableController.js
const userBookTable = require('../Models/userBookTable');

const bookTable = async (req, res) => {
    try {
        const { name, email, phone, time, date, members, message } = req.body;

        const newBooking = new userBookTable({ name, email, phone, time, date, members, message });

        const savedBooking = await newBooking.save();

        console.log("Booking saved:", savedBooking);

        res.status(201).json({
            message: "Table booked successfully",
            success: true,
        });
    } catch (error) {
        console.error("Error during table booking:", error.message);
        res.status(500).json({
            message: "An error occurred during table booking",
            success: false,
            error: error.message,
        });
    }
};

module.exports = { bookTable };
