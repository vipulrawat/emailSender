var express = require('express');
var router = express.Router();

router.get('/success',function(req,res){
  res.render('success');
});
router.get('/failure',function(req,res){
  res.render('failure');
});

module.exports = router;
