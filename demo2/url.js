// url模块
// const url = require('url')

// var api = 'http://www.baidu.com?name=zhangsan&age=18';

// // console.log(url.parse(api,true))
// var temp = url.parse(api,true).query
// console.log(temp)
// console.log(`姓名：${temp.name} -- 年龄：${temp.age}`)

// url模块和http模块相结合

const http = require('http');// 引入http模块
const url = require('url')
/*
    request    获取url传递过来的信息
    response   给浏览器响应信息
*/
http.createServer(function (request, response) { 
      // 设置响应头
  response.writeHead(200, {'Content-Type': 'text/plain'});
  
  if(request.url != '/favicon.ico'){
    var temp = url.parse(request.url,true).query
    console.log(temp)
    console.log(`姓名：${temp.name} -- 年龄：${temp.age}`)
  }
     // 给页面输出，并结束响应
  response.end('sssaaaaaasss');

}).listen(8081);  // 端口号


/*  
      安装    supervisor   
      安装命令    npm install -g supervisor

      安装成功以后启动文件命令更改为   supervisor url.js

      修改代码是不用重启node服务，直接刷新页面即可
*/