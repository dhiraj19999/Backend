const express=require("express")
const {connection}=require("./db")
const {UserModel}=require("../Day9/model/Users.model")
const jwt=require("jsonwebtoken")
const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("welcome")
})

app.post("/register",async(req,res)=>{
    
    const userDetail=req.body
    
    try {
        const user=new UserModel(userDetail)
        await user.save()
        res.send("user Registerd")
    } catch (error) {
        res.send("Something went wrong",error)
    }
})

app.post("/login",async(req,res)=>{
  
    const{email,pass}=req.body 
   const token=jwt.sign({course:'backend'},'masai')

   try {
    const user=await UserModel.find({email:email,pass:pass})
if(user.length>0){
    res.send({"msg":"Login Succeful","token":token})
}else{
    res.send({"msg":"Wrong Credentials"})
}
} catch (error) {
    
    res.send("Something went wrong")
}

})



app.get("/data",(req,res)=>{
   
    const token=req.headers.authorization
   
    jwt.verify(token,'masai',function(err,decoded){
      if(decoded){
        res.send("...data is here")
      } else{
        res.send({"msg":"Something went wronng"})
      }
    })
    
})

app.get("/cart",(req,res)=>{
    res.send("Cart data is here ...")
})

app.listen(4900,async()=>{
   
    try {
    await connection
    console.log("Connected to db")
   } catch (error) {
    console.log("cannot connected to db")
    console.log(error)
   }
   console.log("server runing at 4800")
})