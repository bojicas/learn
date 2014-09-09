/*****************************************************************************/
/* TodosDetail Publish Functions
/*****************************************************************************/

Meteor.publish('todos_detail', function (id) {
  return Todos.find({ _id: id });
});
