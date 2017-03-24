const nodemailer = require('nodemailer');

const Product = require(__base+'models/Product')
const mongoose = require('mongoose')

module.exports = (req,res) => {

    // create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAILER,
        pass: process.env.EMAIL_PASS
    }
});

const { name, product, email, messageBody} = req.body

let mailOptions = {
    from: process.env.EMAILER, 
    to: `${email}`,
    subject: `Solicitud de ${name}`, 
    text: `Producto: ${product} \n Message: ${messageBody}.\n`,  
    html: `<h2>Nueva solicitud de producto</h2>
        <table>
          <tr><th>Producto:</th><th>Mensaje:</th></tr>
          <tr><td><h3>${product}</h3></td></tr>
          <tr><td colspan="3"><h3>${message}</td></tr>
        </table>
        <p>Puedes contestar con el sistema de mensajería integrado de la aplicación.</p>`
    }

console.log("Sending email")
// send mail with defined transport object
transporter.sendMail( mailOptions,
    (err, response) => { 
    if (err) {
        res.send("We had problems sending the email")
    }
    res.redirect("/")
})


}

