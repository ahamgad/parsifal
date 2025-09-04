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

$("#alarmsToggleSideNavFilter").click(function () {
  $(this).parent('.sideNavHead').toggleClass("filterOpened");
});

// Side nav general
$("#alarmSideNavFilterBtn .sideNavFilterBtn").click(function () {
  $(this).toggleClass("active");
  if ($(this).hasClass("active")) {
    $("#footerImgLoading").show();
    $("#footerMessage").html("Search filter has been successfully applied");
    footerMessage();
  }
});

// Toggle container fullscreen button
$("#alarmsFullScreenBtn").click(function () {
  if ($(this).hasClass('active')) {
    $(this).toggleClass('active');
    $('#alarmsModuleContainer').toggleClass('fullScreen');
    closeFullscreen();
  } else {
    $(this).toggleClass('active');
    $('#alarmsModuleContainer').toggleClass('fullScreen');
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