var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express',
  //		message: "Welcome to Node on AWS" });
  res.send('Please use the /api endpoint')
});

router.get('/api', function(req, res) {
	res.send("Hope you day is a real trip!");
})

module.exports = router;
