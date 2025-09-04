// Custom theme
$(document).ready(function () {
  var Dark = sessionStorage.getItem('darkTheme');
  var Light = sessionStorage.getItem('lightTheme');
  if (Dark != null) {
    darkTheme();
  }
  if (Light != null) {
    lightTheme();
  }
});

function darkTheme() {
  var linkD1 = document.getElementById("checkBoxId");
  linkD1.setAttribute("href", "css/checkBoxDark.css");

  var linkD2 = document.getElementById("radioBtnId");
  linkD2.setAttribute("href", "css/radioBtnDark.css");

  var linkD3 = document.getElementById("preferencesId");
  linkD3.setAttribute("href", "css/preferencesDark.css");

  var linkD4 = document.getElementById("select2CustomId");
  linkD4.setAttribute("href", "css/select2CustomDark.css");

  var linkD5 = document.getElementById("stylesId");
  linkD5.setAttribute("href", "css/stylesDark.css");
  
  var linkD6 = document.getElementById("sectionBG");
  linkD6.setAttribute("href", "css/secBgDark.css");

//  $('.biDashboardLight').css('display', 'none');
//  $('.biDashboardDark').css('display', 'block');

  sessionStorage.removeItem('lightTheme');
  sessionStorage.setItem('darkTheme', 'darkTheme');
}

function lightTheme() {
  var link1 = document.getElementById("checkBoxId");
  link1.setAttribute("href", "css/checkBoxLight.css");

  var link2 = document.getElementById("radioBtnId");
  link2.setAttribute("href", "css/radioBtnLight.css");

  var link3 = document.getElementById("preferencesId");
  link3.setAttribute("href", "css/preferencesLight.css");

  var link4 = document.getElementById("select2CustomId");
  link4.setAttribute("href", "css/select2CustomLight.css");

  var link5 = document.getElementById("stylesId");
  link5.setAttribute("href", "css/stylesLight.css");

  var linkD6 = document.getElementById("sectionBG");
  linkD6.setAttribute("href", "css/secBgLight.css");
//  $('.biDashboardDark').css('display', 'none');
//  $('.biDashboardLight').css('display', 'block');

  sessionStorage.removeItem('darkTheme');
  sessionStorage.setItem('lightTheme', 'lightTheme');
}

$("#lightThemeBtn").click(function () {
  lightTheme();
  $("#footerImgLoading").show();
  $("#footerMessage").html("The light theme has been successfully applied");
  footerMessage();
});
$("#darkThemeBtn").click(function () {
  darkTheme();
  $("#footerImgLoading").show();
  $("#footerMessage").html("The dark theme has been successfully applied");
  footerMessage();
});