Template.msgs_list.helpers({
  msgs: function () { return Messages.find() }
})

Template.msgs_list.events({
  'click .del-msg': function () {
    Messages.remove(this._id)
  }
})
