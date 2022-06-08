//在node模块中，使用require引入模块，使用module.exports导出模块。
//require可用于引入module.exports导出的结果（如对象、数字、字符串、函数等），
//并把引入的模块赋值给某个变量或常量。
const goodApi = require('./api/userApi');
const articleApi = require('./api/articleApi');
//引入body-parser模块，body-parser用来解析post参数。
const bodyParser = require('body-parser');
const express = require('express');
//使用express框架创建web服务器
const app = express();
//声明系统要使用json。
app.use(bodyParser.json());
//下句配置body-parser模块，设置使用简单算法进行浅层解析（即false）
//或复杂算法进行深层解析（即true）。
app.use(bodyParser.urlencoded({extended: false}));
//注册api路由，当http请求路由以’ /api/good’开头时，将由goodApi.js文件来处理。
app.use('/api/user', goodApi);
app.use('/api/article',articleApi);
// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');
