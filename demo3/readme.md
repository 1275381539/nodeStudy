# 概述

## Node中模块分为两类：一类是Node提供的模块，称为核心模块；另一类是用户编写的模块，称为文件模块
## 核心模块 http  url  等
## 自定义模块   demo3/moudule/tools.js 


# 模块加载

## 在javascript中，加载模块使用script标签即可，而在nodejs中，如何在一个模块中，加载另一个模块呢？
## 使用require()方法来引入


# 暴露属性或方法
## 在demo3/moudule/tools.js 使用 exports 或者 module.exports 暴露方法或者属性，这样外部文件才可以访问到该文件的方法或者属性


# exports 和 module.exports 暴露方法或者属性的区别

## 写法的区别
###  exports.obj = obj  
###  module.exports = obj
## 返回的区别
###  详见common2.js 和tools2.js