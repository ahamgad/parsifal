// Alarm47 (Gun Detected) details tabs
function openAlarm47DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm47DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm47DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm47DetStyle1 .gunDetected").click(function () {
	$(this).parent('.alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmEventsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarm47DetStyle1 .alarmModEventVideoControls').css('display', 'flex');
	$('#alarm47DetStyle1 .alarmModEventVideo').removeClass('armedEvent3');
	$('#alarm47DetStyle1 .alarmModEventVideo').addClass('gunDetected');
	$('alarmModEventVideoControls .alarmModEventVideoControls').children('.alarmsPlayPlayer').show();

	$('#alarm47DetStyle1 .alarmsPlayPlayer').hide();
	$('#alarm47DetStyle1 .gunDetectedPlay').show();
});

$("#alarm47DetStyle1 .armedEvent3").click(function () {
	$(this).parent('.alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmEventsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarm47DetStyle1 .alarmModEventVideoControls').css('display', 'flex');
	$('#alarm47DetStyle1 .alarmModEventVideo').removeClass('gunDetected');
	$('#alarm47DetStyle1 .alarmModEventVideo').addClass('armedEvent3');
	$('alarmModEventVideoControls .alarmModEventVideoControls').children('.alarmsPlayPlayer').show();

	$('#alarm47DetStyle1 .alarmsPlayPlayer').show();
	$('#alarm47DetStyle1 .gunDetectedPlay').hide();
});

$("#alarm47DetStyle1 .alarmsClosePlayer").click(function () {
	$('#alarm47DetStyle1 .alarmModEventVideoControls').css('display', 'none');
	$('#alarm47DetStyle1 .alarmEventsDocument').removeClass("active");
	$('#alarm47DetStyle1 .alarmModEventVideo').removeClass('gunDetected');
	$('#alarm47DetStyle1 .alarmModEventVideo').removeClass('armedEvent3');
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
$("#alarm47DetStyle1 .gunDetectedPlay").click(function () {
	var lightBoxVideo = document.getElementById("Alarm47Event1");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#Alarm47Event1").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});

// Alarm SOP
$("#alarm47DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm47DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm47DetStyle3 .alarmValiditionOptions, #alarm47DetStyle3 .alarmHandle").val('0');
		$('#alarm47DetStyle3 .alarmValiditionOptions, #alarm47DetStyle3 .alarmHandle').trigger('change');
		$('#alarm47DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm47DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm47DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm47DetStyle3 .alarmHandle").val('0');
		$('#alarm47DetStyle3 .alarmHandle').trigger('change');
		$('#alarm47DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm47DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm47DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm47DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm47DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm47DetStyle4 .gunDetected").click(function () {
	$(this).parent('.alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmEventsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarm47DetStyle4 .alarmModEventVideoControls').css('display', 'flex');
	$('#alarm47DetStyle4 .alarmModEventVideo').removeClass('armedEvent3');
	$('#alarm47DetStyle4 .alarmModEventVideo').addClass('gunDetected');
	$('#alarmModEventVideoControls .alarmModEventVideoControls').children('.alarmsPlayPlayer').show();

	$('#alarm47DetStyle4 .alarmsPlayPlayer').hide();
	$('#alarm47DetStyle4 .gunDetectedPlay').show();
});

$("#alarm47DetStyle4 .armedEvent3").click(function () {
	$(this).parent('.alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmEventsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarm47DetStyle4 .alarmModEventVideoControls').css('display', 'flex');
	$('#alarm47DetStyle4 .alarmModEventVideo').removeClass('gunDetected');
	$('#alarm47DetStyle4 .alarmModEventVideo').addClass('armedEvent3');
	$('#alarmModEventVideoControls .alarmModEventVideoControls').children('.alarmsPlayPlayer').show();

	$('#alarm47DetStyle4 .alarmsPlayPlayer').show();
	$('#alarm47DetStyle4 .gunDetectedPlay').hide();
});

$("#alarm47DetStyle4 .gunDetectedPlay").click(function () {
	var lightBoxVideo = document.getElementById("Alarm47Event1");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#Alarm47Event1").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});
$("#alarm47DetStyle4 .alarmsClosePlayer").click(function () {
	$('#alarm47DetStyle4 .alarmModEventVideoControls').css('display', 'none');
	$('#alarm47DetStyle4 .alarmEventsDocument').removeClass("active");
	$('#alarm47DetStyle4 .alarmModEventVideo').removeClass('gunDetected');
	$('#alarm47DetStyle4 .alarmModEventVideo').removeClass('armedEvent3');
});

// Site map video mapper
$("#alarm47TP").click(function () {
	$('#alarm47Mapper').css('display', 'flex');
});
$("#alarm47CloseMapper").click(function () {
	$('#alarm47Mapper').css('display', 'none');
});