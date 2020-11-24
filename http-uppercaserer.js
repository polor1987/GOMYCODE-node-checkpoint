const http = require('http')
const map = require('through2-map')

const server = http.createServer((req,res)=>{
    if(req.method !== "POST") res.end('This Server only accepts POST')
    
    req.pipe(map(el => el.toString().toUpperCase())).pipe(res)
    
})

server.listen(Number(process.argv[2]))