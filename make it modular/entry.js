var worker = require('./make-it-modular')

const callback = (err,data) =>{
    if(err) console.error(err)
    data.forEach(ele => console.log(ele))
}

worker(process.argv[2],process.argv[3], callback)