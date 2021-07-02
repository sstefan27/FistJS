var express = require('express')
var app = express()

app.get('/',(req,res) => {
    res.send('welcommme to atoss world')
})

//app.get('/altpath);

app.listen(3000,() => {
    console.log("server is working")
})