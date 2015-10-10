Router.route('/', function () {
  this.render('introLayout');
});

Router.route('/dashboard/', {
  name : 'dashboardLayout'
});

Router.route('/profile/', {
  name : 'profileLayout'
});

var requireLoggedIn = function() {
  if(!Meteor.userId()){
    if(Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      Router.go('/');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction(requireLoggedIn, { only : ['dashboardLayout',
                                                 'profileLayout']});