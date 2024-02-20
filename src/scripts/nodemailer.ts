
import nodemailer from "nodemailer";

    interface emailFunctionProps {
    email: string;
    html: string;
    subject: string;
    text: string;
   }

    // SMTP (sending) server details
    const smtpServer = "smtp.titan.email";
    const smtpPort = 587;

    // IMAP (receiving) server details
    const imapServer = "imap.titan.email";
    const imapPort = 993;

    async function sendEmail(props: emailFunctionProps) {
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: 'line-code.andrey@gmail.com',
          pass: '000000'
        }
      });

     // Message object
     let message = {
      from: 'andreyfdelgado@gmail.com',
      to: props.email,
      subject: props.subject,
      text: props.text,
      html: props.html,
      };

      let info = await transporter.sendMail(message);
      console.log("Message sent successfully as %s", info.messageId);

       console.log({ info });
       return info;
     }

      export { sendEmail };