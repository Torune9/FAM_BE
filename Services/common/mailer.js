const nodemailer = require('nodemailer');
require('dotenv').config();

// "use strict";

const transporter = nodemailer.createTransport({
  // host: "sandbox.smtp.mailtrap.io",
  // port: 587,
  // secure : false,
  service :'gmail',
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass : process.env.GMAIL_PASSWORD
  }
});

const sendEmail =  async (option) => {
  const info = await transporter.sendMail({
    from: 'example@test.com',
    to: option.email,
    subject: "Here your link reset password",
    text: option.resetPassword,
    html : option.layout
  });
  console.log("Message sent: %s", info.messageId);
}

module.exports = sendEmail


