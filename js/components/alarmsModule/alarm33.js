// Alarm33 (Person Falling and Fighting) details tabs
function openAlarm33DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm33DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm33DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm33 events
$("#fallNdFighEvent2").click(function () {
	$(this).addClass('active');
	$('#alarm33DisplayControls').css('display', 'flex');
	$('#alarm33ModEventsDisplay').addClass('fallNdFighEvent');
	$('#alarm33DisplayControls').children('.playAlarm33Event1').show();
});
$("#closeDocumentAlarm33").click(function () {
	$('#alarm33DisplayControls').css('display', 'none');
	$('#alarm33DetStyle1 .alarmEventsDocument').removeClass("active");
	$('#alarm33ModEventsDisplay').removeClass('fallNdFighEvent');
});

// Alarm33 SOP
$("#alarm33Validition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm33ValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm33ValiditionOptions, #alarm33HostagesOptions").val('0');
		$('#alarm33ValiditionOptions, #alarm33HostagesOptions').trigger('change');
		$('#alarm33ValiditionOptions').attr('disabled', 'disabled');
	}
});

$('#alarm33ValiditionOptions').change(function () {
	if ($('#alarm33ValiditionOptions').val() == '1') {
		$('#alarm33ValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm33ValiditionOptionYes').css('display', 'none');
	}
});

$('#alarm33ValiditionOptions').change(function () {
	if ($('#alarm33ValiditionOptions').val() == '2') {
    $("#alarm33HostagesOptions").val('0');
		$('#alarm33HostagesOptions').trigger('change');
		$('#alarm33HostagesOptions').attr('disabled', 'disabled');
		$('#alarm33ValiditionOptionYes').css('display', 'none');
		$('#alarm33HostagesOptionYes').css('display', 'none');
		$('#alarm33HostagesOptionNo').css('display', 'none');
	}
});

$("#alarm33HostagesCheck").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm33HostagesOptions').removeAttr('disabled');
	} else {
		$("#alarm33HostagesOptions").val('0');
		$('#alarm33HostagesOptions').trigger('change');
		$('#alarm33HostagesOptions').attr('disabled', 'disabled');
	}
});
$("#alarm33HostagesOptionYesCallP").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm33YesCallP').removeAttr('disabled');
	} else {
		$("#alarm33YesCallP").val('0');
		$('#alarm33YesCallP').trigger('change');
		$('#alarm33YesCallP').attr('disabled', 'disabled');
	}
});

$('#alarm33HostagesOptions').change(function () {
	if ($('#alarm33HostagesOptions').val() == '1') {
		$('#alarm33HostagesOptionYes').css('display', 'flex');
	} else {
		$('#alarm33HostagesOptionYes').css('display', 'none');
	}
});
$('#alarm33HostagesOptions').change(function () {
	if ($('#alarm33HostagesOptions').val() == '2') {
		$('#alarm33HostagesOptionNo').css('display', 'flex');
	} else {
		$('#alarm33HostagesOptionNo').css('display', 'none');
	}
});

$("#alarm33HostagesOptionNoCallP").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm33NoCallP').removeAttr('disabled');
	} else {
		$("#alarm33NoCallP").val('0');
		$('#alarm33NoCallP').trigger('change');
		$('#alarm33NoCallP').attr('disabled', 'disabled');
	}
});

// Alarm33 RTPs
$("#fallNdFighRTP2").click(function () {
  $(this).addClass('active');
	$('#alarm33RTPDisplayControls').css('display', 'flex');
	$('#alarm33RTPsDisplay').addClass('fallNdFighEvent');
	$('#alarm33RTPDisplayControls').children('.playAlarm33Event1').show();
});
$("#closeDocument33RTP1").click(function () {
	$('#alarm33RTPDisplayControls').css('display', 'none');
	$('#alarm33DetStyle4 .alarmEventsDocument').removeClass("active");
	$('#alarm33RTPsDisplay').removeClass('fallNdFighEvent');
});

// Alarm33 events videos
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

$(".playAlarm33Event1").click(function () {
	var lightBoxVideo = document.getElementById("Alarm33Event1");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#Alarm33Event1").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});
// Site map video mapper
$("#alarm33TP").click(function () {
	$('#alarm33Mapper').css('display', 'flex');
});
$("#alarm33CloseMapper").click(function () {
	$('#alarm33Mapper').css('display', 'none');
});