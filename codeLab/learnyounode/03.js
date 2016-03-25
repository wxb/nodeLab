
var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var res = fs.readFileSync(process.argv[2], 'utf-8');

console.info(buf.toString());

console.log(res.split('\n').length - 1);
