// Alarm1 (Fight detection) details tabs
function openAlarm11DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm11DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm11DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm1 events
$("#fightEvent1").click(function () {
	$(this).parent('#alarm11DetStyle1 .alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmEventsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarmModFightDisplayControls').css('display', 'flex');

	$('#alarm11ModEventsDisplay').removeClass('fightEvent2');
	$('#alarm11ModEventsDisplay').addClass('fightEvent1');

	$('#alarmModFightDisplayControls').children('.alarmsPlayPlayer.alarms').hide();
	$('#alarmModFightDisplayControls').children('.playFightAlarmEvent1').show();
});

$("#fightEvent2").click(function () {
	$(this).parent('#alarm11DetStyle1 .alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmEventsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarmModFightDisplayControls').css('display', 'flex');
	$('#alarm11ModEventsDisplay').removeClass('fightEvent1');
	$('#alarm11ModEventsDisplay').addClass('fightEvent2');

	$('#alarmModFightDisplayControls').children('.alarmsPlayPlayer.alarms').hide();
	$('#alarmModFightDisplayControls').children('.playFightAlarmEvent2').show();
});

$("#closeDocumentAlarm11").click(function () {
	$('#alarmModFightDisplayControls').css('display', 'none');
	$('#alarm11DetStyle1 .alarmEventsDocument').removeClass("active");
	$('#alarm11ModEventsDisplay').removeClass('fightEvent1 fightEvent2');
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

$(".playFightAlarmEvent1").click(function () {
	var lightBoxVideo = document.getElementById("fightAlarmEvent1");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#fightAlarmEvent1").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});

$(".playFightAlarmEvent2").click(function () {
	var lightBoxVideo = document.getElementById("fightAlarmEvent2");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#fightAlarmEvent2").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});

// Alarm11 SOP
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

// Alarm11 RTPs
$("#fightRTP1").click(function () {
	$(this).parent('.alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmRTPsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarmModFightRTPDisplayControls').css('display', 'flex');

	$('#alarmModFightRTPsDisplay').removeClass('fightEvent2');
	$('#alarmModFightRTPsDisplay').addClass('fightEvent1');

	$('#alarmModFightRTPDisplayControls').children('.alarmsPlayPlayer.alarms').hide();
	$('#alarmModFightRTPDisplayControls').children('.playFightAlarmEvent1').show();
});

$("#fightRTP2").click(function () {
	$(this).parent('.alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmRTPsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarmModFightRTPDisplayControls').css('display', 'flex');
	$('#alarmModFightRTPsDisplay').removeClass('fightEvent1');
	$('#alarmModFightRTPsDisplay').addClass('fightEvent2');

	$('#alarmModFightRTPDisplayControls').children('.alarmsPlayPlayer.alarms').hide();
	$('#alarmModFightRTPDisplayControls').children('.playFightAlarmEvent2').show();
});

$("#closeDocumentFightRTP1").click(function () {
	$('#alarmModFightRTPDisplayControls').css('display', 'none');
	$('.alarmRTPsDocument').removeClass("active");
	$('#alarmModFightRTPsDisplay').removeClass('fightEvent1 fightEvent2');
});

// Site map video mapper
$("#alarm11TP").click(function () {
	$('#alarm11Mapper').css('display', 'flex');
});
$("#alarm11CloseMapper").click(function () {
	$('#alarm11Mapper').css('display', 'none');
});