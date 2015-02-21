module.exports = function () {
  this.Given(/^I am a new visitor$/, function (callback) {
    callback.pending();
  });

  this.When(/^I navigate to the landing page$/, function (callback) {
    callback.pending();
  });

  this.Then(/^I see the heading "([^"]*)"$/, function (arg1, callback) {
    callback.pending();
  });
};
