/*
 * Add query methods like this:
 *  Todos.findPublic = function () {
 *    return Todos.find({is_public: true});
 *  }
 */

Todos.allow({
  insert: function (userId, doc) {
    return userId;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return doc.user_id === userId;
  },

  remove: function (userId, doc) {
    return doc.user_id === userId;
  }
});

Todos.deny({
  insert: function (userId, doc) {
    return false;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return false;
  },

  remove: function (userId, doc) {
    return false;
  }
});
