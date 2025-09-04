// Alarm40 (Uncounted Goods) details tabs
function openAlarm40DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm40DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm40DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm40DetStyle1 .uncountedGoods").click(function () {
	$(this).parent('.alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmEventsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarm40DetStyle1 .alarmModEventVideoControls').css('display', 'flex');
	$('#alarm40DetStyle1 .alarmModEventVideo').addClass('uncountedGoods');
	$('alarmModEventVideoControls .alarmModEventVideoControls').children('.alarmsPlayPlayer').show();
});

$("#alarm40DetStyle1 .ACSforceDoor").click(function () {
	$(this).parent('.alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmEventsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarm40DetStyle1 .alarmModEventVideoControls').css('display', 'none');
	$('#alarm40DetStyle1 .alarmModEventVideo').removeClass('uncountedGoods');
});
$("#alarm40DetStyle1 .alarmsClosePlayer").click(function () {
	$('#alarm40DetStyle1 .alarmModEventVideoControls').css('display', 'none');
	$('#alarm40DetStyle1 .alarmEventsDocument').removeClass("active");
	$('#alarm40DetStyle1 .alarmModEventVideo').removeClass('uncountedGoods');
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
$("#alarm40DetStyle1 .alarmsPlayPlayer").click(function () {
	var lightBoxVideo = document.getElementById("Alarm40Event1");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#Alarm40Event1").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});

// Alarm SOP
$("#alarm40DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm40DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm40DetStyle3 .alarmValiditionOptions, #alarm40DetStyle3 .alarmHandle").val('0');
		$('#alarm40DetStyle3 .alarmValiditionOptions, #alarm40DetStyle3 .alarmHandle').trigger('change');
		$('#alarm40DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm40DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm40DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm40DetStyle3 .alarmHandle").val('0');
		$('#alarm40DetStyle3 .alarmHandle').trigger('change');
		$('#alarm40DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm40DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm40DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm40DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm40DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm40DetStyle4 .uncountedGoods").click(function () {
	$(this).parent('.alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmEventsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarm40DetStyle4 .alarmModEventVideoControls').css('display', 'flex');
	$('#alarm40DetStyle4 .alarmModEventVideo').addClass('uncountedGoods');
	$('#alarmModEventVideoControls .alarmModEventVideoControls').children('.alarmsPlayPlayer').show();
});

$("#alarm40DetStyle4 .ACSforceDoor").click(function () {
	$(this).parent('.alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmEventsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarm40DetStyle4 .alarmModEventVideoControls').css('display', 'none');
	$('#alarm40DetStyle4 .alarmModEventVideo').removeClass('uncountedGoods');
});
$("#alarm40DetStyle4 .alarmsPlayPlayer").click(function () {
	var lightBoxVideo = document.getElementById("Alarm40Event1");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#Alarm40Event1").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});
$("#alarm40DetStyle4 .alarmsClosePlayer").click(function () {
	$('#alarm40DetStyle4 .alarmModEventVideoControls').css('display', 'none');
	$('#alarm40DetStyle4 .alarmEventsDocument').removeClass("active");
	$('#alarm40DetStyle4 .alarmModEventVideo').removeClass('uncountedGoods');
});

// Site map video mapper
$("#alarm40TP").click(function () {
	$('#alarm40Mapper').css('display', 'flex');
});
$("#alarm40CloseMapper").click(function () {
	$('#alarm40Mapper').css('display', 'none');
});