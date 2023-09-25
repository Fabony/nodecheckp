var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'smtp.gmail',
  auth: {
    user: 'faithman.ch@gmail.com',
    pass: '21fatmer71'
  }
});

var mailOptions = {
  from: 'faithman.ch@gmail.com',
  to: 'broadmanu@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'There is no time!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});