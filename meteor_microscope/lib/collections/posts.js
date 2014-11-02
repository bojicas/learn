Posts = new Mongo.Collection('posts');

Posts.allow({
  insert: function (userId, doc) {
    // only allow posts if you are logged in
    return !! userId;
  }
});