// 以流的方式写入大的文件
const fs = require('fs')
var str = '';

for(var i = 0;i<1000;i++){
    str+='我是从数据库获取的数据，我要保存起来111\r\n'
}

var writeStream = fs.createWriteStream('./data/outinput.txt')

writeStream.write(str);

// 标记写入完成，不写无法监听完成事件
writeStream.end();

writeStream.on('finish',()=>{
    console.log('写入完成')
})