var http = require('http')
var fs =require('fs')

var ourmodule=require('./ourmodule.js')
var server = http.createServer((req, res) => {
    res.end('welcome to atoss world!')
})

server.listen(3000)
console.log(ourmodule.ourFunction())
console.log(ourmodule.ourSum(5,4))
console.log(ourmodule.ourMul(5,4))
console.log(ourmodule.ourDiv(28,0))
console.log(ourmodule.ourSquare(2))
fs.readFile('dummy.txt','utf-8',(err,data) =>{
    if(err){
        console.log("error while reading the file")
    } else {
        console.log(data)
    }
})

http.createServer(function (req, res) {
    fs.readFile('first.html',function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        return res.end()
    })
    }).listen(3001);
    