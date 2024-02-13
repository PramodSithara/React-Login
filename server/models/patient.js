const mongoose = require("mongoose")

const PatientSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    mobile: String,
    email: String,
    password: String,
    image:String
})

const PatientModel = mongoose.model("patients", PatientSchema)
module.exports = PatientModel