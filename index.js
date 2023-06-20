import twilio from 'twilio';
import { http } from '@google-cloud/functions-framework';

const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// If changing function name, also update in .github/workflows/deploy.yml
http('helloHttp', (req, res) => {
  // res.send(`Hello ${req.query.name || req.body.name || 'Cruel World'}!`);
  client.messages.create( {
    to: process.env.MY_PHONE_NUMBER,
    from: process.env.TWILIO_PHONE_NUMBER,
    body:'Hello! Hope you’re having a good day!'
  }, function( err, data ) {});
});