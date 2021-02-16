const nodemailer = require('nodemailer');
smtpTransport = require('nodemailer-smtp-transport');

const transporter = nodemailer.createTransport(smtpTransport({
    
    service: "gmail",
    host: "smt.gmail.com",
    auth: {
      user: "lauris9704@gmail.com",
      pass: "2704775123.",
    }
}));

module.exports = {
    transporter
}