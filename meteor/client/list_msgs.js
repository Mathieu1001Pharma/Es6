function findTheLambda(message) {
  return message.user !== 'Mathieu'
}
function findTheAdmin(message) {
  return message.user === 'Mathieu'
}


Template.msgs_list.helpers({
  msgs: () =>  Messages.find().fetch().filter(findTheLambda)
})

Template.msgs_list_admin.helpers({
  adminTalk: () => Messages.find().fetch().filter(findTheAdmin)
})

Template.msgs_list.events({
  'click .del-msg': (elt) => Messages.remove(elt.target.id)
})

Template.msgs_list_admin.events({
  'click .del-msg': (elt) => Messages.remove(elt.target.id)
})
