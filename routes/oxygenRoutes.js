var express = require("express");
var router = express.Router();
const { check, validationResult } = require('express-validator');

const imageMid = require('../controllers/imageMiddleware');
const validImg = require('../controllers/validation');
const {

    getOxygen,
    getOxygenById,
    createOxygen,
    deleteOxygen,
    changeStatus,
    bookOxygen,
    getMyOxygen


} = require('../controllers/oxygen');

const { isSignedIn, isAdmin, isAuthenticated, } = require("../controllers/auth");
const { getUserById, getUser } = require("../controllers/user");

//params
router.param("userId", getUserById);
//routes
router.get('/getuser/:userId', isSignedIn, isAuthenticated, getUser);

router.get('/getOxygen/:userId', isSignedIn, isAuthenticated, getOxygen); //done
router.get('/getOxygenById/:id/:userId', isSignedIn, isAuthenticated, getOxygenById); //done
router.get('/getMyOxygen/:userId', isSignedIn, isAuthenticated, getMyOxygen);

router.post('/addOxygen/:userId', isSignedIn, isAuthenticated, createOxygen); //done
router.put('/changeOxygen/:EventId/:userId', isSignedIn, isAuthenticated, changeStatus); //done
router.put('/orderOxygen/:id/:userId', isSignedIn, isAuthenticated, bookOxygen); //done
router.delete('/deleteOxygen/:id/:userId', isSignedIn, isAuthenticated, deleteOxygen); //done
module.exports = router;