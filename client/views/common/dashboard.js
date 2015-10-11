Template.dashboardLayout.rendered = function() {

}

Template.dashboardLayout.created = function() {

}

Template.dashboardLayout.destroyed = function() {

}

Template.dashboardLayout.events({
  'click #user-profile' : function(event, template) {
    event.preventDefault();
    Router.go('/profile/');
  }
});