// 根据对应文件后缀名不同加载不同的文件   解决上一个不能加载css的bug

var fs = require('fs');

/* 
这么写判断只能判断相应的一些后缀名，不能判断其他的，比如jpg、png、json....

所以所有的文件后缀名统一放在./data/mime.json 文件种进行获取

exports.getMine = function (extname) {
    switch (extname) {
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascript';
        default:
            return 'text/html';
    }
}

*/
// 更改readFile为同步
// exports.getFileMine = function (extname) {
//     return new Promise((res,rej)=>{
//         fs.readFile('./data/mime.json',(err,data)=>{
//             if(err){
//                 // console.log(err);
//                 rej(err);
//                 return;
//             }
//             let mime = JSON.parse(data.toString())
//             // console.log(mime[extname])
//             res(mime[extname])
//         })
//     })
// }

// 使用readFileSync
exports.getFileMine = function (extname) {
    var data = fs.readFileSync('./data/mime.json') // 表示同步

    let mime = JSON.parse(data.toString())
    // console.log(mime[extname])
    return mime[extname]
}