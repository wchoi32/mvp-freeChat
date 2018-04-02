const mongoose = require('mongoose');
const Promise = require('bluebird');
const data = require('./seedData');
const Stories = require('../database-mongo/index');

mongoose.connect('mongodb://localhost/freechat');

function seedDB(data) {
  data.mockupData.posts.forEach((post) => {
    Stories.insertOnePost(post, (err) => {
      if (err) { return err; }
    });
  });

  return console.log('Seeded');
}

seedDB(data);