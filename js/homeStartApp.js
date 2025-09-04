// Homepage Start App header
$(document).ready(function () {
	if (sessionStorage.getItem("startMain") != null) {
		homepageStartApp();
	}
});

function homepageStartApp() {
	if ($('#carouselPreference').find('.customPreferencesIcons').is('.active')) {
		$('.homeCardsContainer:first').addClass('homeStart');
		$('#homeTopHeader').addClass('start');
		$('#homeHeader').slideDown(200);
		$('#goToMain').fadeIn(800).css('display', 'flex');
	} else if ($('#carouselPreference').find('.customPreferencesIcons').not('.active').length === $('#carouselPreference .customPreferencesIcons').length) {
		$('#homeHeader').slideUp(1);
		$('#goToMain').fadeOut(1);
		$('#homeTopHeader').removeClass('start');
		$('.homeCardsContainer:first').removeClass('homeStart');
	}
	sessionStorage.setItem("startMain", "startMain");
}

// Site top header preferences toggles + Home cards
$(document).ready(function () {
	$('.customPreferencesIcons').click(function () {
		$(this).toggleClass('active');

		homepageStartApp();
	});
});