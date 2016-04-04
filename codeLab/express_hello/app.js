
var express = require('express');

var app = express();


app.all('*', function(req, res, next){
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    next();
});

app.get("/", function(request, response) {
    response.end("欢迎来到首页!");
});

app.get('/req', function(req, res){
    var hostname = req.hostname;
    res.end(hostname);
});


var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});


/*
app.get("/", function(request, response) {
    response.end("欢迎来到首页!");
});

app.get("/about", function(request, response) {
    response.end("欢迎来到about页面!");
});

app.get("*", function(request, response) {
    response.end("404 - 未找到!");
});

app.listen(3000);
*/
