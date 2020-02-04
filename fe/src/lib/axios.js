import axios from 'axios';
//  跨域 

// 线上配置
var env = process.env;
var proBaseUrl = '';
if (env.NODE_ENV === "development") {
    // 开发模式
    proBaseUrl = 'http://192.168.124.11:3000/api'
} else {
    // 线上模式
    proBaseUrl = 'http://118.31.4.145:3000/api'


}
axios.baseUrl = proBaseUrl;
export default axios;