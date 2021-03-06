import nodemailer from 'nodemailer';

import contactFormValidation from '../../schemaValidation/contactFormValidation';

import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'POST':
            await mailForm(req, res);
            break;
        default:
            res.setHeader('Allow', ['POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}

let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 2525,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

const mailForm = async (req: NextApiRequest, res: NextApiResponse) => {
    //for testing environment
    if (process.env.SMTP_HOST === 'smtp.ethereal.email') {
        let testAccount = await nodemailer.createTestAccount();
        transporter = nodemailer.createTransport({
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
        const formData = await contactFormValidation.validate(req.body);
        let info = await transporter.sendMail({
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
        res.status(200).end(JSON.stringify(req.body));
    } catch (error: any) {
        console.log(error);
        res.status(500).end(error.message);
    }
}

export default handler;
