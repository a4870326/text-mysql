/*
*   用途: User表 对应的路由
*   作者: CarlosYin
*   时间: 2017-06-15
*   备注:
*
*/

var express = require('express');
var router = express.Router();

var UserController = require('../controllers/UserController');


/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log('ID:', req.ip);
  UserController.getAllUser(res);

});

router.post('/getUserById', function (req, res, next) {
  console.log('ID:', req.ip);
  UserController.getUserById(req,res);

});




router.post('/', function (req, res, next) {


  console.log('param:', req.body);
  var json = {
    a: 1,
    id: 23
  }



  res.json(json);
})
/* GET users listing. */
router.get('/abc', function (req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

module.exports = router;
