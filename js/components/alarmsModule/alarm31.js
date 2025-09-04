// Alarm31 (Wrong Direction) details tabs
function openAlarm31DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm31DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm31DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm31 events
$("#wrongDirEvent2").click(function () {
	$(this).addClass('active');
	$('#alarm31DisplayControls').css('display', 'flex');
	$('#alarm31ModEventsDisplay').addClass('wrongDirEvent1');
	$('#alarm31DisplayControls').children('.playAlarm31Event1').show();
});
$("#closeDocumentAlarm31").click(function () {
	$('#alarm31DisplayControls').css('display', 'none');
	$('#alarm31DetStyle1 .alarmEventsDocument').removeClass("active");
	$('#alarm31ModEventsDisplay').removeClass('wrongDirEvent1');
});

// Alarm31 SOP
$("#alarm31Validition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm31ValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm31ValiditionOptions, #alarm31HostagesOptions").val('0');
		$('#alarm31ValiditionOptions, #alarm31HostagesOptions').trigger('change');
		$('#alarm31ValiditionOptions').attr('disabled', 'disabled');
	}
});

$('#alarm31ValiditionOptions').change(function () {
	if ($('#alarm31ValiditionOptions').val() == '1') {
		$('#alarm31ValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm31ValiditionOptionYes').css('display', 'none');
	}
});

$('#alarm31ValiditionOptions').change(function () {
	if ($('#alarm31ValiditionOptions').val() == '2') {
    $("#alarm31HostagesOptions").val('0');
		$('#alarm31HostagesOptions').trigger('change');
		$('#alarm31HostagesOptions').attr('disabled', 'disabled');
		$('#alarm31ValiditionOptionYes').css('display', 'none');
		$('#alarm31HostagesOptionYes').css('display', 'none');
		$('#alarm31HostagesOptionNo').css('display', 'none');
	}
});

$("#alarm31HostagesCheck").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm31HostagesOptions').removeAttr('disabled');
	} else {
		$("#alarm31HostagesOptions").val('0');
		$('#alarm31HostagesOptions').trigger('change');
		$('#alarm31HostagesOptions').attr('disabled', 'disabled');
	}
});
$("#alarm31HostagesOptionYesCallP").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm31YesCallP').removeAttr('disabled');
	} else {
		$("#alarm31YesCallP").val('0');
		$('#alarm31YesCallP').trigger('change');
		$('#alarm31YesCallP').attr('disabled', 'disabled');
	}
});

$('#alarm31HostagesOptions').change(function () {
	if ($('#alarm31HostagesOptions').val() == '1') {
		$('#alarm31HostagesOptionYes').css('display', 'flex');
	} else {
		$('#alarm31HostagesOptionYes').css('display', 'none');
	}
});
$('#alarm31HostagesOptions').change(function () {
	if ($('#alarm31HostagesOptions').val() == '2') {
		$('#alarm31HostagesOptionNo').css('display', 'flex');
	} else {
		$('#alarm31HostagesOptionNo').css('display', 'none');
	}
});

$("#alarm31HostagesOptionNoCallP").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm31NoCallP').removeAttr('disabled');
	} else {
		$("#alarm31NoCallP").val('0');
		$('#alarm31NoCallP').trigger('change');
		$('#alarm31NoCallP').attr('disabled', 'disabled');
	}
});

// Alarm31 RTPs
$("#wrongDirRTP2").click(function () {
  $(this).addClass('active');
	$('#alarm31RTPDisplayControls').css('display', 'flex');
	$('#alarm31RTPsDisplay').addClass('wrongDirEvent1');
	$('#alarm31RTPDisplayControls').children('.playAlarm31Event1').show();
});
$("#closeDocument31RTP1").click(function () {
	$('#alarm31RTPDisplayControls').css('display', 'none');
	$('#alarm31DetStyle4 .alarmEventsDocument').removeClass("active");
	$('#alarm31RTPsDisplay').removeClass('wrongDirEvent1');
});

// Alarm31 events videos
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

$(".playAlarm31Event1").click(function () {
	var lightBoxVideo = document.getElementById("Alarm31Event1");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#Alarm31Event1").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});
// Site map video mapper
$("#alarm31TP").click(function () {
	$('#alarm31Mapper').css('display', 'flex');
});
$("#alarm31CloseMapper").click(function () {
	$('#alarm31Mapper').css('display', 'none');
});