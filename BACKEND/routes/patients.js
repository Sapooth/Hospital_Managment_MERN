const router = require("express").Router();
let Patient = require("../models/Patient");

router.route("/add").post((req,res)=>{

    const first_name = req.body.first_name;
    const lirst_name = req.body.last_name;
    const age = Number(req.body.age);
    const address = req.body.address;
    const phone_no = Number(req.body.phone_no);
    const disease = req.body.disease;
    const gender = req.body.gender;

    const newPatient = new Patient({

        first_name,
        lirst_name,
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





module.exports = router;