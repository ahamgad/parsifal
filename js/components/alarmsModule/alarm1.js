// Alarm1 (Armed assault) details tabs
function openAlarm1DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm1DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm1DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm1 events
$("#armedEvent1").click(function () {
	$(this).parent('#alarm1DetStyle1 .alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmEventsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarmModEventDisplayControls').css('display', 'flex');

	$('#alarm1ModEventsDisplay').removeClass('armedEvent2 armedEvent3');
	$('#alarm1ModEventsDisplay').addClass('armedEvent1');

	$('#alarmModEventDisplayControls').children('.alarmsPlayPlayer.alarms').hide();
	$('#alarmModEventDisplayControls').children('.playArmedAlarmEvent1').show();
});

$("#armedEvent2").click(function () {
	$(this).parent('#alarm1DetStyle1 .alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmEventsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarmModEventDisplayControls').css('display', 'flex');
	$('#alarm1ModEventsDisplay').removeClass('armedEvent1 armedEvent3');
	$('#alarm1ModEventsDisplay').addClass('armedEvent2');

	$('#alarmModEventDisplayControls').children('.alarmsPlayPlayer.alarms').hide();
	$('#alarmModEventDisplayControls').children('.playArmedAlarmEvent2').show();
});

$("#armedEvent3").click(function () {
	$(this).parent('#alarm1DetStyle1 .alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmEventsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarmModEventDisplayControls').css('display', 'flex');
	$('#alarm1ModEventsDisplay').removeClass('armedEvent1 armedEvent2');
	$('#alarm1ModEventsDisplay').addClass('armedEvent3');

	$('#alarmModEventDisplayControls').children('.alarmsPlayPlayer.alarms').hide();
	$('#alarmModEventDisplayControls').children('.playArmedAlarmEvent3').show();
});

$("#closeDocumentAlarm1").click(function () {
	$('#alarmModEventDisplayControls').css('display', 'none');
	$('#alarm1DetStyle1 .alarmEventsDocument').removeClass("active");
	$('#alarm1ModEventsDisplay').removeClass('armedEvent1 armedEvent2 armedEvent3');
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

$(".playArmedAlarmEvent1").click(function () {
	var lightBoxVideo = document.getElementById("rackAlarmEvent1");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#rackAlarmEvent1").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});

$(".playArmedAlarmEvent2").click(function () {
	var lightBoxVideo = document.getElementById("rackAlarmEvent2");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#rackAlarmEvent2").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});

// Alarm1 SOP
$("#armedAlarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#armedValiditionOptions').removeAttr('disabled');
	} else {
		$("#armedValiditionOptions, #armedHostagesOptions").val('0');
		$('#armedValiditionOptions, #armedHostagesOptions').trigger('change');
		$('#armedValiditionOptions').attr('disabled', 'disabled');
	}
});

$('#armedValiditionOptions').change(function () {
	if ($('#armedValiditionOptions').val() == '1') {
		$('#armedValiditionOptionYes').css('display', 'flex');
	} else {
		$('#armedValiditionOptionYes').css('display', 'none');
	}
});

$('#armedValiditionOptions').change(function () {
	if ($('#armedValiditionOptions').val() == '2') {
    $("#armedHostagesOptions").val('0');
		$('#armedHostagesOptions').trigger('change');
		$('#armedHostagesOptions').attr('disabled', 'disabled');
		$('#armedValiditionOptionYes').css('display', 'none');
		$('#armedHostagesOptionYes').css('display', 'none');
		$('#armedHostagesOptionNo').css('display', 'none');
	}
});

$("#armedHostagesCheck").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#armedHostagesOptions').removeAttr('disabled');
	} else {
		$("#armedHostagesOptions").val('0');
		$('#armedHostagesOptions').trigger('change');
		$('#armedHostagesOptions').attr('disabled', 'disabled');
	}
});
$("#armedHostagesOptionYesCallP").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#armedYesCallP').removeAttr('disabled');
	} else {
		$("#armedYesCallP").val('0');
		$('#armedYesCallP').trigger('change');
		$('#armedYesCallP').attr('disabled', 'disabled');
	}
});

$('#armedHostagesOptions').change(function () {
	if ($('#armedHostagesOptions').val() == '1') {
		$('#armedHostagesOptionYes').css('display', 'flex');
	} else {
		$('#armedHostagesOptionYes').css('display', 'none');
	}
});
$('#armedHostagesOptions').change(function () {
	if ($('#armedHostagesOptions').val() == '2') {
		$('#armedHostagesOptionNo').css('display', 'flex');
	} else {
		$('#armedHostagesOptionNo').css('display', 'none');
	}
});

$("#armedHostagesOptionNoCallP").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#armedNoCallP').removeAttr('disabled');
	} else {
		$("#armedNoCallP").val('0');
		$('#armedNoCallP').trigger('change');
		$('#armedNoCallP').attr('disabled', 'disabled');
	}
});

// Alarm1 RTPs
$("#armedRTP1").click(function () {
	$(this).parent('.alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmRTPsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarmModRTPDisplayControls').css('display', 'flex');

	$('#alarmModRTPsDisplay').removeClass('armedEvent2 armedEvent3 armedEvent4');
	$('#alarmModRTPsDisplay').addClass('armedEvent1');

	$('#alarmModRTPDisplayControls').children('.alarmsPlayPlayer.alarms').hide();
	$('#alarmModRTPDisplayControls').children('.playArmedAlarmEvent1').show();
});

$("#armedRTP2").click(function () {
	$(this).parent('.alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmRTPsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarmModRTPDisplayControls').css('display', 'flex');
	$('#alarmModRTPsDisplay').removeClass('armedEvent1 armedEvent3 armedEvent4');
	$('#alarmModRTPsDisplay').addClass('armedEvent2');

	$('#alarmModRTPDisplayControls').children('.alarmsPlayPlayer.alarms').hide();
	$('#alarmModRTPDisplayControls').children('.playArmedAlarmEvent2').show();
});

$("#armedRTP3").click(function () {
	$(this).parent('.alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmRTPsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarmModRTPDisplayControls').css('display', 'flex');
	$('#alarmModRTPsDisplay').removeClass('armedEvent1 armedEvent2 armedEvent4');
	$('#alarmModRTPsDisplay').addClass('armedEvent3');

	$('#alarmModRTPDisplayControls').children('.alarmsPlayPlayer.alarms').hide();
	$('#alarmModRTPDisplayControls').children('.playArmedAlarmEvent3').show();
});

$("#armedRTP4").click(function () {
	$(this).parent('.alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmRTPsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarmModRTPDisplayControls').css('display', 'flex');
	$('#alarmModRTPsDisplay').removeClass('armedEvent1 armedEvent2 armedEvent3');
	$('#alarmModRTPsDisplay').addClass('armedEvent4');

	$('#alarmModRTPDisplayControls').children('.alarmsPlayPlayer.alarms').hide();
	$('#alarmModRTPDisplayControls').children('.playArmedAlarmEvent4').show();
});

$("#closeDocumentRTP1").click(function () {
	$('#alarmModRTPDisplayControls').css('display', 'none');
	$('.alarmRTPsDocument').removeClass("active");
	$('#alarmModRTPsDisplay').removeClass('armedEvent1 armedEvent2 armedEvent3 armedEvent4');
});

// Site map video mapper
$("#alarm1TP").click(function () {
	$('#alarm1Mapper').css('display', 'flex');
});
$("#alarm1CloseMapper").click(function () {
	$('#alarm1Mapper').css('display', 'none');
});