/*
*   用途: mysql封装,数据库连接，关闭，查询
*   作者: CarlosYin
*   时间: 2017-06-15
*   备注:
*
*/

var config = require('../until/config');
var mysql = require('mysql');
var db_connection = null;

function open() {
    return new Promise((SucFun, ErrFun) => {
        db_connection = new mysql.createConnection({
            host: config.db_hostaddress,
            user: config.db_userName,
            password: config.db_password,
            database: config.db_datebase
        });
        db_connection.connect(function (err) {
            if (err) {
                ErrFun(err);
            }
            SucFun(db_connection);
        });
    });
}

function close() {
    return new Promise((SucFun, ErrFun) => {
        db_connection.end(function (err) {
            if (err) {
                ErrFun(err);
            }
            SucFun(db_connection);
        });
    });
}

function Query(sql, param) {
    return new Promise((SucFun, ErrFun) => {
        open().then((db_con) => {
            db_con.query(sql, param, function (err, rows, fields) {
                if (err) ErrFun(err);
                returnData = rows;
            });
            close().then(() => {
                SucFun(returnData);
            }).then(cerr => {
            }, cerr => {
                ErrFun(cerr);
            });
        }).then(err => {
        }, err => {
            returnData = err;
            ErrFun(err);
        });
    });
}



exports.open = open;
exports.close = close;
exports.Query = Query;