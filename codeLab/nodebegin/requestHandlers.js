
var childProcess = require('child_process');
var querystring = require("querystring");
var fs = require('fs');
var formidable = require("formidable");

function start(response, request){
    /*
    function sleep(milliSeconds)  {
        var startTime =  new  Date().getTime();
        var stopTime  = startTime + milliSeconds;
        while (startTime < stopTime) {
            startTime++;
            console.info(startTime);
        }
        //while(new  Date().getTime()   startTime + milliSeconds);
    }

    sleep(600000);
    /*
   var content = "empty";
   childProcess.exec("find /", function(error, stdout, stderr){
       content = stdout;
       console.info(stdout);
   });
   return content;
   */
    //return 'this is start action';
    /*
    childProcess.exec("ls -lah",  function(error, stdout, stderr)  {
        response.writeHead(200,  {"Content-Type":  "text/plain"});
        response.write(stdout);
        response.end();
    });
    */
    var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

     response.writeHead(200, {"Content-Type": "text/html"});
     response.write(body);
     response.end();
}

function upload(response, request){
    //return 'this is upload action';
    var form = new formidable.IncomingForm();
    console.log("about to parse");
    form.parse(request, function(error, fields, files) {
        fs.renameSync(files.upload.path, "/tmp/test.png");
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("received image:<br/>");
        response.write("<img src='/show' />");
        response.end();

    });
}

function show(response, request){
    fs.readFile("/tmp/test.png", "binary", function(error, file) {
    if(error) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(200, {"Content-Type": "image/png"});
      response.write(file, "binary");
      response.end();
    }
  });
}

exports.start = start;
exports.upload = upload;
exports.show = show;
