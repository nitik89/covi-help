const User = require("../models/userSchema")

const Medicine = require('../models/medicinesSchema');
const multer = require('multer');

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





exports.createMedicine = (req, res) => {


    upload(req, res, err => {

        if (err) {
            return res.status(422).json({ error: "An error has occured" })
        } else {



            const { ngoname, medicinename, location, pincode, contact_no } = req.body;
          

            if (!ngoname || !location || !pincode || !medicinename || !contact_no) {
                return res.status(422).json({ error: "Please fill all the fields" });
            }
            Medicine.findOne({ ngoname: ngoname }).then((d) => {
                if (d) {
                    return res.status(422).json({ error: "This name already exists" });
                }




                const medicine = new Medicine({ ngoname, location, pincode, medicinename, contact_no })


                medicine.save().then(result => {
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

    Medicine.findOne({ _id: id }).then((data) => {

        if (!data) {
            return res.status(400).json({ error: "Not able to find event" });
        }

        const { active } = data;

        const changed = !active;

        Medicine.updateOne({ _id: id }, { $set: { active: changed } }, { new: true }).exec((err, data) => {

            if (err) {
                return res.status(400).json({ error: "Could not update the status" })
            }
            if (data) {
                return res.json({ message: "Changed" });
            }
        })
    })
}
exports.getMedicine = (req, res) => {

    Medicine.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({ error: "Not able to find event" });
        }

        return res.json(data);
    })
}

exports.getMedicineById = (req, res) => {
    const medicine_id = req.params.id;

    Medicine.findOne({ _id: medicine_id }).lean().exec((err, data) => {
        if (err) {
            return res.status(400).json({ error: "Not able to find the details" })
        }

        return res.json(data);

    })
}


exports.deleteMedicines = (req, res) => {
    Medicine.findOne({ _id: req.params.id }).exec((err, event) => {
        if (err || !event) {
            return res.status(422).json({ error: "No data exists!!" })
        }


        event.remove().then(result => {

                return res.json({ message: "Deleted Successfully!" });
            })
            .catch(err => {
                return res.json({ error: err })
            })
    })
}
exports.bookMed = (req, res) => {

    Medicine.findOneAndUpdate({ _id: req.params.id }, { $push: { enrolledUsers: req.profile._id } }).exec((err, oxygen) => {

        if (err || !oxygen) {
            return res.status(422).json({ error: "No data exists!!" });
        }
        if (oxygen) {
            User.findOneAndUpdate({ _id: req.profile._id }, { $set: { medicine: req.params.id } }, { new: true }).exec((err, user) => {

                if (err) {
                    return res.json({ err: "Cannot save!!" })
                }

                return res.json({ message: "Medicine has been booked", user })
            })




        }
    })
}
exports.getMyMed = (req, res) => {

    Medicine.find({ user: req.params.userId }).populate('enrolledUsers').exec((err, oxygen) => {
        if (err || !oxygen) {
            return res.json({ error: "Not Found" });
        }

        return res.json(oxygen);
    })
}
