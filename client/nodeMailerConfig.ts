import nodemailer from "nodemailer";

const email = process.env.emailId;
const pass = process.env.emailPass;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: pass,
  },
});

export const mailOptions = {
  from: `"Goa Adventure Website" <${email}>`,
  to: "choiceyourtrip@gmail.com, info@goaadventure.in", // Add multiple recipients
};
