var url = require('url');
var jsonUrl = url.parse('http://www.baidu.com');

console.info(jsonUrl);

var jsonUrl = url.parse('http://www.baidu.com?page=1', true, true);

console.info(jsonUrl);


var jsonUrl = url.parse('http://www.baidu.com/news',true,false);
console.info(jsonUrl);


var urlFormat = url.format({
    protocol: 'https',
    hostname: 'www.baidu.com',
    port: '80',
    pathname: '/news',
    query: {page: 1}
});

console.info(urlFormat);

var redirect = url.resolve('http://example.com/one', '/two') // 'http://example.com/two'

console.info(redirect);
