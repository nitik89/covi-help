const Donation = require("../models/donationsSchema");

exports.createDonation = (req, res) => {
    const id = req.params.userId;
    const data = req.body;
    if (data.amount <= 0) {
        return res.status(400).json({ error: "Amount should be equal or greater than one" });
    }
    const donation = new Donation({...data, user: id });
    donation.save((err, order) => {
        if (err) {
            return res.status(400).json({ error: "Transaction Failed" })
        }
        return res.json({ msg: "Saved successfully" })
    })
}