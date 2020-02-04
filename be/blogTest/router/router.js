const express = require('express');

const router = express.Router();

const blogRoutes = require('../controller/blogController');


var defalutPath = '/api'
var regis = (router, routes) => {
    var length = routes.length;

    for (var i = 0; i < length; i++) {
        router[routes[i].method](defalutPath + routes[i].path, routes[i].func)
    }
}
regis(router, blogRoutes)
module.exports = router;