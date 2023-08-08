const nodemailer = require('nodemailer');
require('dotenv').config();

// "use strict";

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 587,
  secure : false,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass : process.env.EMAIL_PASSWORD
  }
});

const sendEmail =  async (email,resetPassword) => {
  const info = await transporter.sendMail({
    from: 'example@test.com',
    to: email.email,
    subject: "Here your link reset password",
    text: resetPassword,
  });
  console.log("Message sent: %s", info.messageId);
}

module.exports = sendEmail


