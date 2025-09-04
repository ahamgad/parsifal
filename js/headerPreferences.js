// Toggle custom preferences
$('#customPreferencesBtn').click(function () {
  $(this).toggleClass("clicked");
  $("#customPreferences").toggle();
});

// Site top header preferences
$('#PrefCustomTheme').click(function () {
  $(this).toggleClass("activecoll");
  $("#customTheme").toggle();
});

$('#PrefAddNewTab').click(function () {
  $(this).toggleClass("activecoll");
  $("#carouselPreference").toggle();
});