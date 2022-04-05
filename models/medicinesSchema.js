var mongoose = require('mongoose');
const crypto = require("crypto");

const { ObjectId } = mongoose.Schema.Types

var medicinesSchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref: "User"
    },
    ngoname: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    medicinename: {
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
    verified: false




}, { timestamps: true })




module.exports = mongoose.model("medicinesSchema", medicinesSchema);
