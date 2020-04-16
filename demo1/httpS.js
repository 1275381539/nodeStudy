// 手动输入的http模块
const http = require('http');
http.createServer((req,res)=>{

    console.log(req.url) // 获取url

    // 设置响应头
    // 状态码是200 ，文件类型是text/html  字符集是utf-8
    res.writeHead(200,{'Content-type':"text/html;charset='utf-8'"});
    res.write('<head><meta charset="utf-8"/></head>') //解决页面输出中文乱码
    res.write(req.url)
    
    res.end(); // 结束响应
}).listen(8081);