const http = require("http")
const fs = require('fs')

const port = Number(process.argv[2])
const file = process.argv[3]

const server = http.createServer((req,res)=>{
	const stream = fs.createReadStream(file,{'content-type':'text/plain'})
	stream.pipe(res)	
})

server.listen(port)