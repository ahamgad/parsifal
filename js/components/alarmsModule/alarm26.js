// Alarm26 (Object Detection) details tabs
function openAlarm26DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm26DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm26DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm26 events
$("#objDetcEvent2").click(function () {
	$(this).addClass('active');
	$('#alarm26DisplayControls').css('display', 'flex');
	$('#alarm26ModEventsDisplay').addClass('objDetcEvent1');
	$('#alarm26DisplayControls').children('.playAlarm26Event1').show();
});
$("#closeDocumentAlarm26").click(function () {
	$('#alarm26DisplayControls').css('display', 'none');
	$('#alarm26DetStyle1 .alarmEventsDocument').removeClass("active");
	$('#alarm26ModEventsDisplay').removeClass('objDetcEvent1');
});

// Alarm26 SOP
$("#alarm26Validition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm26ValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm26ValiditionOptions, #alarm26HostagesOptions").val('0');
		$('#alarm26ValiditionOptions, #alarm26HostagesOptions').trigger('change');
		$('#alarm26ValiditionOptions').attr('disabled', 'disabled');
	}
});

$('#alarm26ValiditionOptions').change(function () {
	if ($('#alarm26ValiditionOptions').val() == '1') {
		$('#alarm26ValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm26ValiditionOptionYes').css('display', 'none');
	}
});

$('#alarm26ValiditionOptions').change(function () {
	if ($('#alarm26ValiditionOptions').val() == '2') {
    $("#alarm26HostagesOptions").val('0');
		$('#alarm26HostagesOptions').trigger('change');
		$('#alarm26HostagesOptions').attr('disabled', 'disabled');
		$('#alarm26ValiditionOptionYes').css('display', 'none');
		$('#alarm26HostagesOptionYes').css('display', 'none');
		$('#alarm26HostagesOptionNo').css('display', 'none');
	}
});

$("#alarm26HostagesCheck").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm26HostagesOptions').removeAttr('disabled');
	} else {
		$("#alarm26HostagesOptions").val('0');
		$('#alarm26HostagesOptions').trigger('change');
		$('#alarm26HostagesOptions').attr('disabled', 'disabled');
	}
});
$("#alarm26HostagesOptionYesCallP").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm26YesCallP').removeAttr('disabled');
	} else {
		$("#alarm26YesCallP").val('0');
		$('#alarm26YesCallP').trigger('change');
		$('#alarm26YesCallP').attr('disabled', 'disabled');
	}
});

$('#alarm26HostagesOptions').change(function () {
	if ($('#alarm26HostagesOptions').val() == '1') {
		$('#alarm26HostagesOptionYes').css('display', 'flex');
	} else {
		$('#alarm26HostagesOptionYes').css('display', 'none');
	}
});
$('#alarm26HostagesOptions').change(function () {
	if ($('#alarm26HostagesOptions').val() == '2') {
		$('#alarm26HostagesOptionNo').css('display', 'flex');
	} else {
		$('#alarm26HostagesOptionNo').css('display', 'none');
	}
});

$("#alarm26HostagesOptionNoCallP").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm26NoCallP').removeAttr('disabled');
	} else {
		$("#alarm26NoCallP").val('0');
		$('#alarm26NoCallP').trigger('change');
		$('#alarm26NoCallP').attr('disabled', 'disabled');
	}
});

// Alarm26 RTPs
$("#objDetcRTP2").click(function () {
  $(this).addClass('active');
	$('#alarm26RTPDisplayControls').css('display', 'flex');
	$('#alarm26RTPsDisplay').addClass('objDetcEvent1');
	$('#alarm26RTPDisplayControls').children('.playAlarm26Event1').show();
});
$("#closeDocument26RTP1").click(function () {
	$('#alarm26RTPDisplayControls').css('display', 'none');
	$('#alarm26DetStyle4 .alarmEventsDocument').removeClass("active");
	$('#alarm26RTPsDisplay').removeClass('objDetcEvent1');
});

// Alarm26 events videos
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

$(".playAlarm26Event1").click(function () {
	var lightBoxVideo = document.getElementById("Alarm26Event1");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#Alarm26Event1").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});
// Site map video mapper
$("#alarm26TP").click(function () {
	$('#alarm26Mapper').css('display', 'flex');
});
$("#alarm26CloseMapper").click(function () {
	$('#alarm26Mapper').css('display', 'none');
});