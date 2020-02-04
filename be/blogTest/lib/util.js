const mysql = require('../model/mysql');
const resultPromise = (sql) => {
    return new Promise((resolve, reject) => {
        mysql.query(sql, (err, data) => {
            if (err) {
                console.log(sql + '查询失败:'+ err)
                reject(err)
            } else {
                resolve(data)
            }
        })
    });
}

module.exports = {
    resultPromise
}
