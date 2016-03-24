var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');

var app = express();

app.get('/', function(req, res, next){
	superagent.get('https://cnodejs.org/')
				.end(function(err, sres){
					if(err){
						return next(err);
					}
					var $ = cheerio.load(sres.text);
					var items = [];
					$('#topic_list .cell').each(function (idx, element) {
				        var $element = $(element);
				        var $title  = $element.find($('.topic_title')).attr('title');
				        var $href  = $element.find($('.topic_title')).attr('href');
				        var $author = $element.find($('.user_avatar img')).attr('title');
				        items.push({
				          title: $title,
				          href: $href,
				          author: $author
				        });
				    });
				    res.send(items);
				});
});

app.listen(8888, function(req, res){
	console.log('app is running at port 8888');
});