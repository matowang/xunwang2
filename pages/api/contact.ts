import contactFormValidation from "../../schemaValidation/contactFormValidation";

import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

const handler = async (req: NextRequest) => {
  switch (req.method) {
    case "POST":
      return await mailForm(req);
    default:
      return NextResponse.json({ error: "error" }, { status: 400 });
  }
};

const mailForm = async (req: NextRequest) => {
  console.time("request");

  if (!process.env.SENDGRID_API_KEY) {
    console.log("No SENDGRID_API_KEY found");
    throw new Error("No SENDGRID_API_KEY found");
  }

  try {
    const data = await req.json();
    const formData = await contactFormValidation.validate(data);
    console.time("sendMail");
    await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [
              {
                email: "wmatthew123@gmail.com",
              },
            ],
            subject: `${formData.name} has sent a contact form from xunwang.art`,
          },
        ],
        from: {
          email: "sendgrid@xunwang.art",
        },
        content: [
          {
            type: "text/plain",
            value: formData.message,
          },
          {
            type: "text/html",
            value: `
            <p>Sender Name: ${formData.name}</p>
            <p>Sender Email: ${formData.email}</p>
            <p>Message: ${formData.message}</p>
            `,
          },
        ],
      }),
    });

    console.timeEnd("sendMail");

    console.log("Message sent to: %s", formData.name);
    console.timeEnd("request");
    return NextResponse.json({ message: "Message sent" }, { status: 200 });
  } catch (error: any) {
    console.log("error", error);
    return NextResponse.json({ error: "error" }, { status: 400 });
  }
};

export default handler;
