// 编辑器生成的http模块

var http = require('http');// 引入http模块
/*
    request    获取url传递过来的信息
    response   给浏览器响应信息
*/
http.createServer(function (request, response) { 
      // 设置响应头
  response.writeHead(200, {'Content-Type': 'text/plain'});
     // 给页面输出，并结束响应
  response.end('Hello World');

}).listen(8081);  // 端口号

console.log('Server running at http://127.0.0.1:8081/');