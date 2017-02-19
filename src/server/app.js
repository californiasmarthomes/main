'use strict';
var express = require('express');
var app = express();
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('root'));

app.post('/contact', function (req, res) {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'xxxx',
        pass: 'xxxx'
    }
  });

  var message = JSON.stringify(req.body, null, 2);

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Main Mailer <emetens@gmail.com>', // sender address
    to: 'emetens+main@gmail.com', // list of receivers
    subject: 'New Contact', // Subject line
    text: message, // plain text body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Unable to send message', error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  })

  res.json(req.body);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
