
const express=require("express")
const {connection}=require("./db")
const{ userRouter}=require("./routes/User.routes")

const cors=require("cors")
const app=express()
app.use(express.json())
//app.use(cors)


app.use("/users",userRouter)


app.get("/",(req,res)=>{
    res.send("welcome")
})


app.listen(4500,async()=>{
   try {
    await connection
    console.log("Connected to db")
   } catch (error) {
    console.log("cannot connected to db")
    console.log(error)
   }
   console.log("server runing at 4500")
})