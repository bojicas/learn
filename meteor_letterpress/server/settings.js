App = {
  checkSettings: function () {
    try {
      check(Meteor.settings, Match.ObjectIncluding({
        public: Match.ObjectIncluding({
          book: Match.ObjectIncluding({
            title: String
          })
        })
      }));

    } catch (e) {
      process.exit(1);
    }
  }
};

App.checkSettings();
