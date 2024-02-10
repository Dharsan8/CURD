const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    name : String,
    email:String,
    phoneno:String,
    depart:String
})

const StudentModel = mongoose.model("studentdetails",StudentSchema)
module.exports = StudentModel