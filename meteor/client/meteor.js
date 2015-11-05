Template.tartiflette.helpers({
  msgs: function () { return Messages.find() }
})

Template.form.events({
  'click button': function () {
    Messages.insert({user: 'Mathieu', message: $('#input_message').val() })
  }
})
