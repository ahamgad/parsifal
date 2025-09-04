// Alarm54 (Fire) details tabs
function openAlarm54DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm54DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm54DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm54DetStyle1 .alarmEventsDocument").click(function () {
	$(this).parent('.alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmEventsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarm54DetStyle1 .alarmModEventVideoControls').css('display', 'flex');
	$('#alarm54DetStyle1 .alarmModEventVideo').addClass('alarm54Event1');
	$('alarmModEventVideoControls .alarmModEventVideoControls').children('.alarmsPlayPlayer').show();
});

$("#alarm54DetStyle1 .alarmsClosePlayer").click(function () {
	$('#alarm54DetStyle1 .alarmModEventVideoControls').css('display', 'none');
	$('#alarm54DetStyle1 .alarmEventsDocument').removeClass("active");
	$('#alarm54DetStyle1 .alarmModEventVideo').removeClass('alarm54Event1');
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
$("#alarm54DetStyle1 .alarmsPlayPlayer").click(function () {
	var lightBoxVideo = document.getElementById("Alarm54Event1");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#Alarm54Event1").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});

// Alarm SOP
$("#alarm54DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm54DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm54DetStyle3 .alarmValiditionOptions, #alarm54DetStyle3 .alarmHandle").val('0');
		$('#alarm54DetStyle3 .alarmValiditionOptions, #alarm54DetStyle3 .alarmHandle').trigger('change');
		$('#alarm54DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm54DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm54DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm54DetStyle3 .alarmHandle").val('0');
		$('#alarm54DetStyle3 .alarmHandle').trigger('change');
		$('#alarm54DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm54DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm54DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm54DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm54DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm54DetStyle4 .alarmEventsDocument").click(function () {
	$(this).parent('.alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmEventsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarm54DetStyle4 .alarmModEventVideoControls').css('display', 'flex');
	$('#alarm54DetStyle4 .alarmModEventVideo').addClass('alarm54Event1');
	$('alarmModEventVideoControls .alarmModEventVideoControls').children('.alarmsPlayPlayer').show();
});

$("#alarm54DetStyle4 .alarmsPlayPlayer").click(function () {
	var lightBoxVideo = document.getElementById("fireAlarmEvent1");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#fireAlarmEvent1").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});
$("#alarm54DetStyle4 .alarmsClosePlayer").click(function () {
	$('#alarm54DetStyle4 .alarmModEventVideoControls').css('display', 'none');
	$('#alarm54DetStyle4 .alarmEventsDocument').removeClass("active");
	$('#alarm54DetStyle4 .alarmModEventVideo').removeClass('alarm54Event1');
});

// Site map video mapper
$("#alarm54TP").click(function () {
	$('#alarm54Mapper').css('display', 'flex');
});
$("#alarm54CloseMapper").click(function () {
	$('#alarm54Mapper').css('display', 'none');
});