if (Meteor.isClient) {
  UI.registerHelper('bookTitle', function () {
    return Meteor.settings.public.book.title;
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
