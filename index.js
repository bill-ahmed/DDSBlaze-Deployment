var Twilio = require('twilio');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const twilioConnection = require('./Connection.json');

const app = express();
const port = process.env.PORT || 9000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

/* Enabls CORS */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Static file devlaration
app.use(express.static(path.join(__dirname, 'client/build')));

// production mode
if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
  })
}

//build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'client/public/index.html'));
})
