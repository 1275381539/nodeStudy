/*
    md5  加密
1、找到md5包   https://www.npmjs.com/package/md5

2、安装包      npm install md5 --save  (备注：使用cnpm命令时，不会给package.json下的“dependencies” 中自动写入包名，所以需要加上  --save)

3、引入包      var md5 = require('md5')

*/

// var md5 = require('md5');

// console.log(md5('123456'))



var sd = require('silly-datetime');

console.log(sd.format(new Date(), 'YYYY-MM-DD HH:mm'))
