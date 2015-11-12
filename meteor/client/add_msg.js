Template.form_add_msg.events({
  'click button': function () {
    Messages.insert({user: $('#input_user').val(), message: $('#input_message').val() })
  }
})
