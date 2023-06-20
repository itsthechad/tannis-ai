import { http } from '@google-cloud/functions-framework';
import twilio from 'twilio';
import { Configuration, OpenAIApi } from 'openai';

// If changing function name, also update in .github/workflows/deploy.yml
// http('helloHttp', (req, res) => {
//   client.messages.create( {
//     to: process.env.MY_PHONE_NUMBER,
//     from: process.env.TWILIO_PHONE_NUMBER,
//     body:'Hello! Hope you’re having a good day!'
//   }, function( err, data ) {});

//   res.send(`Done`);
// });

http('helloHttp', async (req, res) => {
  // const inboundMsg = req.body.trim();

  const twilioClient = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

  // const openaiConfig = new Configuration({
  //   apiKey: process.env.OPENAI_API_KEY
  // });
  // const openai = new OpenAIApi(openaiConfig);

  // const response = await openai.createCompletion({
  //     model: "text-davinci-003",
  //     prompt: inboundMsg,
  //     temperature: 0.7, //A number between 0 and 1 that determines how many creative risks the engine takes when generating text.
  //     max_tokens: 160, // Maximum completion length.
  //     frequency_penalty: 0.7 // # between 0 and 1. The higher this value, the bigger the effort the model will make in not repeating itself.
  // });

  twilioClient.messages.create( {
    to: process.env.MY_PHONE_NUMBER,
    from: process.env.TWILIO_PHONE_NUMBER,
    // body:response.data.choices[0].text.trim()
    body: req.body,
  }, function( err, data ) {});

  res.status(200).send('Success');
});
