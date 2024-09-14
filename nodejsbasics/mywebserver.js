var http = require('http');
http.createServer(function(req,res){
    if(req.url==='/'){
        console.log(req.url)
        res.write("Hello Edupoly")
        res.end();
    }
    if(req.url==='/praveen'){
        console.log(req.url)
        res.write("ah praveen unnadu... class chepthunnadu")
        res.end();
    }
}).listen(3400)