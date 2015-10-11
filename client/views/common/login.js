Template.loginLayout.rendered = function() {

}

Template.loginLayout.created = function() {

}

Template.loginLayout.destroyed = function() {

}

Template.loginLayout.events({
  'click .ui.huge.green.button.scroll-force' : function(event, template) {
  $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
  }
});