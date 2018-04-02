const faker = require('faker');

function randomUser() {
  return Math.floor(Math.random() * Math.floor(20));
}

let mockupData = {
  posts: [],
}

let users = [];

function createUsers(n) {
  return users.push(faker.internet.userName());
}

function createPosts(n) {
  const postObj = {
    postid: null,
    username: null,
    time: null,
    post: null,
    ban: [],
  }

  postObj.postid = n;
  postObj.username = users[randomUser()];
  postObj.time = faker.date.past();
  postObj.post = faker.lorem.paragraph();

  return postObj;
}

for(var i = 0; i < 20; i++) {
  createUsers(i);
}

for(var j = 0; j < 300; j++) {
  mockupData.posts.push(createPosts(j));
}

module.exports.mockupData = mockupData;
