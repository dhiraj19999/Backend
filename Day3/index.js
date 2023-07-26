
const http=require("http")  // http is inbuild module or object
const fs=require("fs")

const server=http.createServer((request,response)=>{

    if(request.url=="/"){

        response.end("This is home page")
    }else if(request.url=="/data"){

       /* fs.readFile("./data.json",{encoding:"utf-8"},(err,data)=>{ 
    

            if(err){
                console.log(err)
            }else{
                response.end(data)
            }
        })*/

        let dataStream=fs.createReadStream("./data.json","utf8")
       
        dataStream.pipe(response)
    } else if(request.url=="/addData" && request.method=="POST"){
       
       let str=""
       request.on("data",(chunk)=>{
str+=chunk
       })

       request.on("end",()=>{
        console.log(str)
       })
        response.end("data is added")
    }
    
    else{
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

steram helps to lower the load on server it just help us to avoding serevr crash as suppose 
there is big size file like 10 gb and if we can't send it in one go  as there is small space in server like
less than 10gb so there is possibility of server crash so strem helps us to send data in chunks
pipe means collceting chunks of data in pipe and send to client
in requst.on "data & on" is event to get data of body and chunk  means get data in chunk
*/