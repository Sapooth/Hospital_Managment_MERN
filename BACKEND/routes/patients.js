const router = require("express").Router();
const { response } = require("express");
let Patient = require("../models/Patient");

router.route("/add").post((req,res)=>{

    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const age = Number(req.body.age);
    const address = req.body.address;
    const phone_no = Number(req.body.phone_no);
    const disease = req.body.disease;
    const gender = req.body.gender;

    const newPatient = new Patient({

        first_name,
        last_name,
        age,
        address,
        phone_no,
        disease,
        gender
    }) 

    newPatient.save().then(()=>{
        res.json("Student Added")
    }).catch(()=>{
        console.log(err);
    })
})


router.route("/").get((req,res)=>{

    Patient.find().then((patients)=>{
        res.json(patients)
    }).catch((err)=>{
        console.log
    })

})

router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const {first_name,last_name,age,address,phone_no,disease,gender} = req.body;

    const updatePatient = {
        first_name,
        last_name,
        age,
        address,
        phone_no,
        disease,
        gender
    }
    const update = await Patient.findByIdAndUpdate(userId,updatePatient)
    .then(()=>{
        res.status(200).send({status:"User update", user: update})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })

})


module.exports = router;