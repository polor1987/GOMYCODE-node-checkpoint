const fs = require('fs')

fs.readFile(process.argv[2],((err,content)=> err ? console.error(err) :  console.log(content.toString().split("\n").length-1)  
))

