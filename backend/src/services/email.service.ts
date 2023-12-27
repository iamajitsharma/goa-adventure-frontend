const hbs = require("nodemailer-express-handlebars");
const nodemailer = require("nodemailer");
const path = require("path");

const handlebarOptions = {
  viewEngine: {
    partialsDir: path.resolve("./src/views/"),
    defaultLayout: false,
  },
  viewPath: path.resolve("./src/views/"),
};

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "silverag2002@gmail.com",
    pass: process.env.EMAIL_PASSWORD,
  },
});
transporter.use("compile", hbs(handlebarOptions));

var mailOptions = {
  from: "silverag2002@gmail.com",
  template: "email", // the name of the template file, i.e., email.handlebars
  to: "ankitsmail2002@gmail.com",
  subject: "Sending Email via Node.js",
  text: "That was easy!",
  context: {
    name: "ankit",
    company: "Goa Adventures",
  },
};
export const sendEmail = async () => {
  transporter.sendMail(mailOptions, function (error: any, info: any) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
