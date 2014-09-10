/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase'
});

Router.onBeforeAction('loading', { only: ['todos.detail'] });

Router.map(function () {
  /*
    Example:
      this.route('home', {path: '/'});
  */
  this.route('todos.index', {path: '/'});
  this.route('todos.detail', {path: '/todos/:_id'});
});
