const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  //1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT * 1,
    secure: false,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  //2) Define the email option
  const mailOption = {
    from: 'Prashant Aryal <hello@prashant.io>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  //3) Actually send the email
  await transporter.sendMail(mailOption);
};

module.exports = sendEmail;
