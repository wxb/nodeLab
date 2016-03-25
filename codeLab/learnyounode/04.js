/*
  要求
  编写一个程序，执行一个异步的对文件系统的操作：读取一个文件，并且在终端（标准输出stdout）打印出这个文件中的内容的行数。
  类似于执行 cat file | wc -l 这个命令。 所要读取的文件的完整路径会在命令行第一个参数提供。
 */

var fs = require('fs');

var path = './';

var file = process.argv[2];

if((undefined == file) || ('' == file)){
    console.error('Error: please enter file name or path!');
}

fs.readFile(file, function(err, data){
    if(err) throw err;
    console.log(data.toString().split('\n').length - 1);
});
