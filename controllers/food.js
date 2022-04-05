const User = require("../models/userSchema")

const Food = require('../models/foodSchema');
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





exports.createFood = (req, res) => {

    upload(req, res, err => {

        if (err) {
            return res.status(422).json({ error: "An error has occured" })
        } else {




            const { ngoname, location, pincode, contact_no } = req.body;


          

            if (!ngoname || !location || !pincode || !contact_no) {
                return res.status(422).json({ error: "Please fill all the fields" });
            }
            Food.findOne({ ngoname: ngoname }).then((d) => {
                if (d) {
                    return res.status(422).json({ error: "This name already exists" });
                }




                const food = new Food({ ngoname, location, pincode, contact_no })


                food.save().then(result => {
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

    Food.findOne({ _id: id }).then((data) => {

        if (!data) {
            return res.status(400).json({ error: "Not able to find event" });
        }

        const { active } = data;

        const changed = !active;

        Food.updateOne({ _id: id }, { $set: { active: changed } }, { new: true }).exec((err, data) => {

            if (err) {
                return res.status(400).json({ error: "Could not update the status" })
            }
            if (data) {
                return res.json({ message: "Changed" });
            }
        })
    })
}
exports.getFood = (req, res) => {

    Food.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({ error: "Not able to find event" });
        }

        return res.json(data);
    })
}

exports.getFoodById = (req, res) => {
    const food_id = req.params.id;

    Food.findOne({ _id: food_id }).exec((err, data) => {
        if (err) {
            return res.status(400).json({ error: "Not able to find the details" })
        }

        return res.json(data);

    })
}


exports.deleteFood = (req, res) => {
    Food.findOne({ _id: req.params.id }).exec((err, event) => {
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
