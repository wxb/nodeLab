var querystring = require('querystring');

/*
stringify函数的作用就是序列化对象，也就是说将对象类型转换成一个字符串类型（默认的分割符（"&"）和分配符（"="）），本节先介绍它的基本用法，
在下一节里我们将学习如何替换默认分配符，下面我们就通过以下例子来清楚的认识一下吧！
*/
// 例1：querystring.stringify("对象")

var strObj = {want:'go',get:['fire', 'ice']};
var result1 = querystring.stringify(strObj);
console.info(result1);

/*
我们知道了对象被序列化为字符串之后默认是通过分割符（"&"）和分配符（"="）组成的，那可不可以改变呢，
这节我们就来了解一下，是否可以自己去定义组合结果，看下面的小例子
*/
// 例1：querystring.stringify("对象"，"分隔符"，"分配符")
var strObj = {spr:['sum', 'aut'], aut:'win'};
var result2 = querystring.stringify(strObj, '@', '#');
console.log(result2);

// 反序列化函数——parse函数，parse函数的作用就是反序列化字符串（默认是由"="、"&"拼接而成），转换得到一个对象类型。如下示例：
// 例1：querystring.parse("字符串")
var str = result1;
var strObj = querystring.parse(str);
console.log(strObj);

/*
parse函数的扩展用法，和上节stringify函数的多参数用法不同的是，parse函数可以根据用户所自定义的分割符、
分配符来反序列化字符串，从而得到相应的对象结果.如下示例：
*/
// 例1：querystring.parse("字符串"，"分隔符"，"分配符")
var str = result2;
var strObj = querystring.parse(str, '@', '#');
console.info(strObj);
