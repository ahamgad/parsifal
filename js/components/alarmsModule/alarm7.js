// Alarm7 (Grafitti) details tabs
function openAlarm7DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm7DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm7DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm7DetStyle1 .alarmEventsDocument").click(function () {
	$(this).parent('.alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmEventsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarm7DetStyle1 .alarmModEventVideoControls').css('display', 'flex');
	$('#alarm7DetStyle1 .alarmModEventVideo').addClass('grafittiEvent1');
	$('alarmModEventVideoControls .alarmModEventVideoControls').children('.alarmsPlayPlayer').show();
});

$("#alarm7DetStyle1 .alarmsClosePlayer").click(function () {
	$('#alarm7DetStyle1 .alarmModEventVideoControls').css('display', 'none');
	$('#alarm7DetStyle1 .alarmEventsDocument').removeClass("active");
	$('#alarm7DetStyle1 .alarmModEventVideo').removeClass('grafittiEvent1');
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
$("#alarm7DetStyle1 .alarmsPlayPlayer").click(function () {
	var lightBoxVideo = document.getElementById("grafittiEvent1");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#grafittiEvent1").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});

// Alarm SOP
$("#alarm7DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm7DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm7DetStyle3 .alarmValiditionOptions, #alarm7DetStyle3 .alarmHandle").val('0');
		$('#alarm7DetStyle3 .alarmValiditionOptions, #alarm7DetStyle3 .alarmHandle').trigger('change');
		$('#alarm7DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm7DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm7DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm7DetStyle3 .alarmHandle").val('0');
		$('#alarm7DetStyle3 .alarmHandle').trigger('change');
		$('#alarm7DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm7DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm7DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm7DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm7DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm7DetStyle4 .alarmEventsDocument").click(function () {
	$(this).parent('.alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmEventsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarm7DetStyle4 .alarmModEventVideoControls').css('display', 'flex');
	$('#alarm7DetStyle4 .alarmModEventVideo').addClass('grafittiEvent1');
	$('alarmModEventVideoControls .alarmModEventVideoControls').children('.alarmsPlayPlayer').show();
});

$("#alarm7DetStyle4 .alarmsPlayPlayer").click(function () {
	var lightBoxVideo = document.getElementById("grafittiEvent1");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#grafittiEvent1").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});
$("#alarm7DetStyle4 .alarmsClosePlayer").click(function () {
	$('#alarm7DetStyle4 .alarmModEventVideoControls').css('display', 'none');
	$('#alarm7DetStyle4 .alarmEventsDocument').removeClass("active");
	$('#alarm7DetStyle4 .alarmModEventVideo').removeClass('grafittiEvent1');
});

// Site map video mapper
$("#alarm7TP").click(function () {
	$('#alarm7Mapper').css('display', 'flex');
});
$("#alarm7CloseMapper").click(function () {
	$('#alarm7Mapper').css('display', 'none');
});