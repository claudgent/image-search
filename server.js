const express = require('express');
const mongoose = require('mongoose');
const request = require('request');

const app = express();
const Image = require('./schema.js');

app.set('port', process.env.PORT || 3000);

/*mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Images');
mongoose.connection.on('open', () => {
  console.log('connect to Images DB');
});
*/
app.get('/', (req, res) => {
  res.send('<h1>Welcome to my Url Shortener Microservice!</h1> Type in your desired url as a parameter and get a shortened version you could use instead.');
});

app.listen(app.get('port'), () => {
  console.log(`Server up on port ${app.get('port')}`);
});