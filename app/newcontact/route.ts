import { createTestAccount, createTransport } from "nodemailer";

import contactFormValidation from "../../schemaValidation/contactFormValidation";
import { NextResponse } from "next/server";

let transporter = createTransport({
  host: process.env.SMTP_HOST,
  port: 2525,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: Request) {
  const req = await request.json();
  //for testing environment
  if (process.env.SMTP_HOST === "smtp.ethereal.email") {
    const testAccount = await createTestAccount();
    console.log("testAccount", testAccount.user, testAccount.pass);
    transporter = createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });
  }

  try {
    console.log("request.body", req);
    const formData = await contactFormValidation.validate(req);
    const info = await transporter.sendMail({
      from: `"${formData.name}" <test@xunwang.art>`, // sender address
      to: "wmatthew123@gmail.com, wmatthew123@gmail.com", // list of receivers
      subject: `${formData.name} has sent a contact form from xunwang.art`, // Subject line
      text: formData.message, // plain text body
      html: `
        <p>Sender Name: ${formData.name}</p>
        <p>Sender Email: ${formData.email}</p>
        <p>Message: ${formData.message}</p>
        `, // html body
    });

    console.log("Message sent: %s", info.messageId);
    return NextResponse.json(req);
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(req);
  }
}
