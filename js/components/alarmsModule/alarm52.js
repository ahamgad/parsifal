// Alarm52 (Intrusion detection) details tabs
function openAlarm52DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm52DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm52DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm52 events
$("#alarm52Event1").click(function () {
	$(this).addClass('active');
	$('#alarm52DisplayControls').css('display', 'flex');
	$('#alarm52ModEventsDisplay').addClass('alarm52Event1');
	$('#alarm52DisplayControls').children('.playAlarm52Event1').show();
});
$("#closeDocumentAlarm52").click(function () {
	$('#alarm52DisplayControls').css('display', 'none');
	$('#alarm52DetStyle1 .alarmEventsDocument').removeClass("active");
	$('#alarm52ModEventsDisplay').removeClass('alarm52Event1');
});

// Alarm52 SOP
$("#alarm52Validition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm52ValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm52ValiditionOptions, #alarm52HostagesOptions").val('0');
		$('#alarm52ValiditionOptions, #alarm52HostagesOptions').trigger('change');
		$('#alarm52ValiditionOptions').attr('disabled', 'disabled');
	}
});

$('#alarm52ValiditionOptions').change(function () {
	if ($('#alarm52ValiditionOptions').val() == '1') {
		$('#alarm52ValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm52ValiditionOptionYes').css('display', 'none');
	}
});

$('#alarm52ValiditionOptions').change(function () {
	if ($('#alarm52ValiditionOptions').val() == '2') {
    $("#alarm52HostagesOptions").val('0');
		$('#alarm52HostagesOptions').trigger('change');
		$('#alarm52HostagesOptions').attr('disabled', 'disabled');
		$('#alarm52ValiditionOptionYes').css('display', 'none');
		$('#alarm52HostagesOptionYes').css('display', 'none');
		$('#alarm52HostagesOptionNo').css('display', 'none');
	}
});

$("#alarm52HostagesCheck").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm52HostagesOptions').removeAttr('disabled');
	} else {
		$("#alarm52HostagesOptions").val('0');
		$('#alarm52HostagesOptions').trigger('change');
		$('#alarm52HostagesOptions').attr('disabled', 'disabled');
	}
});
$("#alarm52HostagesOptionYesCallP").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm52YesCallP').removeAttr('disabled');
	} else {
		$("#alarm52YesCallP").val('0');
		$('#alarm52YesCallP').trigger('change');
		$('#alarm52YesCallP').attr('disabled', 'disabled');
	}
});

$('#alarm52HostagesOptions').change(function () {
	if ($('#alarm52HostagesOptions').val() == '1') {
		$('#alarm52HostagesOptionYes').css('display', 'flex');
	} else {
		$('#alarm52HostagesOptionYes').css('display', 'none');
	}
});
$('#alarm52HostagesOptions').change(function () {
	if ($('#alarm52HostagesOptions').val() == '2') {
		$('#alarm52HostagesOptionNo').css('display', 'flex');
	} else {
		$('#alarm52HostagesOptionNo').css('display', 'none');
	}
});

$("#alarm52HostagesOptionNoCallP").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm52NoCallP').removeAttr('disabled');
	} else {
		$("#alarm52NoCallP").val('0');
		$('#alarm52NoCallP').trigger('change');
		$('#alarm52NoCallP').attr('disabled', 'disabled');
	}
});

// Alarm52 RTPs
$("#alarm52RTP2").click(function () {
  $(this).addClass('active');
	$('#alarm52RTPDisplayControls').css('display', 'flex');
	$('#alarm52RTPsDisplay').addClass('alarm52Event1');
	$('#alarm52RTPDisplayControls').children('.playAlarm52Event1').show();
});
$("#closeDocument52RTP1").click(function () {
	$('#alarm52RTPDisplayControls').css('display', 'none');
	$('#alarm52DetStyle4 .alarmEventsDocument').removeClass("active");
	$('#alarm52RTPsDisplay').removeClass('alarm52Event1');
});

// Alarm52 events videos
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

$(".playAlarm52Event1").click(function () {
	var lightBoxVideo = document.getElementById("Alarm52Event1");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#Alarm52Event1").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});
// Site map video mapper
$("#alarm52TP").click(function () {
	$('#alarm52Mapper').css('display', 'flex');
});
$("#alarm52CloseMapper").click(function () {
	$('#alarm52Mapper').css('display', 'none');
});