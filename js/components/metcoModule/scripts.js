// Disable dragging and save images
$('img').bind('contextmenu', function (e) {
  return false;
});
$('img').on('dragstart', function (event) {
  event.preventDefault();
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

// Toggle container fullscreen button
$("#metcoFullScreenBtn").click(function () {
  if ($(this).hasClass('active')) {
    $(this).toggleClass('active');
    $('#metcoDashboardsContainer').toggleClass('fullScreen');
    closeFullscreen();
  } else {
    $(this).toggleClass('active');
    $('#metcoDashboardsContainer').toggleClass('fullScreen');
    openFullscreen();
  }
});

// Use cases paths
$(document).ready(function () {
  if (sessionStorage.getItem("useCase1") != null) {
    $('.useCase1').attr('style', 'display:block');
  }
  if (sessionStorage.getItem("useCase2") != null) {
    $('.useCase2').attr('style', 'display:block');
  }
  if (sessionStorage.getItem("useCase3") != null) {
    $('.useCase3').attr('style', 'display:block');
  }
  if (sessionStorage.getItem("useCase4") != null) {
    $('.useCase4').attr('style', 'display:block');
  }
  if (sessionStorage.getItem("useCase5") != null) {
    $('.useCase5').attr('style', 'display:block');
  }
});

$(document).ready(function () {
  // Toggle side nav
  $("#openMetcoSideNav").click(function () {
    $("#moduleStyle9 .sideIconBtn").toggleClass("inActive");
    $(this).removeClass("inActive");
    $(this).toggleClass("closeNav");
    $("#metcoSideNav").toggle();
  });
  // Toggle pin/unpin
  $("#pinMetcoSideNav").click(function () {
    $(this).hide();
    $("#unpinMetcoSideNav").show();
    $('#metcoSideNav').addClass('pinned');
  });
  $("#unpinMetcoSideNav").click(function () {
    $(this).hide();
    $("#pinMetcoSideNav").show();
    $('#metcoSideNav').removeClass('pinned');
  });
});

// Close open menus
var $metcoSideNav = $('#metcoSideNav, #moduleStyle9 .sideIconBtn');
$(document).mouseup(function (e) {
  if (!($metcoSideNav.is(e.target)) &&
    ($metcoSideNav.has(e.target).length === 0) &&
    !($('#metcoSideNav').hasClass('pinned'))) {
    $('#metcoSideNav').css("display", "none");
    $('#moduleStyle9 .sideIconBtn').removeClass('inActive');
    $('#moduleStyle9 .sideIconBtn').removeClass('closeNav');
  }
});

// Dashboard messages
$("#Dashboard1").click(function () {
  $("#footerImgLoading").show();
  $("#footerMessage").html("Metco dashboard has been successfully loaded");
  footerMessage();
});
$("#Dashboard2").click(function () {
  $("#footerImgLoading").show();
  $("#footerMessage").html("Metco dashboard has been successfully loaded");
  footerMessage();
});
$("#Dashboard3").click(function () {
  $("#footerImgLoading").show();
  $("#footerMessage").html("Metco dashboard has been successfully loaded");
  footerMessage();
});
$("#Dashboard4").click(function () {
  $("#footerImgLoading").show();
  $("#footerMessage").html("Metco dashboard has been successfully loaded");
  footerMessage();
});
$("#Dashboard5").click(function () {
  $("#footerImgLoading").show();
  $("#footerMessage").html("Metco dashboard has been successfully loaded");
  footerMessage();
});
$("#Dashboard6").click(function () {
  $("#footerImgLoading").show();
  $("#footerMessage").html("Metco dashboard has been successfully loaded");
  footerMessage();
});
$("#Dashboard7").click(function () {
  $("#footerImgLoading").show();
  $("#footerMessage").html("Metco dashboard has been successfully loaded");
  footerMessage();
});
$("#Dashboard8").click(function () {
  $("#footerImgLoading").show();
  $("#footerMessage").html("Metco dashboard has been successfully loaded");
  footerMessage();
});
$("#Dashboard9").click(function () {
  $("#footerImgLoading").show();
  $("#footerMessage").html("Metco dashboard has been successfully loaded");
  footerMessage();
});
$("#Dashboard10").click(function () {
  $("#footerImgLoading").show();
  $("#footerMessage").html("Metco dashboard has been successfully loaded");
  footerMessage();
});
$("#Dashboard11").click(function () {
  $("#footerImgLoading").show();
  $("#footerMessage").html("Metco dashboard has been successfully loaded");
  footerMessage();
});
$("#Dashboard12").click(function () {
  $("#footerImgLoading").show();
  $("#footerMessage").html("Metco dashboard has been successfully loaded");
  footerMessage();
});
$("#Dashboard13").click(function () {
  $("#footerImgLoading").show();
  $("#footerMessage").html("Metco dashboard has been successfully loaded");
  footerMessage();
});
$("#Dashboard14").click(function () {
  $("#footerImgLoading").show();
  $("#footerMessage").html("Metco dashboard has been successfully loaded");
  footerMessage();
});
$("#Dashboard15").click(function () {
  $("#footerImgLoading").show();
  $("#footerMessage").html("Metco dashboard has been successfully loaded");
  footerMessage();
});
$("#Dashboard16").click(function () {
  $("#footerImgLoading").show();
  $("#footerMessage").html("Metco dashboard has been successfully loaded");
  footerMessage();
});