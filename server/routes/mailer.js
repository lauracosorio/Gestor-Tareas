const { transporter } = require("./mailerTransporter");
const helpers = {};

helpers.sendMail = (name, email, pass) => {
  contentHTML = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Document</title>
    </head>
    <body
      style="
        background: linear-gradient(to bottom, #0e89f3, #60b0fc 50%, #8ecaff);
      "
    >
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
                          alt="TO DO LIST"
                          border="0"
                          src="https://lh3.googleusercontent.com/16viPpOI4Iabrga1NrbqRSQoIzCFxaivBOgk-imdvkwsSe_EqzBaBElvNcxsHe21a5rspIIUoHCYCLAaw2bKUo7LOFWtKhVJrRLYU5woc9K9Kh99-KumIdfTiQ-uzV_vMBbvpWZGSbOdC977Tc5lNMhcrBpyo6mwZ0EzTRTp8Y__weFu_SNtqj73NelCpO9Vr0-zt1IevPRTJ_6TJwrUaDoFI1mVPxAm3nxz4STc5PVlgDS6tsxWXAenNN_ebM2vIEPYPPsOB2JPuCzT-reSDO-HZ9xECJRp--kRIoTS36BH1M5s9ZklJBonUCzDDhPeBWLwbKW7FPaduRMfF9-U50EU1fqHFIfOnasB6_sjlzEjnDeHV_SWSCjPbfv45ul2x_Jv7VURqkN4uhcD0_W36H2dzhZueoTo7iTdCDyY3JaRd_ixL4oPZy_5r9sD9u6ZwwwdgUgtKH1XgVGP2h0zMQd-GUqRfx437NVSFFh1vcHVLwV1hecCyiDU4Ut60QG4SpLyWSqTR8zGPD712WSq7GYfmZuv7_LzL-3c6R7AtDSYIbhmBDu8eCoHNNkD758LZJYIbqQZhxegFfR43G2g6dhAPNYno8WzHyO6dJZY7V4tu0rM63y2PYBBrOgkrQ9BTqPh0MpEvCvSGmuGck2-ZXM2YI1fGuldwc7HsHZLaD_v3I1S-uSeuOc=w600-h125-no?authuser=0"
                          style="
                            border-top-style: none;
                            border-left-style: none;
                            border-bottom-style: none;
                            border-right-style: none;
                            display: block;
                            outline: none;
                          "
                          title="TO DO LIST"
                          width="150"
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
                                  background: linear-gradient(
                                    to right,
                                    #0e89f3,
                                    #60b0fc 50%,
                                    #8ecaff
                                  );
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
                                  border-bottom-right-radius: 5px;
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
                                          Hola, ${name} <br /><br />
                                          Gracias por registrarte en nuestra plataforma TO DO LIST.<br /><br />
                                          Nos complace informarle que su registro fue realizado con éxito, y que la plataforma ya se encuentra displonible para ser utilizada cuando lo necesite.
                                          <br /><br />
                                          &nbsp;Las credenciales utilizadas para poder ingresar a la plataforma son las siguientes: <br /><br />
                                          <b>Correo: </b>${email}<br />
                                          <b>Contraseña: </b>${pass}
                                        
                                          <br /><br />
                                          Bienvenid@ a TO DO LIST !
                                           <br /><br />
                                         Gracias por hacer parte de nuestra comunidad<br />
                                           </span
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
                          >© 2021 TO DO LIST </a
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

  const mailOptions = {
    from: '"To do list 📝" <lauris9704@gmail.com>',
    full_name: name,
    to: email,
    subject: "Registro exitoso",
    html: contentHTML,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    }
  });
};

module.exports = helpers;
