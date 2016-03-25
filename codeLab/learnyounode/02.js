
/**
  node中 process 这个全局对象来获取命令行中的参数。process 对象 拥有一个名为 argv 的属性，该属性是一个数组，数组中包含了整条命令的所有部分
 */
console.info(process.argv);

/** 结果
[ 'node',
  '/Users/wangxiaobo/woNode/codeLab/learnyounode/02.js',
  '2',
  '3',
  '4' ]
*/
