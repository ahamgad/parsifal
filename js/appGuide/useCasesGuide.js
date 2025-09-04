// EPIC page
$(document).ready(function () {
  var enjoyhint_instance = new EnjoyHint({});
  var enjoyhint_script_steps = [{
    'click #userGuide': 'Click here to open the walkthrough guide or press <b>close</b> to skip the walkthrough'
  }, {
    'click .openRetailCat': 'Let\'s select a category to view its EPIC'
  }, {
    'click #openRetailSubCat3': 'You can view the use case details by clicking here'
  }, {
    'click #useCase4': 'Let\'s select this use case'
  }];
  enjoyhint_instance.set(enjoyhint_script_steps);
  enjoyhint_instance.run();
});
// $("#userGuide").click(function () {
//   if ($('#useCasesCategories').css('display') != 'none') {
//     $(this).toggleClass('tour');
//     //initialize instance
//     var enjoyhint_instance = new EnjoyHint({});
//     if ($("#userGuide").hasClass("tour")) {
//       var enjoyhint_script_steps = [{
//         'click #openRetailCat': 'Let\'s select a category to view its EPIC'
//       }, {
//         'click #openRetailSubCat3': 'You can view the use case details by clicking here'
//       }, {
//         'click #useCase4': 'Let\'s select this use case'
//       }];
//     } else {
//       var enjoyhint_script_steps = [{
//         'click #openSecurityCat': 'Let\'s select a category to view its EPIC'

//       }, {
//         'click #openSecSubCat1': 'You can view this use case info from here'
//       }, {
//         'click #useCase1': 'Let\'s select this use case'
//       }];
//     }
//     //set script config
//     enjoyhint_instance.set(enjoyhint_script_steps);
//     enjoyhint_instance.run();
//     sessionStorage.setItem("useCaseGuide", "useCaseGuide");
//   }
// });