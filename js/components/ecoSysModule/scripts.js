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
$("#EcoSysFullScreenBtn").click(function () {
  if ($(this).hasClass('active')) {
    $(this).toggleClass('active');
    $('#EcoSysContainer').toggleClass('fullScreen');
    closeFullscreen();
  } else {
    $(this).toggleClass('active');
    $('#EcoSysContainer').toggleClass('fullScreen');
    openFullscreen();
  }
});