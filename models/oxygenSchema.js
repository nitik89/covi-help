var mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types

var oxygenSchema = new mongoose.Schema({
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
    quantityofCyclinder: {
        type: String,
        required: true
    },


    contact_no: {
        type: Number,
        required: true

    },
    
    active: {
        type: Boolean,
        default: false
    },
    enrolledUsers: [{
        type: ObjectId,
        ref: "User"
    }]



}, { timestamps: true })



module.exports = mongoose.model("Oxygen", oxygenSchema);
