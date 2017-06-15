/*
*   用途: 控制层通用方法
*   作者: CarlosYin
*   时间: 2017-06-15
*   备注:
*
*/

var config = require('../until/config');

var rtnData = {
    status: 0,
    msg: '',
    code: 0,
    data: {}
};


function FormatRes(type, rlt) {
    if (type == 'suc') {
        rtnData.data = rlt;
        if (rlt.length > 0) {
            rtnData.code = config.RltMsg_Suc;
            rtnData.status = 1;
            rtnData.msg = '获取成功!';
        } else {
            rtnData.code = config.RltMsg_NoData;
            rtnData.status = 0;
            rtnData.msg = '未检索到相关信息!';
        }
    } else {
        rtnData.status = 0;
        rtnData.msg = '获取失败!';
        rtnData.code = config.RltMsg_Err;
        rtnData.data = rlt;
    }
    return rtnData;
}


exports.FormatRes = FormatRes;