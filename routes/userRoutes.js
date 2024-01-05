const {registerUser, loginUser, logoutUser} = require('../controllers/userController');
const express = require('express');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

module.exports = router;