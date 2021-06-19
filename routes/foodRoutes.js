var express = require("express");
var router = express.Router();
const { check, validationResult } = require('express-validator');

const imageMid = require('../controllers/imageMiddleware');
const validImg = require('../controllers/validation');
const {

    createFood,
    getFood,
    getFoodById,
    deleteFood,
    changeStatus,

} = require('../controllers/food');

const { isSignedIn, isAdmin, isAuthenticated, } = require("../controllers/auth");
const { getUserById, getUser } = require("../controllers/user");

//params
router.param("userId", getUserById);
//routes
router.get('/getuser/:userId', isSignedIn, isAuthenticated, getUser);

router.get('/getFood/:userId', isSignedIn, isAuthenticated, getFood); //done
router.get('/getFoodById/:id/:userId', isSignedIn, isAuthenticated, getFoodById); //done
router.delete('/deleteFood/:id/:userId', isSignedIn, isAuthenticated, deleteFood); //done
router.put('/changeFood/:EventId/:userId', isSignedIn, isAuthenticated, changeStatus); //done
router.post('/addFood/:userId', isSignedIn, isAuthenticated, createFood); //done


module.exports = router;