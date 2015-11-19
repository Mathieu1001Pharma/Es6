function findTheAdmin(message) {
  return message.user === 'Mathieu'
}
function findTheLambda(message) {
  return message.user !== 'Mathieu'
}

Template.msgs_list.helpers({
  msgs: function () { return Messages.find().fetch().filter(findTheLambda) }
})

Template.msgs_list_admin.helpers({
  adminTalk: function () { return Messages.find().fetch().filter(findTheAdmin) }
})

Template.msgs_list.events({
  'click .del-msg': function () {
    Messages.remove(this._id)
  }
})
