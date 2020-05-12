// 以流的方式读取大的文件
const fs = require('fs')
var readStream = fs.createReadStream('./data/input.txt')

var count = 0;
var str = '';

readStream.on('data',(data)=>{
    str+= data;
    count++;
})

readStream.on('end',()=>{
    console.log(str)
    console.log(count)
    console.log('读取完毕')
})

readStream.on('error',(err)=>{
    console.log(err)
})