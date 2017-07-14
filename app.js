var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use('/assets',express.static('assets'));
app.use('/fonts/', express.static('assets/fonts'));


var contact = require('./routes/contact');
var success = require('./routes/success');

app.use('/',contact);
app.use('/msg',success);

app.listen(3000,'localhost');
console.log('Listening to 3000');
