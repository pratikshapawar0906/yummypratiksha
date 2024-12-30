const userContact = require("../Models/userContactSchema");

const Contact = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        const newUser = new userContact({ name, email,subject, message });
        const savedUser = await newUser.save();

        console.log("User saved:", savedUser);

        res.status(201).json({
            message: "Contact Information added successfully",
            success: true
        });
    } catch (error) {
        console.error("Error during contact creation:", error.message);
        res.status(500).json({
            message: "An error occurred during contact creation",
            success: false,
            error: error.message
        });
    }
};

module.exports = { Contact };
