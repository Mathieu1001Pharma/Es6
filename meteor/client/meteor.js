Template.msgs_list.helpers({
  msgs: function () { return Messages.find() }
})

Template.form_add_msg.events({
  'click button': function () {
    Messages.insert({user: $('#input_user').val(), message: $('#input_message').val() })
  }
})

Template.msgs_list.events({
  'click .del-msg': function () {
    Messages.remove(this._id)
  }
})
