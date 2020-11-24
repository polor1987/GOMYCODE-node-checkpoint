const fs = require('fs')

module.exports = (dirName,extName,callback) =>{
    fs.readdir(dirName,(err,data)=>{
    if(err){ 
        return callback(err)
    }
    const regexTest = new RegExp('.+\.' + extName + '$')
    data =  data.filter(elem => regexTest.test(elem) )
    callback(null,data)
    })
}