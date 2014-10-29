Router.route('/', function () {
  this.layout('Layout');
  this.render('Blog');
});

Router.route('/blog/new', function () {
  this.layout('Layout');
  this.render('ArticleNew');
});

Router.route('/blog/:_id', function () {
  this.layout('Layout');
  this.render('Article');
});

if (Meteor.isClient) {
}

if (Meteor.isServer) {
}
