const { Router } = require("express");
const user = Router();
const User = require("../models/userSchemas");
const dotenv = require("dotenv");
dotenv.config();

//nodemailer
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

let transport = nodemailer.createTransport(
  smtpTransport({
    service: "gmail",
    host: "smt.gmail.email",
    // port: 587,
    // secure: false,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  })
);

user.post("/registro", (req, res) => {
  //destructuring
  let { name, email, password } = req.body;

  contentHTML = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>
      </head>
      <body style="background: linear-gradient(to bottom, #0e89f3, #60b0fc 50%, #8ecaff);">
        <div
          style="
            max-width: 625px;
            margin-top: 0;
            margin-left: auto;
            margin-bottom: 0;
            margin-right: auto;
            height: 100vh;
          "
        >
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            dir="ltr"
            id="m_22375324755315983container"
            style="
              border-collapse: collapse;
              border-bottom-style: none;
              border-right-style: none;
              border-top-style: none;
              border-left-style: none;
              color: #f6f5f7;
              font-family: Helvetica, Arial, sans-serif;
            "
            width="100%"
          >
            <tbody>
              <tr>
                <td
                  align="left"
                  id="m_22375324755315983preheaderRow"
                  style="
                    line-height: 1em;
                    text-align: left;
                    font-size: 12px;
                    padding-top: 0;
                    padding-right: 0;
                    padding-bottom: 12px;
                    padding-left: 0;
                  "
                ></td>
              </tr>
              <tr>
                <td
                  align="left"
                  id="m_22375324755315983logoRow"
                  style="
                    background-color: #f6f5f7;
                    line-height: 1em;
                    padding-bottom: 18px;
                    padding-left: 13px;
                    padding-right: 13px;
                    padding-top: 24px;
                    text-align: left;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                  "
                  valign="middle"
                >
                  <table
                    align="left"
                    cellpadding="0"
                    cellspacing="0"
                    id="m_22375324755315983logo"
                    style="
                      border-collapse: collapse;
                      border-bottom-style: none;
                      border-right-style: none;
                      border-top-style: none;
                      border-left-style: none;
                      color: #666666;
                      font-family: Helvetica, Arial, sans-serif;
                    "
                    width="200"
                  >
                    <tbody>
                      <tr>
                        <td
                          align="left"
                          style="line-height: 1em; text-align: left;"
                          valign="middle"
                        >
                          <img
                            alt="Indeportes Antioquia"
                            border="0"
                            src="https://lh3.googleusercontent.com/X1tE38HkA-tr4uy3x2I95hoOh3zX09VuDZHkVRS0geeRFnTo3PUfVp_XrqtpnfGSH41TlfTgBkGioOlG2hgM6nkrfgam2roWNNBF6wbHhkGNj-zVAie8wx2OOrwiwsB0oHNJe_DgIZMFfQgJ6x7VMjd_WMOyrznV61PR6jeQxi01ohgHG53YWw7HrW6wYV09sEJ-fXWzs-mcusTEdX6M1bgR0Q9LyHVjBJ8JJ_OVRfFQVuPHYec-HH9xu4Dtk2xzaOyZPqMTI1AsolKnowJ-XQ3EKe0fOaIKseO_ej19dXHe5RLNbAgudwfAi52QiPe3zD8pBw2-qIv9P8ObE_POaHjSJEt-dgJBF1-bPzqKTJRKEl102ulfci6ashqBKbvBHcSr6ON4GBcONpJeFz1qlIcE38eTE7J_a5fi3vy-Tzrb-2g_u-PFNifb0X9Mfl7A37dj9vD7YZFXBKghwqddj0uJyaQqhiKFpmpZzJRjGjGop5KqveoBAqYhle4OlaVQ4uPiuC0Jg7FIk1gikgO41HXt2gOInPKyOcOXFoGcJLC7ANP8TUFSdgycshxPxCmJH99g1rS69Lgw6OKkjYr1UWujvXjRzrS3CBQYH9zpZhskhm3kwXUJCYeudgp45lEYBtKSxmGaJtWTUI_eKMfveK-EELe-zyZf3r7Lv63q-Gw52T32sGF25bKR=w310-h113-no?authuser=0"
                            style="
                              border-top-style: none;
                              border-left-style: none;
                              border-bottom-style: none;
                              border-right-style: none;
                              display: block;
                              outline: none;
                            "
                            title="Google for Education"
                            width="110"
                            class="CToWUd"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="right"
                    cellpadding="0"
                    cellspacing="0"
                    id="m_22375324755315983date"
                    style="
                      border-collapse: collapse;
                      color: #666666;
                      font-family: Helvetica, Arial, sans-serif;
                      font-size: 16px;
                      text-align: right !important;
                      border-top-style: none;
                      border-right-style: none;
                      border-bottom-style: none;
                      border-left-style: none;
                    "
                    width="289"
                  >
                    <tbody>
                      <tr>
                        <td
                          align="right"
                          id="m_22375324755315983Edition"
                          height="26"
                          style="
                            line-height: 1em;
                            text-align: right;
                            padding-top: 0;
                            padding-right: 30px;
                            padding-bottom: 0;
                            padding-left: 0;
                          "
                          valign="middle"
                        ></td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td
                  align="left"
                  id="m_22375324755315983contentRow"
                  style="
                    background-color: #f5f5f5;
                    line-height: 1em;
                    padding-bottom: 13px;
                    padding-left: 13px;
                    padding-right: 13px;
                    padding-top: 0;
                    text-align: left;
                    border-bottom-left-radius: 10px;
                    border-bottom-right-radius: 10px;
    
                  "
                >
                  <table
                    cellpadding="0"
                    cellspacing="0"
                    id="m_22375324755315983moduleContainer"
                    style="
                      border-collapse: collapse;
                      border-bottom-style: none;
                      border-right-style: none;
                      border-top-style: none;
                      border-left-style: none;
                      color: #666666;
                      font-family: Helvetica, Arial, sans-serif;
                    "
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td
                          align="left"
                          style="
                            line-height: 1em;
                            text-align: left;
                            padding-bottom: 20px;
                          "
                        >
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            style="
                              border-collapse: collapse;
                              color: #666666;
                              font-family: Helvetica, Arial, sans-serif;
                              box-shadow: 1px 1px 20px 3px rgba(0, 0, 0, 0.2);
                              border-top-style: none;
                              border-right-style: none;
                              border-bottom-style: none;
                              border-left-style: none;
                              border-top-width: 1px;
                              border-right-width: 1px;
                              border-bottom-width: 1px;
                              border-left-width: 1px;
                              border-radius: 10px;
                            "
                            width="100%"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    width: 100%;
                                    height: 30px;
                                    padding: 0;
                                    margin: 0;
                                    background: linear-gradient(to right, #0e89f3, #60b0fc 50%, #8ecaff);
                                    border-top-left-radius: 5px;
                                    border-top-right-radius: 5px;
                                  "
                                ></td>
                              </tr>
                              <tr>
                                <td
                                  align="left"
                                  border="0"
                                  style="
                                    background-color: #ffffff;
                                    line-height: 1em;
                                    padding-bottom: 30px;
                                    padding-left: 31px;
                                    padding-right: 31px;
                                    padding-top: 30px;
                                    text-align: left;
                                    border-bottom-style: none;
                                    border-right-style: none;
                                    border-top-style: none;
                                    border-left-style: none;
                                    border-bottom-left-radius: 5px;
                                    border-bottom-right-radius: 5px ;
                                  "
                                >
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    style="
                                      border-collapse: collapse;
                                      border-bottom-style: none;
                                      border-right-style: none;
                                      border-top-style: none;
                                      border-left-style: none;
                                      color: #666666;
                                      font-family: Helvetica, Arial, sans-serif;
                                    "
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          align="left"
                                          id="m_22375324755315983IntroHeadline"
                                          style="
                                            line-height: 26px;
                                            text-align: left;
                                            font-size: 14px;
                                            font-weight: normal;
                                            padding-bottom: 10px;
                                          "
                                        >
                                          <span
                                            style="
                                              font-family: helvetica, arial,
                                                sans-serif;
                                              font-size: 14px;
                                            "
                                          >
                                            Hello, ${name} <br /><br />
                                            Thank you for your application for the
                                            Associate BackEnd DEveliper track.<br /><br />
                                            We are pleased to confirm your
                                            application has been accepted. Please
                                            <a
                                              href="https://go.google-mkto.com/X2C0A2P3Ac00CYUJe017TI0"
                                              style="
                                                font-family: Helvetica, Arial,
                                                  sans-serif;
                                                font-size: 14px;
                                                font-style: normal;
                                                font-variant-ligatures: normal;
                                                font-variant-caps: normal;
                                                font-weight: normal;
                                                letter-spacing: normal;
                                                text-align: left;
                                                text-indent: 0px;
                                                text-transform: none;
                                                white-space: normal;
                                                word-spacing: 0px;
                                                background-color: #ffffff;
                                                color: #4381fd;
                                                text-decoration: none;
                                              "
                                              target="_blank"
                                              data-saferedirecturl="https://www.google.com/url?q=https://go.google-mkto.com/X2C0A2P3Ac00CYUJe017TI0&amp;source=gmail&amp;ust=1573939758104000&amp;usg=AFQjCNEzxxEGAIVzU_5PUO6K4afYvMqYrQ"
                                              >set up your Coursera</a
                                            >&nbsp;account using the email address
                                            you used to apply for the Associate
                                            Cloud Engineer Track as soon as possible
                                            to prevent any issues when provisioning
                                            your benefits. <br /><br />
                                            Please email
                                            <a
                                              href="https://go.google-mkto.com/WT0glAPUC3U1C2A00ecJW00"
                                              style="
                                                font-family: Helvetica, Arial,
                                                  sans-serif;
                                                font-size: 14px;
                                                font-style: normal;
                                                font-variant-ligatures: normal;
                                                font-variant-caps: normal;
                                                font-weight: normal;
                                                letter-spacing: normal;
                                                text-align: left;
                                                text-indent: 0px;
                                                text-transform: none;
                                                white-space: normal;
                                                word-spacing: 0px;
                                                background-color: #ffffff;
                                                color: #4381fd;
                                                text-decoration: none;
                                              "
                                              target="_blank"
                                              data-saferedirecturl="https://www.google.com/url?q=https://go.google-mkto.com/WT0glAPUC3U1C2A00ecJW00&amp;source=gmail&amp;ust=1573939758104000&amp;usg=AFQjCNFIrjDAFYUavwmkghyxKlb0abkv5Q"
                                              >acecircuit@google.com</a
                                            >
                                            once you have successfully created the
                                            Coursera account.<br /><br />
                                            Welcome to the Associate Cloud Engineer
                                            track!<br /><br />
                                            Thank you,<br />
                                            The Google Cloud Platform Education
                                            Programs Team </span
                                          ><br
                                            style="
                                              color: #666666;
                                              font-family: Verdana, Arial, Helvetica,
                                                sans-serif;
                                              font-size: 14px;
                                              font-style: normal;
                                              font-variant-ligatures: normal;
                                              font-variant-caps: normal;
                                              font-weight: normal;
                                              letter-spacing: normal;
                                              text-align: left;
                                              text-indent: 0px;
                                              text-transform: none;
                                              white-space: normal;
                                              word-spacing: 0px;
                                              background-color: #ffffff;
                                            "
                                          />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          id="m_22375324755315983emailCopyright"
                          style="
                            line-height: 16px;
                            text-align: left;
                            padding-top: 0;
                            padding-right: 30px;
                            padding-bottom: 21px;
                            padding-left: 30px;
                          "
                        >
                          <a
                            style="
                              color: #666666 !important;
                              text-decoration: none;
                            "
                            href="#m_22375324755315983_"
                            >© 2019 Dirección..., CA 94043</a
                          >
                        </td>
                      </tr>
    
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </body>
    </html>
    
    `;

  async function wrapedSendMail(mailOptions) {
    return new Promise((resolve, reject) => {
      let transporter = nodemailer.createTransport({});
      transport.sendMail(mailOptions, function (err, info) {
        if (err) {
          console.log(err);
          resolve(false);
        } else {
          console.log(`sent: ${info.response}`);
          res.json({ message: "Correo enviado satisfactoriamente" });
          resolve(true);
        }
      });
    });
  }

  sendmail = async (req) => {
    const mailOptions = {
      from: '"To do list 📝" <lauris9704@gmail.com>',
      full_name: name,
      to: email,
      subject: "Registro exitoso",
      html: contentHTML,
    };
    let resp = await wrapedSendMail(mailOptions);
    // log or process resp;
    return resp;
  };
});
