var mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;



const DonationsSchema = new mongoose.Schema({

    order_id: String,
    payment_id: String,
    amount: { type: Number, default: 0 },


    user: {
        type: ObjectId,
        ref: "User"
    }

}, { timestamps: true });

module.exports = mongoose.model("Donation", DonationsSchema);