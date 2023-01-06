const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//create schema
const doctorSchema = new Schema({

    register_id : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    specialization : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    work_experience : {
        type : Number,
        required : true
    },
})

const doctor = mongoose.model('doctor',doctorSchema);

module.exports = doctor;