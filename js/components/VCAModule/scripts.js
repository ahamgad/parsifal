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