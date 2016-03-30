

//console.info(process.env);
/*
console.log(process.cwd());

process.chdir('../../');

console.log(process.cwd());

*/

var path = process.cwd();
// 标准输出流
process.stdout.write(path+'\n');  // console.log 底层就是使用process.stdout

// 标准错误输出流
process.stderr.write('标准错误输出流\n');

// 输入流
/*
process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write('data: ' + chunk);
  }
});
*/

//process.exit(2);

process.on('SIGINT', function(){
  console.log('Got SIGINT.  Press Control-D to exit.');
});

console.log('Version: '+process.version);
console.log('Version: '+process.versions);
