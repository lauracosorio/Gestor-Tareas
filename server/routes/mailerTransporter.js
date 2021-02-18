const nodemailer = require('nodemailer');
smtpTransport = require('nodemailer-smtp-transport');
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport(smtpTransport({
    
    service: "gmail",
    host: "smt.gmail.com",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    }
}));

module.exports = {
    transporter
}