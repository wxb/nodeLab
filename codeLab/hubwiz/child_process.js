
/**
 * 众所周知node.js是基于单线程模型架构，这样的设计可以带来高效的CPU利用率，但是无法却利用多个核心的CPU，为了解决这个问题，
 * node.js提供了child_process模块，通过多进程来实现对多核CPU的利用. child_process模块提供了四个创建子进程的函数，
 * 分别是spawn，exec，execFile和fork
 */

var child_process = require('child_process');

// spawn函数用给定的命令发布一个子进程，只能运行指定的程序，参数需要在列表中给出。如下示例：
var child = child_process.spawn('ls', ['-la', '/']);
child.stdout.on('data', function(data) {
  console.log(data.toString());
});

/**
 * exec也是一个创建子进程的函数，与spawn函数不同它可以直接接受一个回调函数作为参数，
 * 回调函数有三个参数，分别是err, stdout , stderr，基本使用方法如下：
 */
child_process.exec('pwd', function(err, stdout, stderr){
    console.log(stdout,stderr);
});


/**
 * execFile函数与exec函数类似，但execFile函数更显得精简，因为它可以直接执行所指定的文件，基本使用方法如下：
 * execFile与spawn的参数相似，也需要分别指定执行的命令和参数，但可以接受一个回调函数，与exec的回调函数相同。
 */

child_process.execFile('nvm', ['-h'], function(err, stdout, stderr){
    if (err) {
        throw err;
    }
    console.log(stdout);
});

/**
 * fork函数可直接运行Node.js模块，所以我们可以直接通过指定模块路径而直接进行操作。使用方法如下：
 * 该方法是spawn()的特殊情景，用于派生Node进程。除了普通ChildProcess实例所具有的所有方法，所返回的对象还具有内建的通讯通道。
 */
child_process.fork( modulePath );
