// Dashboards tabs
function openDashboardTab(evt, styleName) {
  var i, x, DIDashboardTabs;
  x = $(".BIDashboardStyle");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  DIDashboardTabs = $(".DIDashboardTab");
  for (i = 0; i < x.length; i++) {
    DIDashboardTabs[i].className = DIDashboardTabs[i].className.replace(" active", "");
  }
  document.getElementById(styleName).style.display = "block";
  evt.currentTarget.className += " active";
}
$(".DIDashboardTab").click(function () {
  $(".BIDashboard").removeClass("active");
  $(this).parent().addClass("active");
});

// Dashboard messages
$("#peopleCountDashboard").click(function () {
  $("#footerImgLoading").show();
  $("#footerMessage").html("Visitors insights dashboard has been successfully loaded");
  footerMessage();
});
$("#visitorsAnalyticsDashboard").click(function () {
  $("#footerImgLoading").show();
  $("#footerMessage").html("Visitors analytics dashboard has been successfully loaded");
  footerMessage();
});
$("#alarmsAnalyticsDashboard").click(function () {
  $("#footerImgLoading").show();
  $("#footerMessage").html("Alarms analytics dashboard has been successfully loaded");
  footerMessage();
});
$("#propertyAlarmsDashboard").click(function () {
  $("#footerImgLoading").show();
  $("#footerMessage").html("Top alarms dashboard has been successfully loaded");
  footerMessage();
});
$("#alarmsOverviewDashboard").click(function () {
  $("#footerImgLoading").show();
  $("#footerMessage").html("Alarms overview dashboard has been successfully loaded");
  footerMessage();
});

$("#historicalAnalysis").click(function () {
  $("#footerImgLoading").show();
  $("#footerMessage").html("Airlines historical dashboard has been successfully loaded");
  footerMessage();
});
$("#predictiveAnalysis").click(function () {
  $("#footerImgLoading").show();
  $("#footerMessage").html("Airlines prediction dashboard has been successfully loaded");
  footerMessage();
});
$("#pollutantsAnalysis").click(function () {
  $("#footerImgLoading").show();
  $("#footerMessage").html("Pollutants analysis dashboard has been successfully loaded");
  footerMessage();
});
