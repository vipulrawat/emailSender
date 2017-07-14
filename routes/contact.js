var express = require('express');
var mailer = require('./mailer');
var router = express.Router();


var mail={from: 'vipulrawat007@gmail.com', // sender address
to: 'vipulrawat.imi@live.in', // list of receivers
subject: '',text:''};

router.get('/',function(req,res){
  res.render('contact');
});

router.post('/',function(req,res){
  //----------------
  require('dns').resolve('www.google.com', function(err) {
    if (err) {
       console.log("No connection");
         res.redirect('/msg/failure');
    } else {
       console.log("Connected");
       mail.subject=req.body.name+'|'+req.body.contact;
       mail.text=req.body.email+'|'+req.body.message;
       mailer.hitSend(mail)
       res.redirect('/msg/success');
    }
  });

  //-----------------

});

module.exports = router;
