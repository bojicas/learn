Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function () {
    return [Meteor.subscribe('posts'), Meteor.subscribe('comments')];
  }
});

Router.route('/', { name: 'postsList' });
Router.route('/posts/:id', {
  name: 'postPage',
  data: function () {
    return Posts.findOne(this.params._id);
  }
});

Router.map(function () {
  this.route('postEdit', {
    path: '/posts/:_id/edit',
    data: function () {
      return Posts.findOne(this.params._id);
    }
  });
});

Router.route('/submit', { name: 'postSubmit' });

var requireLogin = function (pause) {
  if (!Meteor.user()) {
    this.render('accessDenied');
  } else {
    this.next();
  }
};

Router.onBeforeAction('loading');
Router.onBeforeAction('dataNotFound', { only: 'postPage' });
Router.onBeforeAction(requireLogin, { only: 'postSubmit' });
// Router.onBeforeAction(function () { clearErrors(); });
