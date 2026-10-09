const ht= require("node:http")

const server=ht.createServer((req,res)=>{
    // res.writeHead(200)
    res.writeHead(200,{"content-type": "text/plain"})
    res.end("Hello Keda")
})
server.listen(3000,()=>{
    console.log("Server running!");
})
// open any browser and typing in the search bar localhost:3000
