const net = require('net')

const port = process.argv[2]
const server = net.createServer(socket => {
 const date = new Date()
 const day = date.getDate()
 const month = date.getMonth() + 1
 const year = date.getFullYear()
 const fulldate = `${year}-${month}-${day}`

 const min = date.getMinutes()
 if(min < 10) min = `0${min}` 
 const hour = date.getHours()
if(hour < 10) hour = `0${hour}` 
 const fulltime = `${hour}:${min}`

 socket.write(fulldate +" "+fulltime)
 socket.end('\n')
})

server.listen(port)