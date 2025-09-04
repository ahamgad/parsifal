// Alarm55 (Fight detection) details tabs
function openAlarm55DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm55DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm55DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm1 events
$("#alarm55Event1").click(function () {
	$(this).parent('#alarm55DetStyle1 .alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmEventsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarm55DisplayControls').css('display', 'flex');
	$('#alarm55ModEventsDisplay').addClass('alarm55Event1');
	
	$('#alarm55DisplayControls').addClass('alarm55Event1');

	// $('#alarm55DisplayControls').children('.alarmsPlayPlayer.alarms').hide();
	$('#alarm55DisplayControls').children('.playAlarm55Event1').show();
});


$("#closeDocumentAlarm55").click(function () {
	$('#alarm55DisplayControls').css('display', 'none');
	$('#alarm55ModEventsDisplay').removeClass('alarm55Event1');
	$('#alarm55DetStyle1 .alarmEventsDocument').removeClass("active");
	$('#alarm55DisplayControls').removeClass('alarm55Event1');
});

// Alarm1 events videos
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

$(".playAlarm55Event1").click(function () {
	var lightBoxVideo = document.getElementById("Alarm52Event1");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#Alarm55Event1").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});

// Alarm55 SOP
$("#fightAlarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#fightValiditionOptions').removeAttr('disabled');
	} else {
		$("#fightValiditionOptions, #fightHostagesOptions").val('0');
		$('#fightValiditionOptions, #fightHostagesOptions').trigger('change');
		$('#fightValiditionOptions').attr('disabled', 'disabled');
	}
});

$('#fightValiditionOptions').change(function () {
	if ($('#fightValiditionOptions').val() == '1') {
		$('#fightValiditionOptionYes').css('display', 'flex');
	} else {
		$('#fightValiditionOptionYes').css('display', 'none');
	}
});

$('#fightValiditionOptions').change(function () {
	if ($('#fightValiditionOptions').val() == '2') {
    $("#fightHostagesOptions").val('0');
		$('#fightHostagesOptions').trigger('change');
		$('#fightHostagesOptions').attr('disabled', 'disabled');
		$('#fightValiditionOptionYes').css('display', 'none');
		$('#fightHostagesOptionYes').css('display', 'none');
		$('#fightHostagesOptionNo').css('display', 'none');
	}
});

$("#fightHostagesCheck").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#fightHostagesOptions').removeAttr('disabled');
	} else {
		$("#fightHostagesOptions").val('0');
		$('#fightHostagesOptions').trigger('change');
		$('#fightHostagesOptions').attr('disabled', 'disabled');
	}
});
$("#fightHostagesOptionYesCallP").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#fightYesCallP').removeAttr('disabled');
	} else {
		$("#fightYesCallP").val('0');
		$('#fightYesCallP').trigger('change');
		$('#fightYesCallP').attr('disabled', 'disabled');
	}
});

$('#fightHostagesOptions').change(function () {
	if ($('#fightHostagesOptions').val() == '1') {
		$('#fightHostagesOptionYes').css('display', 'flex');
	} else {
		$('#fightHostagesOptionYes').css('display', 'none');
	}
});
$('#fightHostagesOptions').change(function () {
	if ($('#fightHostagesOptions').val() == '2') {
		$('#fightHostagesOptionNo').css('display', 'flex');
	} else {
		$('#fightHostagesOptionNo').css('display', 'none');
	}
});

$("#fightHostagesOptionNoCallP").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#fightNoCallP').removeAttr('disabled');
	} else {
		$("#fightNoCallP").val('0');
		$('#fightNoCallP').trigger('change');
		$('#fightNoCallP').attr('disabled', 'disabled');
	}
});

// Alarm55 RTPs
$("#alarm55RTP1").click(function () {
	$(this).parent('.alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmRTPsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarm55RTPDisplayControls').css('display', 'flex');
	$('#alarm55RTPsDisplay').addClass('alarm55Event1');
	$('#alarm55RTPsDisplay').addClass('alarm55Event1');

	$('#alarm55RTPDisplayControls').children('.playAlarm55Event1').show();
});


$("#closeAlarm55RTP1").click(function () {
	$('#alarm55RTPDisplayControls').css('display', 'none');
	$('.alarmRTPsDocument').removeClass("active");
	$('#alarm55RTPsDisplay').removeClass('alarm55Event1');
	$('#alarm55RTPsDisplay').removeClass('alarm55Event1');
});

// Site map video mapper
$("#alarm55TP").click(function () {
	$('#alarm55Mapper').css('display', 'flex');
});
$("#alarm55CloseMapper").click(function () {
	$('#alarm55Mapper').css('display', 'none');
});