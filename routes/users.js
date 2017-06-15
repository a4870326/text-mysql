var express = require('express');
var router = express.Router();

var CUser = require('../controllers/users');

/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log('ID:', req.url, req.query, req.body);


  var mysql = require('mysql');
  var connection = mysql.createConnection({
    // host: 'localhost',
    // user: 'root',
    // database: 'myapp',
    // password: '123456'

    host: '172.18.23.144',
    user: 'root',
    password: '03260107a',
    database: 'text'
  });

  connection.connect();

  connection.query('select * from user', function (err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows);
    res.json(rows);
  });

  connection.end();




  // var json = {
  //   a: 1,
  //   id: 23
  // }



  // res.json(json);
});

router.post('/', function (req, res, next) {


  console.log('param:', req.body,CUser);
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
