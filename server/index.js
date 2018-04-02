var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mongo');
var mongoose = require('mongoose');
var Filter = require('bad-words');

var app = express();

mongoose.connect('mongodb://localhost/freechat');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/posts', function (req, res) {
  return db.retrievePosts().then(data => {
    res.send(data);
  });
}); 

app.get('/count', function (req, res) {
  return db.count().then(count => {
    res.send(JSON.stringify(count));
  });
}); 

app.post('/ban', function(req, res) {
  db.banAndRetrieve(req.body).then(data => {
    res.send(data);
  });
});

app.post('/posts', function(req, res) {
  filter = new Filter();
  req.body.post = filter.clean(req.body.post);
  db.insertOnePost(req.body, (err) => {
    if (err) { return err; }
  });

  res.sendStatus(200);
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

