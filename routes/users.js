var express = require('express');
var router = express.Router();
var connection = require('../db');
var session = require('express-session');


/* GET users listing. */
router.get('/', function(req, res, next) {

  req.session['User_data'] = ['satheesh','Kumar'];
  // console.log(req.session.User_data);
  // res.send('respond with a resource'+sess);
  res.send(req.session);
});



/* GET users listing. */
router.get('/session_destroy', function(req, res, next) {

  req.session.destroy();
  // req.session = null;
  res.send('Session Destroy Successfully');

});

/* GET users listing. */
router.get('/get_session', function(req, res, next) {

  // req.session.destroy();
  // req.session = null;
  res.send(req.session);

});

/* GET users listing. */
router.post('/auth/', function(req, res, next) {
	var email 	 = req.body.email;
	var password = req.body.password;

// connection.query("SELECT count(*) as result,* FROM restaurents_users WHERE user_name = ? AND og_password = ?",[email,password],
connection.query("SELECT * FROM restaurents_users WHERE user_name = ? AND og_password = ?",[email,password],
  function(err, rows){
  if (err){
      // console.log("error while Login the data !");
      res.send(0);
    }else{
    	// session({secret: "Shh, its a secret!"});
    	// res.session.page_views = 1;
      req.session['User_data'] = rows[0];

      res.send(rows[0]);
    }
  });

});

module.exports = router;