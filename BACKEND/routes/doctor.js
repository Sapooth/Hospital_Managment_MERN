const router = require("express").Router();
const { deleteModel } = require("mongoose");
let doctor = require("../models/doctor");


//http://localhost:8070/doctor/add
router.route("/add").post((req,res)=>{

    const register_id = req.body.register_id;
    const name = req.body.name;
    const specialization = req.body.specialization;
    const gender = req.body.gender;
    const work_experience = req.body.work_experience;

    const newdoctor = new doctor({
        register_id,
        name,
        specialization,
        gender,
        work_experience
    })

    newdoctor.save().then(()=>{
        res.json("Doctor Added")
    }).catch((err)=>{
        console.log(err);
    })

})

//http://localhost:8070/doctor get all doctors details URL
//data retrive
router.route("/").get((req,res)=>{
    doctor.find().then((doctor)=>{
        res.json(doctor)
    }).catch((err)=>{
        console.log(err)
    })
})

//http://localhost:8070/doctor/update update details URL

router.route("/update/:id").put(async (req,res)=>{
    let userId = req.params.id;
    const {register_id, name, specialization, gender, work_experience} = req.body;

    const updatedoctor = {
        register_id,
        name,
        specialization,
        gender,
        work_experience 
    }
    const update = await doctor.findByIdAndUpdate(userId, updatedoctor).then(()=>{
        res.status(200).send({status: "User updated"})
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({status: "Error with updating data",error: err.message});
    }) 
})
    router.route("/delete/:id").delete(async (req,res)=>{
        let userId = req.params.id;

        await doctor.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "User deleted", user: update});
    }).catch((err)=>{
        console.log(err.message)
        res.status(500).send({status: "Error with delete user",error: err.message});
    }) 
})        
    router.route("/get/:id").get(async(req,res)=>{
        let userId = req.params.id;
        const user = await doctor.findByIdAndDelete(userId).then((doctor)=>{
        res.status(200).send({status: "User fetched",doctor})
        }).catch(()=>{
            console.log(err.message);
            res.status(500).send({status: "Error with get user",error: err.message});
        })
    
    
})

module.exports = router;