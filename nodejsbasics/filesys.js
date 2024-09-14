var fs = require('fs');

// var dataBuf = fs.readFileSync("myfile.txt");
// console.log(dataBuf.toString())

// fs.readFile("myfile.txt",function(err,dataBuf){
//     console.log(dataBuf.toString())
// })

fs.promises.readFile('myfile.txt')
.then(function(dataBuf){console.log(dataBuf.toString())})
.catch(function(err){console.log(err)})

console.log("HI")