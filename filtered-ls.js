const fs = require('fs')
const path = require('path')

fs.readdir(process.argv[2],(err,list)=>{
    list.forEach(file => {
        if(err) return console.error(err)
        if(path.extname(file) === '.' + process.argv[3])
        console.log(file)
    })
})