const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const StudentModel = require('./models/Students')


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/curd")
app.get('/',(req,res)=>{
    StudentModel.find({})
    .then(studentdetails => res.json(studentdetails))
    .catch(err => res.json(err))
})

app.get('/getUser/:id',(req,res)=>{
    const id = req.params.id
    StudentModel.findById({_id:id})
    .then(studentdetails => res.json(studentdetails))
    .catch(err => res.json(err))
})

app.put('/updateuser/:id',(req,res)=>{
    const id = req.params.id;
    StudentModel.findByIdAndUpdate({_id:id},{name:req.body.name,
        email:req.body.email,
        phoneno:req.body.phoneno,
        depart:req.body.depart})
    .then(studentdetails => res.json(studentdetails))
    .catch(err => res.json(err))
})

app.delete('/deleteuser/:id',(req,res)=>{
    const id = req.params.id
    StudentModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.post("/createuser", (req,res)=>{
    StudentModel.create(req.body)
    .then(studentdetails => res.json(studentdetails))
    .catch(err=>res.json(err))
})



app.listen(4001,()=>{
    console.log('server is running')
})