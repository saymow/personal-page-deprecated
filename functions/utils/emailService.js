require('dotenv').config();
const nodemailer = require('nodemailer');

const smtp = {
  user: process.env.SMTP_USER,
  pass: process.env.SMTP_PASS,
  service: process.env.SMTP_SERVICE,
};

const receiverEmail = process.env.RECEIVER_EMAIL;

const transporter = nodemailer.createTransport({
  service: smtp.service,
  auth: {
    user: smtp.user,
    pass: smtp.pass,
  },
});

class SendEmailService {
  async execute({ email, subject, body }) {
    await transporter.sendMail({
      from: smtp.user,
      to: receiverEmail,
      subject: `Personal website notification - ${subject}`,
      html: `<h1>An email from ${email}</h1>` + `<div><p>${body}</p></div>`,
    });
  }
}

module.exports = SendEmailService;
