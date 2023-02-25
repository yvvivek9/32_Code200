const express = require('express');
const bodyParser = require("body-parser");
  
const app = express();
const PORT = 3000;

var arr = [];
var x;

app.get("/buytokens", (req, res)=>{
    console.log("Hi")
    var n = req.query.count;
    for(var i = 0; i < n; i++){
        x = Math.random() * 10
        arr.push(x.toString())
    }
    console.log(arr);
})

app.get("/viewtokens", (req, res)=>{
    res.send({data: arr})
})
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT);
    else 
        console.log("Error occurred, server can't start", error);
    }
);