var express = require('express');
var cookieParser = require('cookie-parser')
var app = express();
var users = [
    {
        username:'nani',
        password:"123"
    },
    {
        username:'sony',
        password:"234"
    }
]
var cors = require('cors')
var bodyParser = require('body-parser');

app.use(cors())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:false}))//formdata
app.use(bodyParser.json())
app.use(express.static(__dirname+"/public"))

app.get("/login",function(req,res){
    var x = users.some(function(user){
        if(user.username===req.query.username && user.password===req.query.password){
            return true
        }
    })
    if(x===true){
        res.cookie('username',req.query.username)
        res.cookie('password',req.query.password)
        res.redirect("/home.html")
    }
    else{
        res.redirect("./errorlogin.html")
    }

})
function checkLogin(req,res,next){
    if(req.cookies.username){
        next()
    }
    else{
        res.redirect("/login")
    }
}

app.use(checkLogin)

app.get("/",function(req,res){
    res.redirect("/home.html")
})



app.get("/pqr",function(req,res){
    res.send("Yes pqr is online")
})



app.get("/abc",function(req,res){
    console.log("abc route for get method called")
    res.send("Hello .... ABC request received")
})

app.get("/abc/:x/:y",function(req,res){
    console.log("abc route for get method called")
    res.send("Hello .... ABC with"+req.params.x+" request received")
})

// app.use(function(req,res,next){
//     console.log('hello first middleware')
//     next();
// })

app.get("/add",function(req,res){
    console.log(req.params)
    console.log(req.query)
    res.send("Addition is::"+(+req.query.num1+ +req.query.num2))
})
//dynamic rounting
//parameterised Routing
app.get("/add/:a/:b",function(req,res){
    
    res.send("addition"+(+req.params.a+ +req.params.b))
    
})

app.post("/add",function(req,res){
    console.log(req.body)
    res.json({ans:(+req.body.num1+ +req.body.num2)})
})

app.post("/xyz",function(req,res){
    console.log("post req for xyz")
    res.json("Received POST request for xyz route")
})

app.get("/xyz",function(req,res){
    console.log("xyz route for get method called")
    res.send("Hello .... request received and this is response from xyz route")
})

app.listen(4300)

// params
// queryparams
// payload
// formdata
// body