/*
*   用途: User表 对应的DB操作
*   作者: CarlosYin
*   时间: 2017-06-15
*   备注:
*
*/

var db_base = require('./DbBase');


function getAllUser() {
    var sql = 'select * from user';

    return new Promise((SucFun, ErrFun) => {
        db_base.Query(sql, []).then((rlt) => {
            SucFun(rlt);
        }).then(err => {
        }, err => {
            ErrFun(err);
        });
    });
}



function getUserById(param) {
    var sql = 'select * from user where id = ?';
    return new Promise((SucFun, ErrFun) => {
        db_base.Query(sql, param).then((rlt) => {
            SucFun(rlt);
        }).then(err => {
        }, err => {
            ErrFun(err);
        });
    });
}



exports.getUserById = getUserById;
exports.getAllUser = getAllUser;