const fs = require('fs')

const buf =  fs.readFileSync(process.argv[2])

const line = buf.toString().split("\n")

console.log(line.length-1)  