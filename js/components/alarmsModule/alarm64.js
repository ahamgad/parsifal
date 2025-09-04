// Alarm64 (Duress details tabs
function openAlarm64DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm64DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm64DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm1 events
$("#alarm64Event1").click(function () {
	$(this).parent('#alarm64DetStyle1 .alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmEventsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarm64DisplayControls').css('display', 'flex');
	$('#alarm64ModEventsDisplay').addClass('alarm64Event1');
	
	$('#alarm64DisplayControls').addClass('alarm64Event1');

	// $('#alarm64DisplayControls').children('.alarmsPlayPlayer.alarms').hide();
	$('#alarm64DisplayControls').children('.playAlarm64Event1').show();
});


$("#closeDocumentAlarm64").click(function () {
	$('#alarm64DisplayControls').css('display', 'none');
	$('#alarm64ModEventsDisplay').removeClass('alarm64Event1');
	$('#alarm64DetStyle1 .alarmEventsDocument').removeClass("active");
	$('#alarm64DisplayControls').removeClass('alarm64Event1');
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

$(".playAlarm64Event1").click(function () {
	var lightBoxVideo = document.getElementById("Alarm52Event1");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#Alarm64Event1").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});

// Alarm64 SOP
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

// Alarm64 RTPs
$("#alarm64RTP1").click(function () {
	$(this).parent('.alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmRTPsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarm64RTPDisplayControls').css('display', 'flex');
	$('#alarm64RTPsDisplay').addClass('alarm64Event1');
	$('#alarm64RTPsDisplay').addClass('alarm64Event1');

	$('#alarm64RTPDisplayControls').children('.playAlarm64Event1').show();
});


$("#closeAlarm64RTP1").click(function () {
	$('#alarm64RTPDisplayControls').css('display', 'none');
	$('.alarmRTPsDocument').removeClass("active");
	$('#alarm64RTPsDisplay').removeClass('alarm64Event1');
	$('#alarm64RTPsDisplay').removeClass('alarm64Event1');
});