var express = require('express');
var utility = require('utility');

var app = express();

app.get('/', function(req, res){
	var q = req.query.q;
	if(q == undefined){
		res.send('null');
	}else{
		var md5Q = utility.md5(q);
		var sha1Q = utility.sha1(q);
		res.send('The q md5 value is ' + md5Q + '! <hr> sha1 is: ' + sha1Q);
	}

	

});

app.listen(8888, function(req, res){
	console.log('app is running at port 8888');
});