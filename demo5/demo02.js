//   mkdirp 的使用
const mkdirp = require('mkdirp')

// 可以一次创建多级目录
// ./upload/xx/xxx/xxxx/xxxxx

mkdirp('./upload').then(made =>
    console.log(`made directories, starting with ${made}`))