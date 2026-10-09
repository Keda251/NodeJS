//steps
// 1. Create readable stream
// 2. Create writable stream
// 3. Create event listener
 const fs=require("node:fs");
 const readablestream=fs.createReadStream("./stream.txt",{encoding: "utf-8"});

 const writablestream=fs.createWriteStream("./file.txt")

 readablestream.on("data",(chunks)=>{
    console.log(chunks);
   writablestream.write(chunks)
 })