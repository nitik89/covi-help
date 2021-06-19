var express = require("express");
var router = express.Router();
const { check, validationResult } = require('express-validator');

const imageMid = require('../controllers/imageMiddleware');
const validImg = require('../controllers/validation');
const {

    createMedicine,
    getMedicine,
    getMedicineById,
    deleteMedicines,
    changeStatus,
    bookMed,
    getMyMed,

} = require('../controllers/medicine');

const { isSignedIn, isAdmin, isAuthenticated, } = require("../controllers/auth");
const { getUserById, getUser } = require("../controllers/user");

//params
router.param("userId", getUserById);
//routes
router.get('/getuser/:userId', isSignedIn, isAuthenticated, getUser);

router.get('/getMedicine/:userId', isSignedIn, isAuthenticated, getMedicine); //done
router.get('/getMedicineById/:id/:userId', isSignedIn, isAuthenticated, getMedicineById); //done
router.put('/changeMedicine/:EventId/:userId', isSignedIn, isAuthenticated, changeStatus); //done
router.delete('/deleteMedicine/:id/:userId', isSignedIn, isAuthenticated, deleteMedicines); //done
router.post('/addMedicine/:userId', isSignedIn, isAuthenticated, createMedicine); //done

router.put('/orderMedicine/:id/:userId', isSignedIn, isAuthenticated, bookMed); //done
router.get('/getMyMedicine/:userId', isSignedIn, isAuthenticated, getMyMed);
module.exports = router;