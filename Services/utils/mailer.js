const nodemailer = require('nodemailer');
// "use strict";

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 587,
  secure : false,
  // service :'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass : process.env.EMAIL_PASSWORD
  }
});

const sendEmail =  async (option) => {
  try {   
    const info = await transporter.sendMail({
      from: 'example@test.com',
      to: option.email,
      subject: "Here your link reset password",
      text: option.resetPassword,
      html : option.layout
    });
    console.log("Message sent: %s", info.messageId)
  } catch (error) {
    console.error("Error sending email: ", error)
    throw error
  }
}

module.exports = sendEmail
