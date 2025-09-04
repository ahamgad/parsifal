// Last close module Go homepage
$(".moduleTabClose, .customPreferencesIcons, .homeCloseModule").click(function () {
  if ($('#mainHeader .moduleTabCol:hidden').length === $('#mainHeader .moduleTabCol').length) {
    sessionStorage.clear();
    window.location = 'home.html';
  }
});