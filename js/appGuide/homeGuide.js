// Home page
$(document).ready(function () {
  var useCaseGuide = sessionStorage.getItem("useCaseGuide");
  //initialize instance
  if (useCaseGuide != null) {
    var enjoyhint_instance = new EnjoyHint({});
    var enjoyhint_script_steps = [{
      'click #goToMain': 'You can view the tabs related to the selected EPIC from here',
    }];
    //set script config
    enjoyhint_instance.set(enjoyhint_script_steps);
    enjoyhint_instance.run();
    sessionStorage.setItem("homepageGuide", "homepageGuide");
    sessionStorage.removeItem("useCaseGuide");
  }
});
$("#userGuide").click(function () {
  var enjoyhint_instance = new EnjoyHint({});
  var enjoyhint_script_steps = [{
    'click #openMapsModule': 'Let\'s select a module to start the system'
  }, {
    'click #goToMain': 'You can view the selected tabs from here'
  }];
  //set script config
  enjoyhint_instance.set(enjoyhint_script_steps);
  enjoyhint_instance.run();
  sessionStorage.setItem("homepageGuide", "homepageGuide");
});