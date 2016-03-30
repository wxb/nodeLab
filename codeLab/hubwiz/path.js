
var path = require('path');

//normalize函数将不符合规范的路径经过格式化转换为标准路径,解析路径中的.与..外，还能去掉多余的斜杠。
//
var data = path.normalize('/path///normalize/hi/..');
console.log(data);

//join函数将传入的多个路径拼接为标准路径并将其格式化，返回规范后的路径，避免手工拼接路径字符串的繁琐. 如下示例：
var filePath = path.join('///you', '/are', '//beautiful');
console.log(filePath);

//dirname函数用来返回路径中的目录名. 如下示例：
var fileDir = path.dirname('/Users/wangxiaobo/woNode/codeLab/hubwiz/parse.js');
console.log(fileDir);
/*
basename函数可返回路径中的最后一部分，并且可以对其进行条件排除. 如下示例：

例1：path.basename('路径字符串');

例2：path.basename('路径字符串', '[ext]')<排除[ext]后缀字符串>;
*/
var data1 = path.basename('/foo/strong/basename/index.html');
var data2 = path.basename('/foo/strong/basename/index.html','.html');
console.log(data1 + ' "and" ' + data2);

// extname函数返回路径中文件的扩展名(以最后一个'.'开始,返回'.'以及'.'以后的所有字符串,如没有'.',则返回空字符串). 如下示例：
var data1 = path.extname('index.html');
var data2 = path.extname('/foo/strong/basename/index.html');
console.log(data1, data2);
