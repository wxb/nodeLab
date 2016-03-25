
var http = require('http');
var url  = require('url');


exports.start = function(router, handle){
    function onRequest(req, res){
        var pathname = url.parse(req.url).pathname;
        var postData = "";
        //req.setEncoding("utf8");
        req.addListener("data", function(postDataChunk){
            postData += postDataChunk;
        });
        req.addListener("end", function(){
            var content = router(handle, pathname, res, req);
        });
        /*
        console.log("Request for "  + pathname +  " received.");
        res.writeHead(200,  {"Content-Type":  "text/plain"});
        res.write(content);
        res.end();
        */
    }
    http.createServer(onRequest).listen(8888);
}

console.info('Server is startting');
