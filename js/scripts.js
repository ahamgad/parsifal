// Disable dragging and save images
$('img').bind('contextmenu', function (e) {
  return false;
});
$('img').on('dragstart', function (event) {
  event.preventDefault();
});

// Side footer
$("#footerTooltip").click(function () {
  $("#sideFooter").toggle();
});

// Footer messages
function onLoadMessage() {
  setTimeout(function () {
    $("#footerImgLoading").hide();
    $("#footerMessage").html("");
  }, 400);
}
$(window).on('load', function () {
  $("#footerImgLoading").show();
  $("#footerMessage").html("Successfully loaded");
  onLoadMessage();
  
  $('.homeCardIconMap, .homeCardIconAlarms').trigger('click');
});

function footerMessage() {
  setTimeout(function () {
    $("#footerImgLoading").hide();
    $("#footerMessage").html("");
  }, 1500);
}

// Draggable arrange elements
$(".draggableElement").arrangeable({
  dragSelector: '.movingContainer'
});
$(".draggableElement").arrangeable({
  dragSelector: '.homeCardTitle'
});

// Header Search
$(document).ready(function () {
  $("#openAppSearch").click(function () {
    $("#appSearch").show();
    $("#openAppSearch").hide();
  });
});
$(document).ready(function () {
  $("#closeAppSearch").click(function () {
    $("#openAppSearch").show();
    $("#appSearch").hide();
    $("#appSearchFilter").hide();
    $("#appSearchFilterBtn").removeClass('active');
  });
});

$('#appSearchFilterBtn').click(function () {
  $(this).toggleClass('active');
  $('#appSearchFilter').toggle();
});

$('#apply-filter').click(function () {
  $("#appSearchFilter").hide();
  $("#appSearchFilterBtn").removeClass('active');
});

// Header search filter
$("#checkallItems").change(function () {
  var checked = $(this).is(':checked'); // Checkbox state
  if (checked) { // Select all
    $('.headerSearchFilter').each(function () {
      $(this).prop('checked', true);
    });
  } else { // Deselect All
    $('.headerSearchFilter').each(function () {
      $(this).prop('checked', false);
    });
  }
});
$(".appSearchFilterSelect .headerSearchFilter").change(function () { // Changing state of Checkbox
  if ($(".appSearchFilterSelect .headerSearchFilter").length == $('[class="headerSearchFilter"]:checked').length) {
    $("#checkallItems").prop("checked", true);
  } else {
    $("#checkallItems").prop('checked', false);
  }
});

function ClearCheck() {
  $('.headerSearchFilter').each(function () {
    $(this).prop('checked', false);
  });
}

// App Help dropdown
$('#appHeaderHelp').click(function () {
  $(this).toggleClass('clicked');
  $('#appUserHelp').toggle();
});

// Select Languages
$('#selectLanguage').click(function () {
  $(this).toggleClass('clicked');
  $('#appLanguages').toggle();
  $('#appLanguages .appHeaderDropdownRow').removeClass('active');
  $('#appLanguages .appHeaderDropdownRow.english').addClass('active');
});
$('#appLanguages .appHeaderDropdownRow').click(function () {
  $('#appLanguages .appHeaderDropdownRow').removeClass('active');
  $(this).toggleClass('active');
  $("#footerImgLoading").show();
  $("#footerMessage").html("Language has been successfully applied..");
  footerMessage();
});

// App Profile dropdown
$('#appHeaderProfile').click(function () {
  $(this).toggleClass('clicked');
  $('#appAccProfile').toggle();
});

// Close open menus
var $navbarCollapse = $("#navbarColl");
var $appSearchFilter = $("#appSearchFilter, #appSearchFilterBtn");
var $customPreferences = $('#customPreferences, #customPreferencesBtn');
var $appHelp = $('#appHeaderHelp, #appUserHelp');
var $appLanguages = $('#appLanguages, #selectLanguage');
var $appAccProfile = $('#appAccProfile, #appHeaderProfile');
var $sideFooter = $('#sideFooter, #footerTooltip');

$(document).mouseup(function (e) {
  if (!$navbarCollapse.is(e.target) &&
    $navbarCollapse.has(e.target).length === 0 &&
    $('#navToggler').attr('aria-expanded') === 'true') {
    $('#navToggler').trigger('click');
  }
  if (!$appSearchFilter.is(e.target) &&
    $appSearchFilter.has(e.target).length === 0) {
    $('#appSearchFilter').attr("style", "display:none");
    $("#appSearchFilterBtn").removeClass("active");
  }
  if (!$customPreferences.is(e.target) &&
    $customPreferences.has(e.target).length === 0) {
    $('#customPreferences').attr("style", "display:none");
    $("#customPreferencesBtn").removeClass("clicked");
  }
  if (!$appHelp.is(e.target) &&
    $appHelp.has(e.target).length === 0) {
    $('#appUserHelp').attr("style", "display:none");
    $("#appHeaderHelp").removeClass("clicked");
  }
  if (!$appLanguages.is(e.target) &&
    $appLanguages.has(e.target).length === 0) {
    $('#appLanguages').attr("style", "display:none");
    $("#selectLanguage").removeClass("clicked");

    $('#appLanguages .appHeaderDropdownRow').removeClass('active');
    $('#appLanguages .appHeaderDropdownRow.english').addClass('active');
  }
  if (!$appAccProfile.is(e.target) &&
    $appAccProfile.has(e.target).length === 0) {
    $('#appAccProfile').attr("style", "display:none");
    $("#appHeaderProfile").removeClass("clicked");
  }
  if (!$sideFooter.is(e.target) &&
    $sideFooter.has(e.target).length === 0) {
    $('#sideFooter').attr("style", "display:none");
  }
});

// Toggle fullscreen
var elem = document.documentElement;
// Function to open fullscreen mode
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { // Firefox
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { // Chrome, Safari & Opera
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { // IE/Edge
    elem = window.top.document.body; // To break out of frame in IE
    elem.msRequestFullscreen();
  }
}
// Function to close fullscreen mode
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    window.top.document.msExitFullscreen();
  }
}
window.document.onkeydown = function (e) {
  if (!e) {
    e = event;
  }
  // Maps module
  if (e.keyCode == 27 && $('#GISMap').hasClass('fullScreen') && $('#GISFullScreenBtn').hasClass('active')) {
    closeFullscreen();
    $('#GISMap').removeClass('fullScreen');
    $('#GISFullScreenBtn').removeClass('active');
  }
  if (e.keyCode == 27 && $('#siteMapContainer').hasClass('fullScreen') && $('#siteMapFullScreenBtn').hasClass('active')) {
    closeFullscreen();
    $('#siteMapContainer').removeClass('fullScreen');
    $('#siteMapFullScreenBtn').removeClass('active');
  }
  // Alarms module
  if (e.keyCode == 27 && $('#alarmsModuleContainer').hasClass('fullScreen') && $('#alarmsFullScreenBtn').hasClass('active')) {
    closeFullscreen();
    $('#alarmsModuleContainer').removeClass('fullScreen');
    $('#alarmsFullScreenBtn').removeClass('active');
  }
  // BI Dashboards module
  if (e.keyCode == 27 && $('#biDashboardsContainer').hasClass('fullScreen') && $('#biDFullScreenBtn').hasClass('active')) {
    closeFullscreen();
    $('#biDashboardsContainer').removeClass('fullScreen');
    $('#biDFullScreenBtn').removeClass('active');
  }
  // Heat mapping module
  if (e.keyCode == 27 && $('#heatMapsContainer').hasClass('fullScreen') && $('#heatMapsFullScreenBtn').hasClass('active')) {
    closeFullscreen();
    $('#heatMapsContainer').removeClass('fullScreen');
    $('#heatMapsFullScreenBtn').removeClass('active');
  }
  // Onboard module
  if (e.keyCode == 27 && $('#onBoardScanning').hasClass('fullScreen') && $('#scanningFullScreenBtn').hasClass('active')) {
    closeFullscreen();
    $('#onBoardScanning').removeClass('fullScreen');
    $('#scanningFullScreenBtn').removeClass('active');
  }
  if (e.keyCode == 27 && $('#onBoardRegistration').hasClass('fullScreen') && $('#registrationFullScreenBtn').hasClass('active')) {
    closeFullscreen();
    $('#onBoardRegistration').removeClass('fullScreen');
    $('#registrationFullScreenBtn').removeClass('active');
  }
  // Metco Dashboards module
  if (e.keyCode == 27 && $('#metcoDashboardsContainer').hasClass('fullScreen') && $('#metcoFullScreenBtn').hasClass('active')) {
    closeFullscreen();
    $('#metcoDashboardsContainer').removeClass('fullScreen');
    $('#metcoFullScreenBtn').removeClass('active');
  }
}