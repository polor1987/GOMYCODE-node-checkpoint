const num = process.argv.slice(2)

const result =  num.reduce((acc,res) =>{
 return acc + Number(res);  
},0)

console.log(result)