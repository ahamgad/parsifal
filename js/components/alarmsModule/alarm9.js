// Alarm9 (Crossing line) details tabs
function openAlarm9DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm9DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm9DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm9DetStyle1 .alarmEventsDocument").click(function () {
	$(this).parent('.alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmEventsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarm9DetStyle1 .alarmModEventVideoControls').css('display', 'flex');
	$('#alarm9DetStyle1 .alarmModEventVideo').addClass('crossLineEvent1');
	$('alarmModEventVideoControls .alarmModEventVideoControls').children('.alarmsPlayPlayer').show();
});

$("#alarm9DetStyle1 .alarmsClosePlayer").click(function () {
	$('#alarm9DetStyle1 .alarmModEventVideoControls').css('display', 'none');
	$('#alarm9DetStyle1 .alarmEventsDocument').removeClass("active");
	$('#alarm9DetStyle1 .alarmModEventVideo').removeClass('crossLineEvent1');
});

// Alarm events video
function lightbox_open(lightBoxVideo) {
	//var lightBoxVideo = document.getElementById("VideoId");
	window.scrollTo(0, 0);
	document.getElementById('alarmEventVideoFadeLight').style.display = 'block';
	document.getElementById('alarmEventVideoFade').style.display = 'block';
	lightBoxVideo.play();
}
function lightbox_close() {
	var lightBoxVideo = document.getElementById("VideoId");
	document.getElementById('alarmEventVideoFadeLight').style.display = 'none';
	document.getElementById('alarmEventVideoFade').style.display = 'none';
	lightBoxVideo.pause();
}
$("#alarm9DetStyle1 .alarmsPlayPlayer").click(function () {
	var lightBoxVideo = document.getElementById("crossLineEvent1");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#crossLineEvent1").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});

// Alarm SOP
$("#alarm9DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm9DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm9DetStyle3 .alarmValiditionOptions, #alarm9DetStyle3 .alarmHandle").val('0');
		$('#alarm9DetStyle3 .alarmValiditionOptions, #alarm9DetStyle3 .alarmHandle').trigger('change');
		$('#alarm9DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm9DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm9DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm9DetStyle3 .alarmHandle").val('0');
		$('#alarm9DetStyle3 .alarmHandle').trigger('change');
		$('#alarm9DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm9DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm9DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm9DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm9DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm9DetStyle4 .alarmEventsDocument").click(function () {
	$(this).parent('.alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmEventsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarm9DetStyle4 .alarmModEventVideoControls').css('display', 'flex');
	$('#alarm9DetStyle4 .alarmModEventVideo').addClass('crossLineEvent1');
	$('alarmModEventVideoControls .alarmModEventVideoControls').children('.alarmsPlayPlayer').show();
});

$("#alarm9DetStyle4 .alarmsPlayPlayer").click(function () {
	var lightBoxVideo = document.getElementById("crossLineEvent1");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#crossLineEvent1").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});
$("#alarm9DetStyle4 .alarmsClosePlayer").click(function () {
	$('#alarm9DetStyle4 .alarmModEventVideoControls').css('display', 'none');
	$('#alarm9DetStyle4 .alarmEventsDocument').removeClass("active");
	$('#alarm9DetStyle4 .alarmModEventVideo').removeClass('crossLineEvent1');
});

// Site map video mapper
$("#alarm9TP").click(function () {
	$('#alarm9Mapper').css('display', 'flex');
});
$("#alarm9CloseMapper").click(function () {
	$('#alarm9Mapper').css('display', 'none');
});