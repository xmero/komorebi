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
    subject: `Product request from ${name}`, 
    text: `Item requested: ${product} Message: ${messageBody}. You can answer through the internal messaging function.`,  
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

