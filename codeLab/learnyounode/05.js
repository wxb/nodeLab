/**
 * 要求
 * 编写一个程序来打印出指定目录下的文件列表，并且以特定的文件名扩展名来过滤这个列表。
 * 命令行提供两个参数提，第一个是所给的文件目录路径（如：path/to/dir），第二个参数则是需要过滤出来的文件的扩展名。
 * 举个例子：如果第二个参数是 txt，那么需要过滤出那些扩展名为 .txt的文件。
 */

var fs  = require('fs');
var path= require('path');

var dir = process.argv[2];
var suffix = process.argv[3];
fs.readdir(dir, function(err, files){
    if(err) throw err;
    files.forEach(function(file){
        if(path.extname(file) === '.'+process.argv[3]){
            console.info(file);
        }
    });
})

console.log('END');
