const express = require('express');
const bodyParser = require("body-parser");
  
const app = express();
const PORT = 3000;

var arr = [];
var x;
var y;

app.get("/buytokens", (req, res)=>{
    temp = []
    var n = req.query.count;
    for(var i = 0; i < n; i++){
        x = Math.random() * 10
        arr.push(x.toString())
    }
    res.send({data: arr})
})

app.get("/viewtokens", (req, res)=>{
    res.send({data: arr})
})

app.get("/update", (req, res)=>{
    y = arr.indexOf(req.query.num)
    arr.splice(y, 1)
    console.log(arr)
})
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT);
    else 
        console.log("Error occurred, server can't start", error);
    }
);