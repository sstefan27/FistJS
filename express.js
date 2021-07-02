var express = require('express')
const { ourSum } = require('./ourmodule')
var app = express()

//app.get('/altpath);
app.get('/atoss',(req,res) => {
    //res.send('/atoss aaa')
    res.send(ourSum.toString());
})

app.get('/atoss2',(req,res) => {
    res.send('alt endpoint');
})

app.listen(3000,() => {
    console.log("server is working")
})