require('dotenv').config();
const nodemailer = require('nodemailer');

if(!process.env.GMAIL_USER || ! process.env.GMAIL_PASSW ){
  throw new Error("You have to configure mail credentials in .private.env file.");
}

let transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

export default sendMail;