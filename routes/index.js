var express = require('express');
var router = express.Router();
var session = require('express-session');

/* GET home page. */
router.get('/', function(req, res, next) {
	sess = req.session;
  res.render('pages/login', {layout: 'login.handlebars'});
});


/* GET home page. */
router.get('/dashboard', function(req, res, next) {
  res.render('pages/home', {layout: 'main.handlebars',session: req.session});
});
module.exports = router;
