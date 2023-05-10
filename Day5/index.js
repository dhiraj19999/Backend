const express=require("express")
const fs=require("fs")
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors)
const {studentRouter}=require("./routes/students.route")
const{ teacherRouter}=require("./routes/teacher.route")
const {routeLoger}=require("./Middelware/Logger.Midelware")
app.use(routeLoger)


app.use("/students",studentRouter)
app.use("/teacher", teacherRouter)

/*app.use((req,res,next)=>{
   /* console.log("helllo")
    next()
    app.use  is a function
    console.log("by")*/
    // next is a function before excuted every route hello get printed and after that specific route get 
    // excuted
    // middelware is set of instruction which lies betwenn req and response
    // next is a function which excute next line
    /*
for example if if we hit home route then it first print hello >> home page>> by
    

if(req.url==="/"){
    next()
}else{
    res.send("not permited")
}//  here we only go to the home page
})*/





/*

suppose we have multipe middelwares

const first=(req,res,next)=>{

    console.log("1")
    next()
    console.log("2")
}
const second=(req,res,next)=>{

    console.log("3")
    next()
    console.log("4")
}
const third=(req,res,next)=>{

    console.log("5")
    next()
    console.log("6")
}
app.use(first,second,third) => it prints => 1=>3=>5=>route=>6=>4=>2
app.use(first,third,second) => it prints => 1=>5=>3=>route=>4=>6=>2


*/


app.get("/",(req,res)=>{


    res.send("Home page")
})












app.listen(4500,()=>{
console.log("server running on 4500")
})


