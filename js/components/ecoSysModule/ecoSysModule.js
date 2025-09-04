// Dashboards tabs
function openEcoSysTab(evt, styleName) {
  var i, x, ecoSysTabs;
  x = $(".EcoSysStyle");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  ecoSysTabs = $(".ecoSysTab");
  for (i = 0; i < x.length; i++) {
    ecoSysTabs[i].className = ecoSysTabs[i].className.replace(" active", "");
  }
  document.getElementById(styleName).style.display = "block";
  evt.currentTarget.className += " active";
}
$(".ecoSysTab").click(function () {
  $(".ecoSystem").removeClass("active");
  $(this).parent().addClass("active");
});

// Dashboard messages
$(".ecoSystem").click(function () {
  $("#footerImgLoading").show();
  $("#footerMessage").html("Data has been successfully loaded");
  footerMessage();
});
