import axios from '../../axios.js'
var log = console.log.bind(console)
var baseUrl = axios.baseUrl;

var configPathFromBack = {
    getBlogLimit: '/limitBlog',
    getBlogLimitByIndex: '/blogOne?index='
}


/*
 这个接口是后端的 ==> 分页接口 <==
 当用户访问 blog 展示
 created生命周期函数 =>自动调用 methods 里面的 这个 api 
 之后的分页 按钮 每回传过来的是 页码 index
*/
const blogLimitByNum = async(index = 0) => {
    var path = configPathFromBack.getBlogLimit;
    try {
        var data = await axios.get(baseUrl + path, {
            params: {
                start: index
            }
        })
        return data;
    } catch (error) {
        return '网络错误'
    }
}

const apiGetBlodDetail = async(index) => {

    var path = configPathFromBack.getBlogLimitByIndex;
    try {
        var data = await axios.get(baseUrl + path + index);
        return data;
    } catch (error) {
        return '网络错误'
    }
}


export default {
    apiGetBlogLimit: blogLimitByNum,
    apiGetBlodDetail,
}