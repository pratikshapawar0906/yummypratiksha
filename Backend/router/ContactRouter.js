const express = require('express');
const {  contactValidation, bookTableValidation } = require('../Middleware/validation');
const {Contact } =require('../Controllers/ContactController');
const { bookTable } = require('../Controllers/bookTableController');
const router = express.Router();

// 

router.post('/contact',contactValidation,Contact)
router.post('/booktable',bookTableValidation,bookTable)

module.exports = router;
