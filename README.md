# genius-react-web
React web portal for genius

## 安装dva-cli，使用阿里的npm镜像
+ npm install dva-cli -g --registry=http://registry.npm.alibaba-inc.com
+ node -v 
+ npm -v
+ dva -v 

## 新建项目
+ npm new genius-web
+ 修改添加package.json，并新建.roadhogrc文件用于替换webpack.config.js
  - 类似于java的pom.xml和打包工具套件

## 下载依赖
+ npm install
## 启动服务
+ npm start
##  打包编译
+ npm run build

## 使用cli命令创建route/model/component
+ dva g route users
+ dva g model users
+ dva g component Users/Users

## DEMO: 手把手教程
+ https://github.com/sorrycc/blog/issues/18
