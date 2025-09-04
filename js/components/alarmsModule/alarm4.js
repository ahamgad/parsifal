// Alarm4 (Fire) details tabs
function openAlarm4DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm4DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm4DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm4DetStyle1 .alarmEventsDocument").click(function () {
	$(this).parent('.alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmEventsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarm4DetStyle1 .alarmModEventVideoControls').css('display', 'flex');
	$('#alarm4DetStyle1 .alarmModEventVideo').addClass('fireEvent1');
	$('alarmModEventVideoControls .alarmModEventVideoControls').children('.alarmsPlayPlayer').show();
});

$("#alarm4DetStyle1 .alarmsClosePlayer").click(function () {
	$('#alarm4DetStyle1 .alarmModEventVideoControls').css('display', 'none');
	$('#alarm4DetStyle1 .alarmEventsDocument').removeClass("active");
	$('#alarm4DetStyle1 .alarmModEventVideo').removeClass('fireEvent1');
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
$("#alarm4DetStyle1 .alarmsPlayPlayer").click(function () {
	var lightBoxVideo = document.getElementById("fireAlarmEvent1");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#fireAlarmEvent1").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});

// Alarm SOP
$("#alarm4DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm4DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm4DetStyle3 .alarmValiditionOptions, #alarm4DetStyle3 .alarmHandle").val('0');
		$('#alarm4DetStyle3 .alarmValiditionOptions, #alarm4DetStyle3 .alarmHandle').trigger('change');
		$('#alarm4DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm4DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm4DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm4DetStyle3 .alarmHandle").val('0');
		$('#alarm4DetStyle3 .alarmHandle').trigger('change');
		$('#alarm4DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm4DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm4DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm4DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm4DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm4DetStyle4 .alarmEventsDocument").click(function () {
	$(this).parent('.alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmEventsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarm4DetStyle4 .alarmModEventVideoControls').css('display', 'flex');
	$('#alarm4DetStyle4 .alarmModEventVideo').addClass('fireEvent1');
	$('alarmModEventVideoControls .alarmModEventVideoControls').children('.alarmsPlayPlayer').show();
});

$("#alarm4DetStyle4 .alarmsPlayPlayer").click(function () {
	var lightBoxVideo = document.getElementById("fireAlarmEvent1");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#fireAlarmEvent1").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});
$("#alarm4DetStyle4 .alarmsClosePlayer").click(function () {
	$('#alarm4DetStyle4 .alarmModEventVideoControls').css('display', 'none');
	$('#alarm4DetStyle4 .alarmEventsDocument').removeClass("active");
	$('#alarm4DetStyle4 .alarmModEventVideo').removeClass('fireEvent1');
});

// Site map video mapper
$("#alarm4TP").click(function () {
	$('#alarm4Mapper').css('display', 'flex');
});
$("#alarm4CloseMapper").click(function () {
	$('#alarm4Mapper').css('display', 'none');
});