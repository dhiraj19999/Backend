
const express=require("express")
const teacherRouter=express.Router()
teacherRouter.get("/getteacher",(req,res)=>{


    res.send("teacher page")
})

teacherRouter.get("/addteacher",(req,res)=>{


    res.send("teacher added")
})

module.exports={
    teacherRouter
}

