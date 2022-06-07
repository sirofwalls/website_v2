const express = require('express');
const router = express.Router();

// Constrollers to easily manage the logic of the request
const {
    sendEmail
} = require('../controllers/emailController')


// Example Route: domain.com/api/v2/email/
router.post('/', sendEmail)

module.exports = router;