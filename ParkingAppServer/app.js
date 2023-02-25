const express = require('express');
const bodyParser = require("body-parser");
  
const app = express();
const PORT = 3000;

var arr = [10, 20, 30, 40, 50];
var returr = {};

app.get("/buytokens", (req, res)=>{
    var n = req.body.count;
    for(var i = 0; i < n; i++)
        arr[i] = Math.random() * 100
})

app.get("/viewtokens", (req, res)=>{
    var n = arr.length;
    for(var i = 0; i < n; i++)
        returr = Object.assign(returr, {num: arr[i]})
    console.log(returr)
    res.send(returr);
})
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT);
    else 
        console.log("Error occurred, server can't start", error);
    }
);