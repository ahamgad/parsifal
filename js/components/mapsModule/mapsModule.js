// Change Maps layout
$(document).ready(function () {
  $("#openMapsLayout").click(function () {
    $("#mapsSideLayout").toggle();
    $(this).toggleClass("active");
  });
});

// Site map view
// $('#siteMapViewBtn, #pinSiteMapBtn').click(function () {
//   siteMapsModule();

//   $('#moduleStyle1 #siteMapContainer').hide();
//   $('#moduleStyle1 #GISMap').removeClass('twoVer , twoHor');
// });

// Global map view
$('#globalMapViewBtn').click(function () {
  $('#moduleStyle1 #siteMapContainer').hide();
  $('#moduleStyle1 #GISMap').removeClass('twoVer , twoHor');
  $('#moduleStyle1 .sideNavLayoutBtn').removeClass('active');
  $(this).addClass("active");
});

// All views
$('#mapsAllViews').click(function () {
  $('#mapsLayoutAllViews').slideToggle();
  $(this).toggleClass("active");
});

// Change layout
$('#layoutTwoVer').click(function () {
  $('#moduleStyle1 #siteMapContainer').show();
  $('#moduleStyle1 .moduleSection').removeClass('twoHor');
  $('#moduleStyle1 .moduleSection').addClass('twoVer');
  $('#moduleStyle1 .sideNavLayoutBtn').removeClass('active');
  $(this).addClass("active");
});
$('#layoutTwoHor').click(function () {
  $('#moduleStyle1 #siteMapContainer').show();
  $('#moduleStyle1 .moduleSection').removeClass('twoVer');
  $('#moduleStyle1 .moduleSection').addClass('twoHor');
  $('#moduleStyle1 .sideNavLayoutBtn').removeClass('active');
  $(this).addClass("active");
});


// Maps side nav
$(document).ready(function () {
  // Toggle side nav
  $("#openMapsSideNav").click(function () {
    $("#moduleStyle1 .sideIconBtn").toggleClass("inActive");
    $(this).removeClass("inActive");
    $("#moduleStyle1 .closeLayout").removeClass("inActive");
    $(this).toggleClass("closeNav");
    $("#mapsSideNav").toggle();
  });
  // Toggle side nav top filter
  $("#mapsToggleSideNavFilter").click(function () {
    $(this).toggleClass("active");
    var x = document.getElementById("mapsSideNavFilter");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  });
  // Toggle pin/unpin
  $("#pinMapsSideNav").click(function () {
    $(this).hide();
    $("#unpinMapsSideNav").show();
    $('#mapsSideNav').addClass('pinned');
  });
  $("#unpinMapsSideNav").click(function () {
    $(this).hide();
    $("#pinMapsSideNav").show();
    $('#mapsSideNav').removeClass('pinned');
  });
  // Toggle side nav information
  $('#openMapsInformation').click(function () {
    $(this).toggleClass("activeColl");
    $('#mapsSideNavInformation').toggleClass('active');
    $('#mapsSideNavInformation').children('.sideNavInformationCont').toggle();
  });
});

// GIS map filters
$(document).ready(function () {
  $('#GISmapRecentAlarmsBtn').click(function () {

    $("#GISmapSideFiltersTPs").css('display', 'none');
    $(".GISmapSideFiltersBtn").fadeOut(1);
    $('.GISmapSideFiltersBtn').removeClass('active');

    $("#GISmapSideFilters").css('display', 'none');
    $('#GISmapFiltersBtn').removeClass('active');

    $(this).toggleClass('active');
    $("#GISmapSideAlarms").css('display', 'block');

    if ($("#GISmapRecentAlarmsBtn").hasClass('active')) {
      $("#footerImgLoading").show();
      $("#footerMessage").html("Recent alarms have been successfully loaded");
      footerMessage();

      $("#GISmapSideAlarmsArmed").delay(150).fadeIn("slow");
      $("#GISmapSideAlarmsBlPerson").delay(300).fadeIn("slow");
      $("#GISmapSideAlarmsRack").delay(450).fadeIn("slow");
    } else {
      $(".GISmapSideAlarmsRow").fadeOut(1);
      $("#GISmapSideAlarms").css('display', 'none');
    }
  });
});

$(document).ready(function () {
  $('#GISmapFiltersBtn').click(function () {
    $("#GISmapSideAlarms").css('display', 'none');
    $(".GISmapSideAlarmsRow").fadeOut(1);
    $('#GISmapRecentAlarmsBtn').removeClass('active');

    $(this).toggleClass('active');
    $("#GISmapSideFilters").css('display', 'block');

    if ($("#GISmapFiltersBtn").hasClass('active')) {
      $("#GISmapFiltersTPs").delay(100).fadeIn("slow");
      $("#GISmapFiltersMovingTPs").delay(200).fadeIn("slow");
      $("#GISmapFiltersAlarms").delay(300).fadeIn("slow");
    } else {
      $(".GISmapSideFiltersBtn").fadeOut(1);
      $("#GISmapSideFilters").css('display', 'none');

      $("#GISmapSideFiltersTPs").css('display', 'none');
      $("#GISmapSideFiltersTPs .GISmapSideFiltersBtn").fadeOut(1);
      $('#GISmapFiltersTPs').removeClass('active');
    }
  });
});

$(document).ready(function () {
  $('#GISmapFiltersTPs').click(function () {
    $(this).toggleClass('active');
    $("#GISmapSideFiltersTPs").css('display', 'flex');

    if ($("#GISmapFiltersTPs").hasClass('active')) {
      $(".tpsIPCamera").delay(60).fadeIn("slow");
      $(".tpsIPCameraView").delay(120).fadeIn("slow");
      $(".tpsAccessControl").delay(180).fadeIn("slow");
      $(".tpsTraffic").delay(240).fadeIn("slow");
      $(".tpsLightSensor").delay(300).fadeIn("slow");
    } else {
      $("#GISmapSideFiltersTPs .GISmapSideFiltersBtn").fadeOut(1);
      $("#GISmapSideFiltersTPs").css('display', 'none');
    }
  });
});

$('#GISmapSideFiltersTPs .GISmapSideFiltersBtn').click(function () {
  $(this).toggleClass('active');

  $("#footerImgLoading").show();
  $("#footerMessage").html("Touchpoint has been successfully applied");
  footerMessage();
});

// Open alarm from maps module
function openAlarmsModFromMaps() {
  if ($('.prefAlarms').hasClass('active')) {
    $(".homeCardIconAlarms").addClass('active');
    $(".homeCardCloseAlarms").show();

    $('#mainHeader .moduleTabCol').removeClass('active');
    $(".moduleStyle").css('display', 'none');

    $("#moduleTab2").removeAttr("hidden");
    $("#moduleTab2").addClass('active');
    $("#moduleStyle2").css('display', 'block');

    sessionStorage.setItem("alarmsMain", "alarmsMain");
  } else if ($('.prefAlarms').not('.active')) {
    $('.prefAlarms').addClass('active');
    alarmsModule();
  }
}

$("#mapsModOpenAlarm1").click(function () {
  openAlarmsModFromMaps();

  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.fire").addClass('active');

  $("#alarmTab4").removeAttr("hidden");
  $("#alarmTab4").addClass('active');
  $("#alarmsModuleStyle4").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm4", "alarmsModAlarm4");

  $("#footerImgLoading").show();
  $("#footerMessage").html("Fire alarm is running now..");
  footerMessage();
});

$("#mapsModOpenAlarm2").click(function () {
  openAlarmsModFromMaps();

  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.blCar").addClass('active');

  $("#alarmTab5").removeAttr("hidden");
  $("#alarmTab5").addClass('active');
  $("#alarmsModuleStyle5").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm5", "alarmsModAlarm5");

  $("#footerImgLoading").show();
  $("#footerMessage").html("Blacklisted car alarm is running now..");
  footerMessage();
});

$("#mapsModOpenAlarm3").click(function () {
  openAlarmsModFromMaps();

  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.unObject").addClass('active');

  $("#alarmTab6").removeAttr("hidden");
  $("#alarmTab6").addClass('active');
  $("#alarmsModuleStyle6").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm6", "alarmsModAlarm6");

  $("#footerImgLoading").show();
  $("#footerMessage").html("Unattended object alarm is running now..");
  footerMessage();
});

// Close open menus
var $mapsSideNav = $('#mapsSideNav, #openMapsSideNav');
var $layoutSideNav = $('#mapsSideLayout, #openMapsLayout');

$(document).mouseup(function (e) {
  if (!($mapsSideNav.is(e.target))
    && ($mapsSideNav.has(e.target).length === 0)
    && !($('#mapsSideNav').hasClass('pinned'))) {
    $('#mapsSideNav').css("display", "none");
    $('#moduleStyle1 .sideIconBtn').removeClass('inActive');
    $('#moduleStyle1 .sideIconBtn').removeClass('closeNav');
  }
  if (!($layoutSideNav.is(e.target))
    && ($layoutSideNav.has(e.target).length === 0)) {
    $('#mapsSideLayout').hide();
    $("#openMapsLayout").removeClass("active");
}
});