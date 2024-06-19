import nodemailer from "nodemailer";
import { config } from "dotenv";
config({
  path: "./.env",
});

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.USERMAIL,
    pass: process.env.PASS,
  },
});

const mailOptions = {
  from: {
    name:'Rakshit',
    address:process.env.USERMAIL
  }, // sender address
  to: "21bec085@iiitdmj.ac.in", // list of receivers
  subject: "Hello ✔", // Subject line
  text: "Hello world?", // plain text body
  html: "<b>Hello world?</b>", // html body
};

const sendMail = async(transporter,mailOptions)=>{
    try {
        await transporter.sendMail(mailOptions);
        console.log("EMAIL gone");
    } catch (error) {
        console.log(error);
    }
}

sendMail(transporter,mailOptions)