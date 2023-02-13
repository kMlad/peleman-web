import type { NextApiRequest, NextApiResponse } from "next";
import mail from "@sendgrid/mail";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
  mail.setApiKey(process.env.SENDGRID_API_KEY ?? '');
  const senderEmail = process.env.SENDER_EMAIL;
  const receiverEmail = process.env.RECEIVER_EMAIL;
  const body = req.body;
  console.log(senderEmail, receiverEmail);

  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Message: ${body.message}
`;

  try {
    await mail.send({
      to: receiverEmail,
      from: senderEmail ?? '',
      subject: `New Message from ${body.name}`,
      text: message,
      html: message.replace(/\r\n/g, "<br>"),
    });
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}
