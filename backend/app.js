var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var blogdata = require("./src/models/model.js")
const App =express();

const port=3000;

const mongodb = "mongodb://localhost:27017/blog";
mongoose.connect(mongodb,{useNewUrlParser:true, useUnifiedTopology:true});
var db = mongoose.connection;
db.on("error",console.error.bind(console,'connection error'));
db.once("open",()=>{
    console.log("connected to DB")
});


App.listen(port,(err)=>{
    if(err){console.log("err")}
    else{console.log("Connected to server")}
});

App.route("/blogs")
.get((req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    blogdata.find({})
   .then(data=>{
       res.send(data)
   })
})

App.route("/blogger/:id")
.get((req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    var blogger  = req.params.id;
    blogdata.findOne({"_id":blogger})
   .then(data=>{
       res.send(data);
       console.log(data)
   })
})