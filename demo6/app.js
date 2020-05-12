// 管道流复制大的文件
const fs = require('fs')

var readStream = fs.createReadStream('./aaa.jpg') // 读取的路径

var wtiteStream =  fs.createWriteStream('./data/aaa.jpg'); // 写入的路径

readStream.pipe(wtiteStream)