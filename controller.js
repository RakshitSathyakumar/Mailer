import nodemailer from "nodemailer";

export const sendMailToClient = async (req, res) => {
  console.log(req.body);
  const { toMail, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.USERMAIL,
      pass: process.env.PASS,
    },
  });

  const mailOptions = {
    from: {
      name: "Rakshit",
      address: process.env.USERMAIL,
    }, // sender address
    to: toMail, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent");
    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: error.message,
    });
  }
};
