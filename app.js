// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const feedbacks = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/submit-feedback', (req, res) => {
  feedbacks.push(req.body);
  res.send("Feedback received!");
});

app.listen(3000, () => console.log('App running on port 3000'));
