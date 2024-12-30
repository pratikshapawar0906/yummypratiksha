// Models/userBookTable.js
const mongoose = require('mongoose');

// Define the schema for booking a table
const userBookTableSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    members: {
        type: Number,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});

const userBookTable = mongoose.model("bookATable", userBookTableSchema);

module.exports = userBookTable;
