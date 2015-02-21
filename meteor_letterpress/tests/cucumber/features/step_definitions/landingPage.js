var assert = require('assert');

module.exports = function () {
  var helper = this;

  this.Given(/^I am a new visitor$/, function (callback) {
    callback();
  });

  this.When(/^I navigate to the landing page$/, function (callback) {
    helper.world.browser.
      url(helper.world.mirrorUrl).
      call(callback);
  });

  this.Then(/^I see the heading "([^"]*)"$/, function (arg1, callback) {
    helper.world.browser.
      getText('h1', function (error, actualHeading) {
        assert.equal(actualHeading, expectedHeading);
        callback();
      });
  });
};
