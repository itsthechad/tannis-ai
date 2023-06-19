const functions = require('@google-cloud/functions-framework');

// If changing function name, also update in .github/workflows/deploy.yml
functions.http('helloHttp', (req, res) => {
  res.send(`Hello ${req.query.name || req.body.name || 'Cruel World'}!`);
});