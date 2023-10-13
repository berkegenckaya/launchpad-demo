
require('dotenv').config()

const PASSWORD = process.env.password

export default function (req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "contact@chainfluence.agency",
      pass: PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: 'demo@demo.com',
    to: 'contact@chainfluence.agency',
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    html: `<div>${req.body.message}</div>
    <p>Name & Surname:${req.body.name} ${req.body.surname}</p>
    <p>Telephone No:${req.body.phone}</p>
    <p>Mail :${req.body.email}</p>`,
   }

   transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  console.log(req.body);
  res.status(200)
  
}
