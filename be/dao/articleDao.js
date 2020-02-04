'use strict'
const mysql = require('../model/mysql');
let { resultPromise } = require('../lib/util')


class Blog {
    constructor(tableName) {
        this.tableName = "blogtable";
    }
    static new() {
        return new this();
    }
    async readBlogAll(tableName) {
        var sql = `select * from ${this.tableName}  order by blogCreateTime DESC`
        var res = await resultPromise(sql)
        return res;
    }
    async readBlogOne(index) {
        var sql = `SELECT  blogTitle, blogBody, blogCreateTime, blogAuthor blogCatgory
                    from ${this.tableName}
                    where id = ${index}
                   
                    `;
        var res = await resultPromise(sql)
        return res;
    }

    async writeBlog(form) {
        var blogTitle = form.blogTitle,
            blogBody = form.blogBody,
            blogAuthor = form.blogAuthor,
            blogCreateTime = form.blogCreateTime,
            blogCatgory = form.blogCatgory;
        var sql = `INSERT INTO
                        ${this.tableName}
                        (blogTitle,blogBody,blogAuthor,blogCreateTime,blogCatgory)
                    VALUES
                        ('${blogTitle}','${blogBody}','${blogAuthor}','${blogCreateTime}', '${blogCatgory}')`
        var res = await resultPromise(sql)
        return res;
    }
}
module.exports = Blog.new();