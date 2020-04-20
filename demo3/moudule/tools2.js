var obj = {
    get:function(){
        console.log('服务器端获取的数据')
    },
    post:function(){
        console.log('提交数据')
    }
}
// 有已下几种写法
  // exports.objs = obj

 module.exports = obj