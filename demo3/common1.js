
const http = require('http');// 引入http模块
const url = require('url')

const formatApi = require('./moudule/tools1.js')

console.log(formatApi)

/*
    request    获取url传递过来的信息
    response   给浏览器响应信息
*/
http.createServer(function (request, response) { 
      // 设置响应头
  response.writeHead(200, {'Content-Type': 'text/plain;charset="utf-8'});

    var api = formatApi.formatApi('后面的内容')
    // 给页面输出，并结束响应
    response.write(api)
    response.end();

}).listen(8081);  // 端口号