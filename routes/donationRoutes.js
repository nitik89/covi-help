var express = require("express");
var router = express.Router();
const { check, validationResult } = require('express-validator');

const { getUserById } = require('../controllers/user');

const { createDonation } = require('../controllers/donations');
const { isAuthenticated, isSignedIn } = require("../controllers/auth");
router.param("userId", getUserById);
router.post('/donation/create/:userId', isSignedIn, isAuthenticated, createDonation);



module.exports = router;