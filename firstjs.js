var http = require('http')
var fs =require('fs')

var ourmodule=require('./ourmodule.js')
var server = http.createServer((req, res) => {
    res.end('welcome to atoss world!')
})

server.listen(3000)
console.log(ourmodule.ourFunction())
fs.readFile('dummy.txt','utf-8',(err,data) =>{
    if(err){
        console.log("error while reading the file")
    } else {
        console.log(data)
    }
})