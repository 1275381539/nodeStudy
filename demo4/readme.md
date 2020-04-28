# 安装npm包

### install 可以简写为 i
## npm install Module Name  (备注: 一般使用npm install Module Name --save)
## 使用cnpm命令同上

# 卸载npm包

##  第一种   npm uninstall Module Name
##  第二种   在package.json下的“dependencies”中删除不要的包名，然后删除node_modules文件夹后，再次执行 npm install

# 查看当前包的所有版本
## npm info jquery

# 指定版本包安装  (非常重要)
## npm i jquery@1.8.0