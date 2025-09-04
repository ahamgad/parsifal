// Alarm34 (Loitering Detection) details tabs
function openAlarm34DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm34DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm34DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm34 events
$("#loiteringDetEvent2").click(function () {
	$(this).addClass('active');
	$('#alarm34DisplayControls').css('display', 'flex');
	$('#alarm34ModEventsDisplay').addClass('loiteringDetEvent');
	$('#alarm34DisplayControls').children('.playAlarm34Event1').show();
});
$("#closeDocumentAlarm34").click(function () {
	$('#alarm34DisplayControls').css('display', 'none');
	$('#alarm34DetStyle1 .alarmEventsDocument').removeClass("active");
	$('#alarm34ModEventsDisplay').removeClass('loiteringDetEvent');
});

// Alarm34 SOP
$("#alarm34Validition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm34ValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm34ValiditionOptions, #alarm34HostagesOptions").val('0');
		$('#alarm34ValiditionOptions, #alarm34HostagesOptions').trigger('change');
		$('#alarm34ValiditionOptions').attr('disabled', 'disabled');
	}
});

$('#alarm34ValiditionOptions').change(function () {
	if ($('#alarm34ValiditionOptions').val() == '1') {
		$('#alarm34ValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm34ValiditionOptionYes').css('display', 'none');
	}
});

$('#alarm34ValiditionOptions').change(function () {
	if ($('#alarm34ValiditionOptions').val() == '2') {
    $("#alarm34HostagesOptions").val('0');
		$('#alarm34HostagesOptions').trigger('change');
		$('#alarm34HostagesOptions').attr('disabled', 'disabled');
		$('#alarm34ValiditionOptionYes').css('display', 'none');
		$('#alarm34HostagesOptionYes').css('display', 'none');
		$('#alarm34HostagesOptionNo').css('display', 'none');
	}
});

$("#alarm34HostagesCheck").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm34HostagesOptions').removeAttr('disabled');
	} else {
		$("#alarm34HostagesOptions").val('0');
		$('#alarm34HostagesOptions').trigger('change');
		$('#alarm34HostagesOptions').attr('disabled', 'disabled');
	}
});
$("#alarm34HostagesOptionYesCallP").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm34YesCallP').removeAttr('disabled');
	} else {
		$("#alarm34YesCallP").val('0');
		$('#alarm34YesCallP').trigger('change');
		$('#alarm34YesCallP').attr('disabled', 'disabled');
	}
});

$('#alarm34HostagesOptions').change(function () {
	if ($('#alarm34HostagesOptions').val() == '1') {
		$('#alarm34HostagesOptionYes').css('display', 'flex');
	} else {
		$('#alarm34HostagesOptionYes').css('display', 'none');
	}
});
$('#alarm34HostagesOptions').change(function () {
	if ($('#alarm34HostagesOptions').val() == '2') {
		$('#alarm34HostagesOptionNo').css('display', 'flex');
	} else {
		$('#alarm34HostagesOptionNo').css('display', 'none');
	}
});

$("#alarm34HostagesOptionNoCallP").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm34NoCallP').removeAttr('disabled');
	} else {
		$("#alarm34NoCallP").val('0');
		$('#alarm34NoCallP').trigger('change');
		$('#alarm34NoCallP').attr('disabled', 'disabled');
	}
});

// Alarm34 RTPs
$("#loiteringDetRTP2").click(function () {
  $(this).addClass('active');
	$('#alarm34RTPDisplayControls').css('display', 'flex');
	$('#alarm34RTPsDisplay').addClass('loiteringDetEvent');
	$('#alarm34RTPDisplayControls').children('.playAlarm34Event1').show();
});
$("#closeDocument34RTP1").click(function () {
	$('#alarm34RTPDisplayControls').css('display', 'none');
	$('#alarm34DetStyle4 .alarmEventsDocument').removeClass("active");
	$('#alarm34RTPsDisplay').removeClass('loiteringDetEvent');
});

// Alarm34 events videos
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

$(".playAlarm34Event1").click(function () {
	var lightBoxVideo = document.getElementById("Alarm34Event1");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#Alarm34Event1").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});
// Site map video mapper
$("#alarm34TP").click(function () {
	$('#alarm34Mapper').css('display', 'flex');
});
$("#alarm34CloseMapper").click(function () {
	$('#alarm34Mapper').css('display', 'none');
});