function openModuleTab(evt, styleName) {
  var i, x, moduleTabs;
  x = $(".moduleStyle");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  moduleTabs = $(".moduleTab");
  for (i = 0; i < x.length; i++) {
    moduleTabs[i].className = moduleTabs[i].className.replace(" active", "");
  }
  document.getElementById(styleName).style.display = "block";
  evt.currentTarget.className += " active";
}

$(".moduleTab").click(function () {
  $(".moduleTabCol").removeClass("active");
  $(this).parent().addClass("active");
});

$(document).ready(function () {
  if (sessionStorage.getItem("mapsMain") != null) {
    mapsModule();
    $(".prefMap").toggleClass('active');
  }
  if (sessionStorage.getItem("alarmsMain") != null) {
    alarmsModule();
    $(".prefAlarms").toggleClass('active');
  }
  if (sessionStorage.getItem("BIDMain") != null) {
    BIDModule();
    $(".prefBiD").toggleClass('active');
  }
  if (sessionStorage.getItem("rackMain") != null) {
    rackModule();
    $(".prefRack").toggleClass('active');
  }
  if (sessionStorage.getItem("heatMapsMain") != null) {
    heatMapsModule();
    $(".prefCIHeatMap").toggleClass('active');
  }
  if (sessionStorage.getItem("metcoMain") != null) {
    metcoModule();
    $(".prefMetco").toggleClass('active');
  }
  if (sessionStorage.getItem("ecoSysMain") != null) {
    ECOModule();
    $(".prefECO").toggleClass('active');
  }
  if (sessionStorage.getItem("visualMain") != null) {
    visualModule();
    $(".prefVisual").toggleClass('active');
  }
});
// Maps module functions
function loadMapsModule() {
  $.ajax({
    url: "components/mapsModule.html",
    type: "GET",
    dataType: "html",
    cache: true,
    success: function (data) {
      $("#moduleStyle1").html(data);
    }
  });
}
function mapsModule() {
  $(".homeCardIconMap").addClass('active');
  $(".homeCardCloseMap").show();

  $('#mainHeader .moduleTabCol').removeClass('active');
  $(".moduleStyle").css('display', 'none');

  $("#moduleTab1").removeAttr("hidden");
  $("#moduleTab1").addClass('active');
  $("#moduleStyle1").css('display', 'block');

  loadMapsModule();
  sessionStorage.setItem("mapsMain", "mapsMain");
}
function mapsModuleToggle() {
  if ($(".prefMap").hasClass('active')) {
    $(".homeCardIconMap").removeClass('active');
    $(".homeCardCloseMap").hide();

    $("#moduleTab1").attr("hidden", "hidden");
    $("#moduleStyle1").css('display', 'none');

    $(".moduleTab").removeClass('active');

    // Reset div
    $('#moduleStyle1 ').html('');

    sessionStorage.removeItem("mapsMain");
  } else {
    mapsModule();
  }
}
$(".prefMap").click(function () {
  if ($(this).hasClass('active')) {
    $('.moduleTabCol:visible:first').children('.moduleTab').click();
    $('#mainHeader').find('.moduleTabCol:visible:first').addClass("active");
  }
});
$("#mapsModuleClose, .homeCardCloseMap").click(function () {
  mapsModuleToggle();
  $(".prefMap").removeClass("active");
  // Reset div
  $('#moduleStyle1').html('');

  if ($('#moduleTab1').hasClass('active')) {
    $('.moduleTabCol:visible:first').children('.moduleTab').trigger('click');
    $('#mainHeader').find('.moduleTabCol:visible:first').addClass("active");
  }
});
//// Alarms module functions
function loadAlarmsModule() {
  $.ajax({
    url: "components/alarmsModule.html",
    type: "GET",
    dataType: "html",
    cache: true,
    success: function (data) {
      $("#moduleStyle2").html(data);
    }
  });
}
function alarmsModule() {
  $(".homeCardIconAlarms").addClass('active');
  $(".homeCardCloseAlarms").show();

  $('#mainHeader .moduleTabCol').removeClass('active');
  $(".moduleStyle").css('display', 'none');

  $("#moduleTab2").removeAttr("hidden");
  $("#moduleTab2").addClass('active');
  $("#moduleStyle2").css('display', 'block');

  loadAlarmsModule();
  sessionStorage.setItem("alarmsMain", "alarmsMain");
}
function alarmsModuleToggle() {
  if ($(".prefAlarms").hasClass('active')) {
    $(".homeCardIconAlarms").removeClass('active');
    $(".homeCardCloseAlarms").hide();

    $("#moduleTab2").attr("hidden", "hidden");
    $("#moduleStyle2").css('display', 'none');

    $(".moduleTab").removeClass('active');

    // Reset div
    $('#moduleStyle2').html('');
    sessionStorage.removeItem("alarmsMain");
  } else {
    alarmsModule();
  }
}
$(".prefAlarms").click(function () {
  if ($(this).hasClass('active')) {
    $('.moduleTabCol:visible:first').children('.moduleTab').click();
    $('#mainHeader').find('.moduleTabCol:visible:first').addClass("active");
  }
});
$("#alarmsModuleClose, .homeCardCloseAlarms").click(function () {
  alarmsModuleToggle();
  $(".prefAlarms").removeClass("active");
  // Reset div
  $('#moduleStyle2').html('');

  if ($('#moduleTab2').hasClass('active')) {
    $('.moduleTabCol:visible:first').children('.moduleTab').trigger('click');
    $('#mainHeader').find('.moduleTabCol:visible:first').addClass("active");
  }
});
//// BI Dashboards module functions
function loadBIDashboardsModule() {
  $.ajax({
    url: "components/biDashboardsModule.html",
    type: "GET",
    dataType: "html",
    cache: true,
    success: function (data) {
      $("#moduleStyle3").html(data);
    }
  });
}
function BIDModule() {
  $(".homeCardIconBID").addClass('active');
  $(".homeCardCloseBID").show();

  $('#mainHeader .moduleTabCol').removeClass('active');
  $(".moduleStyle").css('display', 'none');

  $("#moduleTab3").removeAttr("hidden");
  $("#moduleTab3").addClass('active');
  $("#moduleStyle3").css('display', 'block');

  loadBIDashboardsModule();
  sessionStorage.setItem("BIDMain", "BIDMain");
}
function BIDModuleToggle() {
  if ($(".prefBiD").hasClass('active')) {
    $(".homeCardIconBID").removeClass('active');
    $(".homeCardCloseBID").hide();

    $("#moduleTab3").attr("hidden", "hidden");
    $("#moduleStyle3").css('display', 'none');

    $(".moduleTab").removeClass('active');

    // Reset div
    $('#moduleStyle3').html('');
    sessionStorage.removeItem("BIDMain");
  } else {
    BIDModule();
  }
}
$(".prefBiD").click(function () {
  if ($(this).hasClass('active')) {
    $('.moduleTabCol:visible:first').children('.moduleTab').click();
    $('#mainHeader').find('.moduleTabCol:visible:first').addClass("active");
  }
});
$("#BIDModuleClose, .homeCardCloseBID").click(function () {
  BIDModuleToggle();
  $(".prefBiD").removeClass("active");
  // Reset div
  $('#moduleStyle3').html('');

  if ($('#moduleTab3').hasClass('active')) {
    $('.moduleTabCol:visible:first').children('.moduleTab').trigger('click');
    $('#mainHeader').find('.moduleTabCol:visible:first').addClass("active");
  }
});
//// Rack Refill module functions
function loadRackRefillModule() {
  $.ajax({
    url: "components/rackRefillModule.html",
    type: "GET",
    dataType: "html",
    cache: true,
    success: function (data) {
      $("#moduleStyle6").html(data);
    }
  });
}
function rackModule() {
  $(".homeCardIconRack").addClass('active');
  $(".homeCardCloseRack").show();

  $('#mainHeader .moduleTabCol').removeClass('active');
  $(".moduleStyle").css('display', 'none');

  $("#moduleTab6").removeAttr("hidden");
  $("#moduleTab6").addClass('active');
  $("#moduleStyle6").css('display', 'block');

  loadRackRefillModule();
  sessionStorage.setItem("rackMain", "rackMain");
}
function rackModuleToggle() {
  if ($(".prefRack").hasClass('active')) {
    $(".homeCardIconRack").removeClass('active');
    $(".homeCardCloseRack").hide();

    $("#moduleTab6").attr("hidden", "hidden");
    $("#moduleStyle6").css('display', 'none');

    $(".moduleTab").removeClass('active');

    // Reset div
    $('#moduleStyle6').html('');
    sessionStorage.removeItem("rackMain");
  } else {
    rackModule();
  }
}
$(".prefRack").click(function () {
  if ($(this).hasClass('active')) {
    $('.moduleTabCol:visible:first').children('.moduleTab').click();
    $('#mainHeader').find('.moduleTabCol:visible:first').addClass("active");
  }
});
$("#rackModuleClose, .homeCardCloseRack").click(function () {
  rackModuleToggle();
  $(".prefRack").removeClass("active");
  // Reset div
  $('#moduleStyle6').html('');

  if ($('#moduleTab6').hasClass('active')) {
    $('.moduleTabCol:visible:first').children('.moduleTab').trigger('click');
    $('#mainHeader').find('.moduleTabCol:visible:first').addClass("active");
  }
});
//// Heat mapping module functions
function loadHeatMapsModule() {
  $.ajax({
    url: "components/heatMappingModule.html",
    type: "GET",
    dataType: "html",
    cache: true,
    success: function (data) {
      $("#moduleStyle7").html(data);
    }
  });
}
function heatMapsModule() {
  $(".homeCardIconCIHeatMap").addClass('active');
  $(".homeCardCloseCIHeatMap").show();

  $('#mainHeader .moduleTabCol').removeClass('active');
  $(".moduleStyle").css('display', 'none');

  $("#moduleTab7").removeAttr("hidden");
  $("#moduleTab7").addClass('active');
  $("#moduleStyle7").css('display', 'block');

  loadHeatMapsModule();
  sessionStorage.setItem("heatMapsMain", "heatMapsMain");
}
function heatMapsModuleToggle() {
  if ($(".prefCIHeatMap").hasClass('active')) {
    $(".homeCardIconCIHeatMap").removeClass('active');
    $(".homeCardCloseCIHeatMap").hide();

    $("#moduleTab7").attr("hidden", "hidden");
    $("#moduleStyle7").css('display', 'none');

    $(".moduleTab").removeClass('active');

    // Reset div
    $('#moduleStyle7').html('');
    sessionStorage.removeItem("heatMapsMain");
  } else {
    heatMapsModule();
  }
}
$(".prefCIHeatMap").click(function () {
  if ($(this).hasClass('active')) {
    $('.moduleTabCol:visible:first').children('.moduleTab').click();
    $('#mainHeader').find('.moduleTabCol:visible:first').addClass("active");
  }
});
$("#heatMapsModuleClose, .homeCardCloseCIHeatMap").click(function () {
  heatMapsModuleToggle();
  $(".prefCIHeatMap").removeClass("active");
  // Reset div
  $('#moduleStyle7').html('');

  if ($('#moduleTab7').hasClass('active')) {
    $('.moduleTabCol:visible:first').children('.moduleTab').trigger('click');
    $('#mainHeader').find('.moduleTabCol:visible:first').addClass("active");
  }
});
//// Visualization module functions
function loadVisualModule() {
  $.ajax({
    url: "components/visualizationModule.html",
    type: "GET",
    dataType: "html",
    cache: true,
    success: function (data) {
      $("#moduleStyle14").html(data);
    }
  });
}
function visualModule() {
  $(".homeCardIconVisual").addClass('active');
  $(".homeCardCloseVisual").show();

  $('#mainHeader .moduleTabCol').removeClass('active');
  $(".moduleStyle").css('display', 'none');

  $("#moduleTab14").removeAttr("hidden");
  $("#moduleTab14").addClass('active');
  $("#moduleStyle14").css('display', 'block');

  loadVisualModule();
  sessionStorage.setItem("visualMain", "visualMain");
}
function visualModuleToggle() {
  if ($(".prefVisual").hasClass('active')) {
    $(".homeCardIconVisual").removeClass('active');
    $(".homeCardCloseVisual").hide();

    $("#moduleTab14").attr("hidden", "hidden");
    $("#moduleStyle14").css('display', 'none');

    $(".moduleTab").removeClass('active');

    // Reset div
    $('#moduleStyle14').html('');
    sessionStorage.removeItem("visualMain");
  } else {
    visualModule();
  }
}
$(".prefVisual").click(function () {
  if ($(this).hasClass('active')) {
    $('.moduleTabCol:visible:first').children('.moduleTab').click();
    $('#mainHeader').find('.moduleTabCol:visible:first').addClass("active");
  }
});
$("#visualModuleClose, .homeCardCloseVisual").click(function () {
  visualModuleToggle();
  $(".prefVisual").removeClass("active");
  // Reset div
  $('#moduleStyle14').html('');

  if ($('#moduleTab14').hasClass('active')) {
    $('.moduleTabCol:visible:first').children('.moduleTab').trigger('click');
    $('#mainHeader').find('.moduleTabCol:visible:first').addClass("active");
  }
});
//// Metco dashboards module functions
function loadMetcoModule() {
  $.ajax({
    url: "components/metcoModule.html",
    type: "GET",
    dataType: "html",
    cache: true,
    success: function (data) {
      $("#moduleStyle9").html(data);
    }
  });
}
function metcoModule() {
  $(".homeCardIconMetco").addClass('active');
  $(".homeCardCloseMetco").show();

  $('#mainHeader .moduleTabCol').removeClass('active');
  $(".moduleStyle").css('display', 'none');

  $("#moduleTab9").removeAttr("hidden");
  $("#moduleTab9").addClass('active');
  $("#moduleStyle9").css('display', 'block');

  loadMetcoModule();
  sessionStorage.setItem("metcoMain", "metcoMain");
}
function metcoModuleToggle() {
  if ($(".prefMetco").hasClass('active')) {
    $(".homeCardIconMetco").removeClass('active');
    $(".homeCardCloseMetco").hide();

    $("#moduleTab9").attr("hidden", "hidden");
    $("#moduleStyle9").css('display', 'none');

    $(".moduleTab").removeClass('active');

    // Reset div
    $('#moduleStyle9').html('');
    $('#metcoSectionContent').html('');
    $(".metcoDashboard").attr("hidden", "hidden");
    sessionStorage.removeItem("metcoMain");
  } else {
    metcoModule();
  }
}
$(".prefMetco").click(function () {
  if ($(this).hasClass('active')) {
    $('.moduleTabCol:visible:first').children('.moduleTab').click();
    $('#mainHeader').find('.moduleTabCol:visible:first').addClass("active");
  }
});

$("#metcoModuleClose, .homeCardCloseMetco").click(function () {
  metcoModuleToggle();
  $(".prefMetco").removeClass("active");
  // Reset div
  $('#moduleStyle9').html('');
  $('#metcoSectionContent').html('');
  $(".metcoDashboard").attr("hidden", "hidden");

  if ($('#moduleTab9').hasClass('active')) {
    $('.moduleTabCol:visible:first').children('.moduleTab').trigger('click');
    $('#mainHeader').find('.moduleTabCol:visible:first').addClass("active");
  }
});
//// Fan Ecosystem module functions
function loadEcoModule() {
  $.ajax({
    url: "components/ecoSysModule.html",
    type: "GET",
    dataType: "html",
    cache: true,
    success: function (data) {
      $("#moduleStyle10").html(data);
    }
  });
}
function ECOModule() {
  $(".homeCardIconECO").addClass('active');
  $(".homeCardCloseECO").show();

  $('#mainHeader .moduleTabCol').removeClass('active');
  $(".moduleStyle").css('display', 'none');

  $("#moduleTab10").removeAttr("hidden");
  $("#moduleTab10").addClass('active');
  $("#moduleStyle10").css('display', 'block');

  loadEcoModule();
  sessionStorage.setItem("ecoSysMain", "ecoSysMain");
}
function ECOModuleToggle() {
  if ($(".prefECO").hasClass('active')) {
    $(".homeCardIconECO").removeClass('active');
    $(".homeCardCloseECO").hide();

    $("#moduleTab10").attr("hidden", "hidden");
    $("#moduleStyle10").css('display', 'none');

    $(".moduleTab").removeClass('active');

    // Reset div
    $('#moduleStyle10').html('');
    sessionStorage.removeItem("ecoSysMain");
  } else {
    ECOModule();
  }
}
$(".prefECO").click(function () {
  if ($(this).hasClass('active')) {
    $('.moduleTabCol:visible:first').children('.moduleTab').click();
    $('#mainHeader').find('.moduleTabCol:visible:first').addClass("active");
  }
});
$("#ECOModuleClose, .homeCardCloseECO").click(function () {
  ECOModuleToggle();
  $(".prefECO").removeClass("active");
  // Reset div
  $('#moduleStyle10').html('');

  if ($('#moduleTab10').hasClass('active')) {
    $('.moduleTabCol:visible:first').children('.moduleTab').trigger('click');
    $('#mainHeader').find('.moduleTabCol:visible:first').addClass("active");
  }
});
// First opend module display
$(document).ready(function () {
  $('.moduleTabCol:visible:first').children('.moduleTab').click();
  $('#mainHeader').find('.moduleTabCol:visible:first').addClass("active");
});