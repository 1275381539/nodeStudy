/*
1、 fs.stat    检测是文件还是目录
2、 fs.mkdir    创建目录
3、 fs.writeFile    创建写入文件
4、 fs.appendFile    追加文件
5、 fs.readFile    读取文件
6、 fs.readdir    读取目录
7、 fs.rename    重命名 移动文件
8、 fs.rmdir    删除目录
9、 fs.unlink    删除文件

*/

const fs = require('fs')
/* 
    1、 fs.stat    检测是文件还是目录
    fs.stat('./html',(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(`是文件：${data.isFile()}`)
        console.log(`是目录：${data.isDirectory()}`)
    })
*/

/*
    2、 fs.mkdir    创建目录
    fs.mkdir('./css',(err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(`创建成功`)
    })
*/

/*
    3、 fs.writeFile    创建写入文件

    如果文件不存在，会创建文件并写入
    如果文件已经存在，再次执行时会替换之前的文件

    fs.writeFile('./html/index.html','hello Word',(err)=>{  
        if(err){
            console.log(err);
            return;
        }
        console.log(`创建写入文件成功`)
    })
*/

/*
    4、 fs.appendFile    追加文件

    如果文件不存在，会创建文件并写入
    如果文件已经存在，会在后面添加内容

    fs.appendFile('./css/base.css','body{color:red}',(err)=>{  
        if(err){
            console.log(err);
            return;
        }
        console.log(`appendFile成功`)
    })

*/

/*
    5、 fs.readFile    读取文件

    fs.readFile('./html/index.html',(err,data)=>{  
        if(err){
            console.log(err);
            return;
        }
        console.log(data)
        console.log(data.toString()) // 把Buffer转换为字符串
    })
*/

/*
    // 6、 fs.readdir    读取目录

    fs.readdir('./html',(err,data)=>{  
        if(err){
            console.log(err);
            return;
        }
        console.log(data) // [ 'app.js', 'index.html' ]
    })
*/

/*
    // 7、 fs.rename    重命名      
    // 功能:    1. 表示重命名    2.移动文件

    fs.rename('./css/aaa.css','./css/index.css',(err)=>{    重命名
        if(err){
            console.log(err);
            return;
        }
        console.log('重命名成功')
    })

    fs.rename('./css/index.css','./html/index.css',(err)=>{    移动      也可以移动的同时进行改名
        if(err){
            console.log(err);
            return;
        }
        console.log('移动成功')
    })

*/
/*
    // 8、 fs.rmdir    删除目录

    fs.rmdir('./aaa',(err)=>{    目录下存在别的文件或目录是无法删除的
        if(err){
            console.log(err);
            return;
        }
        console.log('删除目录成功')
    })
*/

/*
    9、 fs.unlink    删除文件

    fs.unlink('./aaa/aaa.html',(err,data)=>{  
        if(err){
            console.log(err);
            return;
        }
        console.log('删除文件成功')
    })
*/