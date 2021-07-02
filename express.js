var express = require('express')
var app = express()

//app.get('/altpath);
app.get('/atoss',(req,res) => {
    res.send('/atoss aaa')
})

app.listen(3000,() => {
    console.log("server is working")
})