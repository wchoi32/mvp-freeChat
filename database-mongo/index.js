var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/freechat');

// var db = mongoose.connection;

// db.on('error', function() {
//   console.log('mongoose connection error');
// });

// db.once('open', function() {
//   console.log('mongoose connected successfully');
// });

var postSchema = mongoose.Schema({
  postid: Number,
  username: String,
  time: String,
  post: String,
  ban: [String],
});

var Posts = mongoose.model('Posts', postSchema);

const insertOnePost = (story, callback) => {
  Posts.create(story, callback);
};

const retrievePosts = () => Posts.find({}).sort({ postid: -1}).limit(10);
const banAndRetrieve = (ban) => Posts.find({'username': { $nin: ban }}).sort({ postid: -1}).limit(10);
const count = () => Posts.count();

module.exports.insertOnePost = insertOnePost;
module.exports.retrievePosts = retrievePosts;
module.exports.count = count;
module.exports.banAndRetrieve = banAndRetrieve;