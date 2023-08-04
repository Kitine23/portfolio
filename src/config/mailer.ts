import nodemailer from "nodemailer"

export const transporter = nodemailer.createTransport({
  // https://myaccount.google.com/apppasswords
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})
