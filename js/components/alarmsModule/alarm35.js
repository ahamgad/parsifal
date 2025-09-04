// Alarm35 (ATM Robbery) details tabs
function openAlarm35DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm35DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm35DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm35 events
$("#ATMRobberyEvent2").click(function () {
	$(this).addClass('active');
	$('#alarm35DisplayControls').css('display', 'flex');
	$('#alarm35ModEventsDisplay').addClass('ATMRobberyEvent1');
	$('#alarm35DisplayControls').children('.playAlarm35Event1').show();
});
$("#closeDocumentAlarm35").click(function () {
	$('#alarm35DisplayControls').css('display', 'none');
	$('#alarm35DetStyle1 .alarmEventsDocument').removeClass("active");
	$('#alarm35ModEventsDisplay').removeClass('ATMRobberyEvent1');
});

// Alarm35 SOP
$("#alarm35Validition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm35ValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm35ValiditionOptions, #alarm35HostagesOptions").val('0');
		$('#alarm35ValiditionOptions, #alarm35HostagesOptions').trigger('change');
		$('#alarm35ValiditionOptions').attr('disabled', 'disabled');
	}
});

$('#alarm35ValiditionOptions').change(function () {
	if ($('#alarm35ValiditionOptions').val() == '1') {
		$('#alarm35ValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm35ValiditionOptionYes').css('display', 'none');
	}
});

$('#alarm35ValiditionOptions').change(function () {
	if ($('#alarm35ValiditionOptions').val() == '2') {
    $("#alarm35HostagesOptions").val('0');
		$('#alarm35HostagesOptions').trigger('change');
		$('#alarm35HostagesOptions').attr('disabled', 'disabled');
		$('#alarm35ValiditionOptionYes').css('display', 'none');
		$('#alarm35HostagesOptionYes').css('display', 'none');
		$('#alarm35HostagesOptionNo').css('display', 'none');
	}
});

$("#alarm35HostagesCheck").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm35HostagesOptions').removeAttr('disabled');
	} else {
		$("#alarm35HostagesOptions").val('0');
		$('#alarm35HostagesOptions').trigger('change');
		$('#alarm35HostagesOptions').attr('disabled', 'disabled');
	}
});
$("#alarm35HostagesOptionYesCallP").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm35YesCallP').removeAttr('disabled');
	} else {
		$("#alarm35YesCallP").val('0');
		$('#alarm35YesCallP').trigger('change');
		$('#alarm35YesCallP').attr('disabled', 'disabled');
	}
});

$('#alarm35HostagesOptions').change(function () {
	if ($('#alarm35HostagesOptions').val() == '1') {
		$('#alarm35HostagesOptionYes').css('display', 'flex');
	} else {
		$('#alarm35HostagesOptionYes').css('display', 'none');
	}
});
$('#alarm35HostagesOptions').change(function () {
	if ($('#alarm35HostagesOptions').val() == '2') {
		$('#alarm35HostagesOptionNo').css('display', 'flex');
	} else {
		$('#alarm35HostagesOptionNo').css('display', 'none');
	}
});

$("#alarm35HostagesOptionNoCallP").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm35NoCallP').removeAttr('disabled');
	} else {
		$("#alarm35NoCallP").val('0');
		$('#alarm35NoCallP').trigger('change');
		$('#alarm35NoCallP').attr('disabled', 'disabled');
	}
});

// Alarm35 RTPs
$("#ATMRobberyRTP2").click(function () {
  $(this).addClass('active');
	$('#alarm35RTPDisplayControls').css('display', 'flex');
	$('#alarm35RTPsDisplay').addClass('ATMRobberyEvent1');
	$('#alarm35RTPDisplayControls').children('.playAlarm35Event1').show();
});
$("#closeDocument35RTP1").click(function () {
	$('#alarm35RTPDisplayControls').css('display', 'none');
	$('#alarm35DetStyle4 .alarmEventsDocument').removeClass("active");
	$('#alarm35RTPsDisplay').removeClass('ATMRobberyEvent1');
});

// Alarm35 events videos
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

$(".playAlarm35Event1").click(function () {
	var lightBoxVideo = document.getElementById("Alarm35Event1");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#Alarm21Event1").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});
// Site map video mapper
$("#alarm35TP").click(function () {
	$('#alarm35Mapper').css('display', 'flex');
});
$("#alarm35CloseMapper").click(function () {
	$('#alarm35Mapper').css('display', 'none');
});