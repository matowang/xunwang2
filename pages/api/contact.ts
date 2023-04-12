import sgMail from "@sendgrid/mail";

import contactFormValidation from "../../schemaValidation/contactFormValidation";

import type { NextApiRequest, NextApiResponse } from "next";

if (process.env.SENDGRID_API_KEY) {
  console.log(process.env.SENDGRID_API_KEY);
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
} else {
  console.log("No SENDGRID_API_KEY found");
  throw new Error("No SENDGRID_API_KEY found");
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      return await mailForm(req, res);
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      return;
  }
};

const mailForm = async (req: NextApiRequest, res: NextApiResponse) => {
  console.time("request");

  try {
    const formData = await contactFormValidation.validate(req.body);
    console.time("sendMail");
    await sgMail.send({
      to: "wmatthew123@gmail.com", // list of receivers
      from: `sendgrid@xunwang.art`, // sender address
      subject: `${formData.name} has sent a contact form from xunwang.art`, // Subject line
      text: formData.message, // plain text body
      html: `
          <p>Sender Name: ${formData.name}</p>
          <p>Sender Email: ${formData.email}</p>
          <p>Message: ${formData.message}</p>
          `, // html body
    });
    console.timeEnd("sendMail");

    console.log("Message sent to: %s", formData.name);
    res.status(200).end(JSON.stringify(req.body));
    console.timeEnd("request");
  } catch (error: any) {
    console.log(error);
    res.status(500).end(error.message);
  }
};

export default handler;
