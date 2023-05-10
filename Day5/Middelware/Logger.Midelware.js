const routeLoger=(req,res,next)=>{

    const start= new Date().getTime()
    next()
    const end=new Date().getTime()
 fs.appendFileSync("./routDetails.txt",`route visited:${req.url} | Method:${req.method} | Response:${end-start}ms\n`)

}


module.exports={
    routeLoger
}