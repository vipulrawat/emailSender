var nodemailer = require('nodemailer');
// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: 'vipulrawat007@gmail.com',
        pass: ''
    }
});
var status;

// send mail with defined transport object
module.exports.hitSend=function(mail) {
  mailOptions=mail;

  transporter.sendMail(mailOptions, function(error, info){
      if(error){
         return console.log(error.code);
      }
      console.log(info);
  });


};
