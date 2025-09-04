// Alarm8 (Planted object) details tabs
function openAlarm8DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm8DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm8DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm8DetStyle1 .alarmEventsDocument").click(function () {
	$(this).parent('.alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmEventsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarm8DetStyle1 .alarmModEventVideoControls').css('display', 'flex');
	$('#alarm8DetStyle1 .alarmModEventVideo').addClass('plantedObjEvent1');
	$('alarmModEventVideoControls .alarmModEventVideoControls').children('.alarmsPlayPlayer').show();
});

$("#alarm8DetStyle1 .alarmsClosePlayer").click(function () {
	$('#alarm8DetStyle1 .alarmModEventVideoControls').css('display', 'none');
	$('#alarm8DetStyle1 .alarmEventsDocument').removeClass("active");
	$('#alarm8DetStyle1 .alarmModEventVideo').removeClass('plantedObjEvent1');
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
$("#alarm8DetStyle1 .alarmsPlayPlayer").click(function () {
	var lightBoxVideo = document.getElementById("plantedObjectEvent1");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#plantedObjectEvent1").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});

// Alarm SOP
$("#alarm8DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm8DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm8DetStyle3 .alarmValiditionOptions, #alarm8DetStyle3 .alarmHandle").val('0');
		$('#alarm8DetStyle3 .alarmValiditionOptions, #alarm8DetStyle3 .alarmHandle').trigger('change');
		$('#alarm8DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm8DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm8DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm8DetStyle3 .alarmHandle").val('0');
		$('#alarm8DetStyle3 .alarmHandle').trigger('change');
		$('#alarm8DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm8DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm8DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm8DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm8DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm8DetStyle4 .alarmEventsDocument").click(function () {
	$(this).parent('.alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmEventsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarm8DetStyle4 .alarmModEventVideoControls').css('display', 'flex');
	$('#alarm8DetStyle4 .alarmModEventVideo').addClass('plantedObjEvent1');
	$('alarmModEventVideoControls .alarmModEventVideoControls').children('.alarmsPlayPlayer').show();
});

$("#alarm8DetStyle4 .alarmsPlayPlayer").click(function () {
	var lightBoxVideo = document.getElementById("plantedObjectEvent1");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#plantedObjectEvent1").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});
$("#alarm8DetStyle4 .alarmsClosePlayer").click(function () {
	$('#alarm8DetStyle4 .alarmModEventVideoControls').css('display', 'none');
	$('#alarm8DetStyle4 .alarmEventsDocument').removeClass("active");
	$('#alarm8DetStyle4 .alarmModEventVideo').removeClass('plantedObjEvent1');
});

// Site map video mapper
$("#alarm8TP").click(function () {
	$('#alarm8Mapper').css('display', 'flex');
});
$("#alarm8CloseMapper").click(function () {
	$('#alarm8Mapper').css('display', 'none');
});