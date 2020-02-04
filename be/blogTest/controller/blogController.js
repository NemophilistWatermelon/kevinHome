const result = require('../dao/articleDao.js')


const coder = () => {
    return {
        code: 1,
    }
}
const log = console.log.bind(console)
// const readData = (result, method, callback) => {
//     try {
//         var coder1 = coder();
//         result[method()].then(data => {
//             var JSONData = Object.assign({}, { length: data.length }, coder1, { data })
//             callback(null, data);
//         });
//     } catch (error) {
//         callback(error, null)
//     }


// }
const getBlogAllFunc = (req, res) => {
    result.readBlogAll().then(data => {
        var coder1 = coder();
        var JSONData = Object.assign({}, {
            length: data.length
        }, coder1, {
            data
        })
        res.status(200).json(JSONData)
    }).catch(e => {
        res.status(500).json({
            code: 1,
            msg: '服务器异常'
        })
    })
}

const getLimitFunc = (req, res) => {
    var body = req.query
    var startPage = body.start;
    var limitNum = 6


    startPage = parseInt(body.start - 1) * 5;
    if (startPage <= 0) {
        startPage = 0;
    } else {
        startPage += 1
        limitNum *= 2
    }

    // useNum = body.num;
    result.readBlogAll().then(data => {
        var coder1 = coder();
        var length = data.length;
        var data = data.slice(startPage, limitNum)
        var JSONData = Object.assign({}, {
            length: length
        }, coder1, {
            data
        })
        res.status(200).json(JSONData)
    }).catch(e => {
        res.status(200).json({
            code: 0,
            msg: '服务器错误'
        })
    })
}


// 其中一条blog
const getBlogOne = (req, res) => {
    var parmasIndex = req.query.index;
    if (parmasIndex) {
        result.readBlogOne(parmasIndex).then(data => {

            res.status(200).json(data)
        }).catch(e => {
            res.status(200).json({
                code: 0,
                msg: '服务器错误'
            })
        })
    } else {
        return res.status(404).json({
            msg: '服务器错误',
            code: 0
        })
    }

}
const sendHtml = (path, res) => {
    var fs = require('fs');
    var blogHtml = fs.readFileSync(path, 'utf-8')
    res.header("Content-Type", "text/html")
    res.send(blogHtml);
}
const getBlogPage = (req, res) => {
    var path = './views/realBlog/index.html';
    sendHtml(path, res)
}

const postMyBlog = (req, res) => {
    var body = req.body;
    var form = {
        blogTitle: body.title,
        blogBody: body.blogContent,
        blogAuthor: body.author,
        blogCatgory: body.catgory,
        blogCreateTime: body.date,
    }

    log(form)
    // return res.json({msg: 'success'})
    try {
        result.writeBlog(form).then(data => {
            var coder1 = coder();
            var JSONData = Object.assign({}, {
                length: data.length
            }, coder1, {
                data
            })
            log(JSONData)
            res.status(200).json(JSONData)
        }).catch(e => {
            res.status(501).json({
                msg: "failed",
                code: 1
            });
        })
    } catch (e) {
        res.status(500).json({
            msg: "failed",
            code: 1
        });
    }
}
// 所有blog
const blogAll = {
    method: "get",
    path: "/getBlogAll",
    func: getBlogAllFunc
}
// 分页的blog  arrary  数据 池
const blogLimit = {
    method: "get",
    path: "/limitBlog",
    func: getLimitFunc,
}
// 单一的blog
const blogGetOne = {
    method: "get",
    path: "/blogOne",
    func: getBlogOne,
}
// 写blog 的页面获取
const blogGetPage = {
    method: "get",
    path: "/blogPage",
    func: getBlogPage,
}

const commitBlog = {
    method: 'post',
    path: '/blogCommit',
    func: postMyBlog,
}

module.exports = [
    blogAll,
    blogLimit,
    blogGetOne,
    blogGetPage,
    commitBlog,
]
