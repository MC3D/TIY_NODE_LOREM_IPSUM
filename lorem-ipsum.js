const express = require('express');
const loremIpsum = require('lorem-ipsum');
const app = express();

app.get('/lorem', function(req, res) {
  var html =  loremIpsum({count: 3, units: 'paragraphs', paragraphLowerBound: 3, format: 'html'});
  res.send(html);
});

app.get('/lorem/:paragraphs', function(req, res) {
  var html =  loremIpsum({count: req.params.paragraphs, units: 'paragraphs', paragraphLowerBound: 3, format: 'html'});
  res.send(html);
});

app.listen(3000, function() {
  console.log("Successfully started express application!");
});
