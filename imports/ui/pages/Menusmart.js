Template.Menu.events({
    'click .maintext3' (event, template) {
      Blaze.render(Template.Login, document.body);
    },

    'click #waveicon' (event, template) {
      Blaze.render(Template.WreadAbout, document.body);
    }
});

Template.Menu.helpers({
 NotLoggedIn() {
   if ( !Meteor.user() & !Meteor.loggingIn()) { return false; } else { return true; }
 }
});


Template.StreamMenu.helpers({
  currentitem(){
    return Session.get('selectedItem');
  }
});
