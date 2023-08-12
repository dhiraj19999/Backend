
const express=require("express")

const {UserModel}=require("../model/Users.model")
const userRouter=express.Router()







userRouter.get("/",async(req,res)=>{
let query=req.query

try {
    const users=await UserModel.find(query)
    res.send(users)
} catch (error) {
    res.send({"mes":"cannot get users","error":error.message})
}
    
})


userRouter.patch("/update/:id",async(req,res)=>{
    const ID=req.params.id
    const payload=req.body
    
    try {
        await UserModel.findByIdAndUpdate({_id:ID},payload)
        res.send({"msg":"user Has been updated"})
    } catch (error) {
        res.send({"mes":"cannot modify","error":error.message})
    }
        
    })

    userRouter.delete("/delete/:id",async(req,res)=>{
        const ID=req.params.id
        const payload=req.body
        
        try {
            await UserModel.findByIdAndDelete({_id:ID},payload)
            res.send({"msg":"user Has been deleted"})
        } catch (error) {
            res.send({"mes":"cannot modify","error":error.message})
        }
            
        })






        userRouter.post("/register",async(req,res)=>{

   try {
    const user= new UserModel(req.body)
    await  user.save()
  res.send("user has been registered")
   } catch (error) {
    console.log(error)
    res.send({"msg":"Cannot register","error":error.message})
   }
})


module.exports={
    userRouter
}