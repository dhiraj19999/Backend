const express=require("express")
const fs=require("fs")

const app=express()  // invoking express


app.use(express.json())  //   express.json() is a method inbuilt in express to recognize the 
//incoming Request Object as a JSON Object. This method is called as a middleware in your application 
//using the code: app.use(express.json());
app.get("/",(req,res)=>{
  res.setHeader("Content-type","text/html") // we can send extra information in setHeader
    res.send("<h1>Home page</h1>")
})


app.get("/data",(req,res)=>{
const datastream=fs.createReadStream("./data.json","utf-8")
datastream.pipe(res)
})

app.post("/adddata",(req,res)=>{
    console.log(req.body)
    res.send("data added")
})

app.get("/students",(req,res)=>{
    const data=fs.readFileSync("./data.json","utf-8")
    const parsed_data=JSON.parse(JSON.parse(data))
    res.send(parsed_data.students)

})

app.post("/adddatas",(req,res)=>{
//step1 read all data 
    const data=fs.readFileSync("./data.json","utf-8") 
    // step 2 parse the data
    const parsed_data=JSON.parse(JSON.parse(data))
    // step 3 add data
    parsed_data.students.push(req.body)
// add data to data file
    fs.writeFileSync("./data.json",JSON.stringify(parsed_data))
    res.send("data added")
})

app.delete("/deletestudent",(req,res)=>{
    const data=fs.readFileSync("./data.json","utf-8") 
    // step 2 parse the data
    const parsed_data=JSON.parse(JSON.parse(data))

    let new_data=parsed_data.filter((el)=>{
        return el.name!=="Dhiraj"
    })

    res.send("data deleted")

})

app.listen(4500,()=>{

    console.log("Server running on port 4500")
})


/*


writefilesync overwrite data with new data
JSON.stringify() A common use of JSON is to exchange data to/from a web server. When sending data to a
 web server, the data has to be a string. Convert a JavaScript object into a string with JSON.stringify() .
*/