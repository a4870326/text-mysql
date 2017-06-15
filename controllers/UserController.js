/*
*   用途: User表 对应的控制层
*   作者: CarlosYin
*   时间: 2017-06-15
*   备注:
*
*/

var UserDB = require('../db/UserDB');
var Until = require('../until/ControllerUntil');




function getAllUser(res) {
    UserDB.getAllUser().then((users) => {
        res.json(Until.FormatRes('suc',users));
    }).then(err => {
    }, err => {
        res.json(Until.FormatRes('err',err));
    });
}


function getUserById(req, res) {
    var id = req.body.id || 0;
    id = parseInt(id);
    if (isNaN(id) || id <= 0) {
        res.json(Until.FormatRes('err',{}));
    } else {
        var param = [];
        param.push(id);
        UserDB.getUserById(param).then((users) => {
            res.json(Until.FormatRes('suc',users));
        }).then(err => {
        }, err => {
            res.json(Until.FormatRes('err',users));
        });
    }

}

exports.getUserById = getUserById;
exports.getAllUser = getAllUser;