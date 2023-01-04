const mongoose = require('mongoose');

const schema = mongoose.Schema;

const patientSchema = new Schema({

    first_name : {
        type : String,
        required: true
    },
    last_name : {
        type : String,
        required: true
    },
    age : {
        type : Number,
        required: true
    },
    address : {
        type : String,
        required: true
    },
    phone_no : {
        type : Number,
        required: true
    },
    disease : {
        type : String,
        required: true
    },
    gender : {
        type : String,
        required: true
    }

})

const Patient = mongoose.model("Patient",patientSchema)

module.exports = Patient;