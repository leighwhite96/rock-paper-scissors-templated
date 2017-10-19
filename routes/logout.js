var express = require("express");
var router = express.Router();


router.post('/', function(req,res,next){
  req.session.isAuthenticated = false;
  req.session.destroy();
  res.render('logout', {title: 'You are logged out' });
});

module.exports = router;
