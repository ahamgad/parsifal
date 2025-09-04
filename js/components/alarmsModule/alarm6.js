// Alarm6 (Unattended object) details tabs
function openAlarm6DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm6DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm6DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm6DetStyle1 .alarmEventsDocument").click(function () {
	$(this).parent('.alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmEventsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarm6DetStyle1 .alarmModEventVideoControls').css('display', 'flex');
	$('#alarm6DetStyle1 .alarmModEventVideo').addClass('unattObjectEvent1');
	$('alarmModEventVideoControls .alarmModEventVideoControls').children('.alarmsPlayPlayer').show();
});

$("#alarm6DetStyle1 .alarmsClosePlayer").click(function () {
	$('#alarm6DetStyle1 .alarmModEventVideoControls').css('display', 'none');
	$('#alarm6DetStyle1 .alarmEventsDocument').removeClass("active");
	$('#alarm6DetStyle1 .alarmModEventVideo').removeClass('unattObjectEvent1');
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
$("#alarm6DetStyle1 .alarmsPlayPlayer").click(function () {
	var lightBoxVideo = document.getElementById("unattendedObjectEvent1");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#unattendedObjectEvent1").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});

// Alarm SOP
$("#alarm6DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm6DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm6DetStyle3 .alarmValiditionOptions, #alarm6DetStyle3 .alarmHandle").val('0');
		$('#alarm6DetStyle3 .alarmValiditionOptions, #alarm6DetStyle3 .alarmHandle').trigger('change');
		$('#alarm6DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm6DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm6DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm6DetStyle3 .alarmHandle").val('0');
		$('#alarm6DetStyle3 .alarmHandle').trigger('change');
		$('#alarm6DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm6DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm6DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm6DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm6DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm6DetStyle4 .alarmEventsDocument").click(function () {
	$(this).parent('.alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmEventsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarm6DetStyle4 .alarmModEventVideoControls').css('display', 'flex');
	$('#alarm6DetStyle4 .alarmModEventVideo').addClass('unattObjectEvent1');
	$('alarmModEventVideoControls .alarmModEventVideoControls').children('.alarmsPlayPlayer').show();
});

$("#alarm6DetStyle4 .alarmsPlayPlayer").click(function () {
	var lightBoxVideo = document.getElementById("unattendedObjectEvent1");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#unattendedObjectEvent1").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});
$("#alarm6DetStyle4 .alarmsClosePlayer").click(function () {
	$('#alarm6DetStyle4 .alarmModEventVideoControls').css('display', 'none');
	$('#alarm6DetStyle4 .alarmEventsDocument').removeClass("active");
	$('#alarm6DetStyle4 .alarmModEventVideo').removeClass('unattObjectEvent1');
});

// Site map video mapper
$("#alarm6TP").click(function () {
	$('#alarm6Mapper').css('display', 'flex');
});
$("#alarm6CloseMapper").click(function () {
	$('#alarm6Mapper').css('display', 'none');
});