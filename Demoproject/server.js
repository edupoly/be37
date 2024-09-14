var express = require('express');
var app = express()
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var Product = require("./model/Product.model")
app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({'extended':false}))
app.use(bodyParser.json())

mongoose.connect('mongodb+srv://infoedupoly:edupoly83@cluster0.eitlw5l.mongodb.net/be37');
app.get("/addProduct",(req,res)=>{
    res.sendFile(__dirname+"/addProduct.html")
})
app.post("/addProduct",function(req,res){
    var newProduct = new Product(req.body);
    newProduct.save();
    res.redirect("/")
})
app.get("/",(req,res)=>{
    Product.find({}).then(data=>{
        console.log(data)
        res.render("Home.pug",{products:data})
    })
})
app.get("/details/:id",(req,res)=>{
    Product.find({id:req.params.id}).then((data)=>{
        console.log(data)
        res.render("details.pug",{product:data[0]})
    })
})
app.listen(4300,()=>{console.log("server running on 4300")})