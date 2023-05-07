
const http=require("http")  // http is inbuild module or object
const fs=require("fs")

const server=http.createServer((request,response)=>{

    if(request.url=="/"){

        response.end("This is home page")
    }else if(request.url=="/data"){

        fs.readFile("./data.json",{encoding:"utf-8"},(err,data)=>{ 
    

            if(err){
                console.log(err)
            }else{
                response.end(data)
            }
        })
       
    }else{
        response.end(http.STATUS_CODES["404"])
    }

})

server.listen(9000,()=>{
    console.log("server is running at 9000")
})




/*
 createserver takes callback  and request and response is a objects

nodemon helps us moniter the server and restart server automaticaly
response.end means end the responce
response.end(http.STATUS_CODES["404"]) this is for invalid endpoints
*/