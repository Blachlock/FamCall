const nodemailer = require('nodemailer');
require('dotenv').config();

if(!process.env.GMAIL_USER || ! process.env.GMAIL_PASS ){
  throw new Error("You have to configure mail credentials in .private.env file.");
}

let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});

const sendMail = (from, to, subject, message)=>{
  return transporter.sendMail({
    from,
    to, 
    subject,
    html: `<b>${message}</b>`
  })
  .then(info => console.log(info))
  .catch(error => console.log(error))
}


module.exports = sendMail;