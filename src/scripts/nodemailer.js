
import Mailgun from 'mailgun.js'
import formData from 'form-data'
import Email from '../utils/templates/email.astro';

async function sendEmail(props) {
  try {
    const key = process.env.MAILGUN_API_KEY
    console.log(key);
    const mailgun = new Mailgun(formData);
    const mailgunTransport = mailgun.client({ username: 'api', key: process.env.SANBOX_MAILGUN });

    // Message object
    let mailOptions = {
      from: 'linecode.andrey+erasoft@gmail.com',
      to: ['erasoftcr@gmail.com'],
      subject: props.subject,
      text: props.text,
      html: `
    <div>
    <div class="flex flex-col">
        <h3 class="">Name</h3>
        <p class="">${props.html.name}</p>
    </div>
    <br>
    <div class="flex flex-col">
        <h3 class="">Email</h3>
        <p class="">${props.html.email}</p>
    </div>
    <br>
    <div class="flex flex-col">
      <h3 class="">Phone</h3>
      <p class="">${props.html.phone}</p>
    </div>
    <br>
    <div class="flex flex-col">
        <h3 class="">Message</h3>
        <p class="">${props.html.message}</p>
    </div>
    <br>
</div>
    `
    };


    await mailgunTransport.messages.create('sandboxe1ecf7d67bd647c585a953da45ba25d4.mailgun.org', mailOptions)
    console.log("Enviadoo");
  } catch (error) {
    console.log("Error email", error);


  }


}

export { sendEmail };