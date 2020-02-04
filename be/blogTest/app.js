// 后端 api express 框架
// 引入 express

const express = require('express');
const app = express();
const log = console.log.bind(console);
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router/router');

// 引入 路由  api
// const router = require('./back/router/router');
//开放静态资源目录

// app.use(express.static("views"))

// body-parser json 数据配置
app.use(bodyParser.urlencoded({
    extended: true,
    // 数据格式增加限制 默认 100K
    limit:'2100000kb',
}));
app.use(bodyParser.json());
//1 配置跨域  一定写在router 前边 否则 浏览器就会报错
app.use(cors({
    // 允许指定某台进来 这种配置
    origin: ['localhost:8080'],
    // 允许所有
    origin: '*',
    methods: ['GET', 'POST'],
    alloweHeaders: ['Conten-Type', 'Authorization']
}));
/*
    2 第二种解决跨域办法

*/
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:8081");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By", ' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });
// api 注册
app.use(router);
//  端口配置

const port = 3000;
app.listen(port, () => {
    log(`run in ${port}`);
});
module.exports = app;
