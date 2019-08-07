const express = require("express")
const app = express()

app.all("*",function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    // res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
});

app.get("/sum",function (req,res) { 
    res.json({
        a:1
    })
 })

 app.listen(80,function(){
     console.log("success")
 })