const { Router } = require('express');
const authController = require('../controllers/authController');

const router = Router();

// Signup
router.post('/signup', authController.signup_post);

// Login & Logout
router.post('/login', authController.login_post);

module.exports = router;