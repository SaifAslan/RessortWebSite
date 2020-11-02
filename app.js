const express = require("express");
const bodyParser = require("body-parser");
const _ = require('lodash');
const ejs = require("ejs");
const .env = require('dotenv');

const app =express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));




//English Routs
app.get("/", function(req,res){
  res.render(__dirname+"/views/home.ejs")
});

app.get("/contactUs",function(req,res){
  res.render("contactUs.ejs")
});

app.get("/aboutUs",function(req,res){
  res.render("aboutUs.ejs")
});
app.get("/gallery", function(req,res){
  res.render(__dirname+"/views/gallery.ejs")
});

app.get("/social",function(req,res){
  res.render("social.ejs")
});

app.get("/plans",function(req,res){
  res.render("plans.ejs")
});

//Arabic Routs
app.get("/ar", function(req,res){
  res.render("homeAR.ejs")
});

app.get("/arContactUs",function(req,res){
  res.render("contactUsAR.ejs")
});

app.get("/arAboutUs",function(req,res){
  res.render("aboutUsAR.ejs")
});
app.get("/arGallery", function(req,res){
  res.render("galleryAR.ejs")
});

app.get("/arSocial",function(req,res){
  res.render("socialAR.ejs")
});

app.get("/arPlans",function(req,res){
  res.render("plansAR.ejs")
});


app.listen("3000", function(){
  console.log("server is on port 3000");
});
