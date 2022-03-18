const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require('path');
const https = require("https");
const { Db } = require("mongodb");

const app = express();

app.use(express.static(path.resolve(__dirname, '../Frontend/build')));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended:true
}));

mongoose.connect("mongodb+srv://admin-akhil:test123@cluster0.jb022.mongodb.net/dawatDB");

const dawatSchema = new mongoose.Schema({
  email:String,
  name:String,
  review:[{comment:String}]
});

const Feedback = new mongoose.model("Feedback", dawatSchema);

app.get("/api",(req,res) => {
  res.json({message: "Hello from server!"});
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../Frontend/build', 'index.html'));
  });

app.post("/", (req,res) =>{
    Feedback.find({"email":req.body.email},function(err, result){
      if(result.length===0){
        const feedback = new Feedback({
          email: req.body.email,
          name: req.body.name,
          review: [{comment:req.body.comment}]
        });
        feedback.save();
      }
      else{
        console.log(result);
        Feedback.update(
          {email:result[0].email},
          {$push:{review:{comment:req.body.comment}}},
          function(err){
            if(err){
              console.log(err);
            }else{
              console.log("Successfully updated");
            }
          }
        )
      }
    })
    res.redirect("/sucess");
});
app.get("/sucess", (req,res) => {
  res.sendFile(path.resolve(__dirname, '../Frontend/build', 'sucess.html'));
})
let port =process.env.PORT;
if(port==null||port ==""){
  port = 5000;
}

app.listen(port, function(){
    console.log("Server started successfully");
  });

