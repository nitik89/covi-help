var mongoose = require('mongoose');
const crypto = require("crypto");

const { ObjectId } = mongoose.Schema.Types

var foodSchema = new mongoose.Schema({

    ngoname: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    location: {
        type: String,
        maxlength: 100,
        trim: true
    },
    pincode: {
        type: String,
        maxlength: 6,
        required: true,
        trim: true
    },


  

    contact_no: {
        type: Number,
        required: true

    },
    active: {
        type: Boolean,
        default: false
    },





}, { timestamps: true })




module.exports = mongoose.model("foodSchema", foodSchema);
