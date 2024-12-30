const express = require('express');
const { signUpValidation, loginValidation, contactValidation } = require('../Middleware/validation');
const {signUp,login} = require('../Controllers/AuthController');
const {Contact } =require('../Controllers/ContactController')
const router = express.Router();

router.post('/login', loginValidation ,login);

router.post('/signup',signUpValidation,signUp);

router.post('/contact',contactValidation,Contact)

module.exports = router;
