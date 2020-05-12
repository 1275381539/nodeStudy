const http = require('http');// 引入http模块
const fs = require('fs');
const common = require('./module/common.js')
const path = require('path')
const url = require('url')

common.getFileMine('.css')
//      这部分是无法加载css的

// http.createServer(function (req, res) {

//     // 1. 获取url  
//     let pathname = req.url
//     pathname = pathname == '/' ? '/index.html' : pathname
//     // 2. 通过fs模块读取文件
//     if(pathname != '/favicon.ico'){
//         fs.readFile('./static' + pathname,(err,data)=>{
//             if(err){
//                 res.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});
//                 res.write('<head><meta charset="utf-8"/></head>') //解决页面输出中文乱码
//                 res.end('该页面不存在');
//             }
//             res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
//             res.end(data);
//         })
//     }
// }).listen(3000);  // 端口号

// console.log('Server running at http://127.0.0.1:3000/');


/*
    readFile 把他更改为同步

http.createServer(function (req, res) {

    // 1. 获取url  
    let pathname = url.parse(req.url).pathname; // 过滤get传值
    pathname = pathname == '/' ? '/index.html' : pathname

    //  path.extname() 可以获取文件后缀名

    let extname = path.extname(pathname)

    // 2. 通过fs模块读取文件
    if(pathname != '/favicon.ico'){
        fs.readFile('./static' + pathname,async (err,data)=>{
            if(err){
                res.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});
                res.write('<head><meta charset="utf-8"/></head>') //解决页面输出中文乱码
                res.end('该页面不存在');
            }
            let mime =await common.getFileMine(extname)
            res.writeHead(200, {'Content-Type': `${mime};charset="utf-8"`});
            res.end(data);
        })
    }
}).listen(3000);  // 端口号

console.log('Server running at http://127.0.0.1:3000/');

*/

// readFileSync通过这个方法读取
http.createServer(function (req, res) {

    // 1. 获取url  
    let pathname = url.parse(req.url).pathname; // 过滤get传值
    pathname = pathname == '/' ? '/index.html' : pathname

    //  path.extname() 可以获取文件后缀名

    let extname = path.extname(pathname)

    // 2. 通过fs模块读取文件
    if(pathname != '/favicon.ico'){
        fs.readFile('./static' + pathname,(err,data)=>{
            if(err){
                res.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});
                res.write('<head><meta charset="utf-8"/></head>') //解决页面输出中文乱码
                res.end('该页面不存在');
            }
            let mime =common.getFileMine(extname)
            res.writeHead(200, {'Content-Type': `${mime};charset="utf-8"`});
            res.end(data);
        })
    }
}).listen(3000);  // 端口号

console.log('Server running at http://127.0.0.1:3000/');