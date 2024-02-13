const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const PatientModel = require('./models/patient')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/patients");

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    PatientModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incoreect")
            }
        }else{
            res.json("No Record existed")
        }
    })
})

app.post('/register', (req, res) => {
    PatientModel.create(req.body)
    .then(patients => res.json(patients))
    .catch(err => res.json(error))
})

app.get('/home', (req, res) => {
    PatientModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})



app.listen(3001, () =>{
    console.log("server is running")
})