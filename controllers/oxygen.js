const User = require("../models/userSchema")

const Oxygen = require('../models/oxygenSchema');
const multer = require('multer');
const moment = require('moment');
let DIR = "./public/";
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, DIR)
    },
    filename: function(req, file, cb) {

        cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1])
    }
})

let upload = multer({ storage: storage }).single('photo');





exports.createOxygen = (req, res) => {

    upload(req, res, err => {

        if (err) {
            return res.status(422).json({ error: "An error has occured" })
        } else {

            const { ngoname, location, pincode, quantityofCyclinder, contact_no } = req.body;
           

            if (!ngoname || !location || !pincode || !quantityofCyclinder || !contact_no) {
                return res.status(422).json({ error: "Please fill all the fields" });
            }
            Oxygen.findOne({ ngoname: ngoname }).then((d) => {
                if (d) {
                    return res.status(422).json({ error: "This name already exists" });
                }




                const oxygen = new Oxygen({ ngoname, location, pincode, quantityofCyclinder, contact_no, user: id })


                oxygen.save().then(result => {
                    if (result) {

                        return res.json({ message: "Data Saved" });


                    }

                }).catch(err => {
                    console.log(err);
                })
            })

        }
    })

}
exports.changeStatus = (req, res) => {
    const id = req.params.EventId;


    Oxygen.findOne({ _id: id }).then((data) => {

        if (!data) {
            return res.status(400).json({ error: "Not able to find event" });
        }

        const { active } = data;

        const changed = !active;

        Oxygen.updateOne({ _id: id }, { $set: { active: changed } }, { new: true }).exec((err, data) => {

            if (err) {
                return res.status(400).json({ error: "Could not update the status" })
            }
            if (data) {
                return res.json({ message: "Changed" });
            }
        })
    })
}
exports.getOxygen = (req, res) => {

    Oxygen.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({ error: "Not able to find event" });
        }

        return res.json(data);
    })
}

exports.getOxygenById = (req, res) => {
    const oxygen_id = req.params.id;

    Oxygen.findOne({ _id: oxygen_id }).exec((err, data) => {
        if (err) {
            return res.status(400).json({ error: "Not able to find the details" })
        }


        return res.json(data);

    })
}


exports.deleteOxygen = (req, res) => {
    Oxygen.findOne({ _id: req.params.id }).exec((err, event) => {
        if (err || !event) {
            return res.status(422).json({ error: "No data exists!!" })
        }
        if (event) {

            event.remove().then(result => {

                    return res.json({ message: "Deleted Successfully!" });
                })
                .catch(err => {
                    return res.json({ error: err })
                })




        }
    })
}
exports.bookOxygen = (req, res) => {

    Oxygen.findOneAndUpdate({ _id: req.params.id }, { $push: { enrolledUsers: req.profile._id } }).exec((err, oxygen) => {

        if (err || !oxygen) {
            return res.status(422).json({ error: "No data exists!!" });
        }
        if (oxygen) {
            User.findOneAndUpdate({ _id: req.profile._id }, { $set: { oxygen: req.params.id } }, { new: true }).exec((err, user) => {
                return res.json({ message: "Oxygen cylinder has been booked", user })
            })





        }
    })
}
exports.getMyOxygen = (req, res) => {

    Oxygen.find({ user: req.params.userId }).populate('enrolledUsers').exec((err, oxygen) => {
        if (err || !oxygen) {
            return res.json({ error: "Not Found" });
        }

        return res.json(oxygen);
    })
}
