/*
    const db = require('./node_modules/db/db')
    db.find()  // 查找数据
    db.add()   // 增加数据
*/

/*
    const db = require('db/db')
    db.find()  // 查找数据
    db.add()   // 增加数据

*/

/*
   未配置 package.json 文件
    const db = require('db')

    db.find()     // Error: Cannot find module 'db'
    db.add()   
*/


//    配置 package.json 文件  

//    npm init --yes  // 配置命令
    const db = require('db')
    db.find()  // 查找数据
    db.add()   // 增加数据 


