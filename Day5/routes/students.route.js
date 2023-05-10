const express=require("express")
const studentRouter=express.Router()


studentRouter.get("/getstudents",(req,res)=>{


    res.send("students")
})

studentRouter.post("/addstudents",(req,res)=>{


    res.send("student added")
})

module.exports={
    studentRouter
}