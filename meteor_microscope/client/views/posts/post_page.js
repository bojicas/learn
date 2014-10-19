Template.postPage.helpers({
  comments: function () {
    return Comments.find({ postid: this._id });
  }
});