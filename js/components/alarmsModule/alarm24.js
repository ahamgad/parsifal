// Alarm24 (Unattended Object) details tabs
function openAlarm24DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm24DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm24DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm24 events
$("#unObjAlaEvent1").click(function () {
	$(this).addClass('active');
	$('#alarm24DisplayControls').css('display', 'flex');
	$('#alarm24ModEventsDisplay').addClass('unObjAlaEvent1');
	$('#alarm24DisplayControls').children('.playAlarm24Event1').show();
});
$("#closeDocumentAlarm24").click(function () {
	$('#alarm24DisplayControls').css('display', 'none');
	$('#alarm24DetStyle1 .alarmEventsDocument').removeClass("active");
	$('#alarm24ModEventsDisplay').removeClass('unObjAlaEvent1');
});

// Alarm24 SOP
$("#alarm24Validition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm24ValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm24ValiditionOptions, #alarm24HostagesOptions").val('0');
		$('#alarm24ValiditionOptions, #alarm24HostagesOptions').trigger('change');
		$('#alarm24ValiditionOptions').attr('disabled', 'disabled');
	}
});

$('#alarm24ValiditionOptions').change(function () {
	if ($('#alarm24ValiditionOptions').val() == '1') {
		$('#alarm24ValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm24ValiditionOptionYes').css('display', 'none');
	}
});

$('#alarm24ValiditionOptions').change(function () {
	if ($('#alarm24ValiditionOptions').val() == '2') {
    $("#alarm24HostagesOptions").val('0');
		$('#alarm24HostagesOptions').trigger('change');
		$('#alarm24HostagesOptions').attr('disabled', 'disabled');
		$('#alarm24ValiditionOptionYes').css('display', 'none');
		$('#alarm24HostagesOptionYes').css('display', 'none');
		$('#alarm24HostagesOptionNo').css('display', 'none');
	}
});

$("#alarm24HostagesCheck").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm24HostagesOptions').removeAttr('disabled');
	} else {
		$("#alarm24HostagesOptions").val('0');
		$('#alarm24HostagesOptions').trigger('change');
		$('#alarm24HostagesOptions').attr('disabled', 'disabled');
	}
});
$("#alarm24HostagesOptionYesCallP").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm24YesCallP').removeAttr('disabled');
	} else {
		$("#alarm24YesCallP").val('0');
		$('#alarm24YesCallP').trigger('change');
		$('#alarm24YesCallP').attr('disabled', 'disabled');
	}
});

$('#alarm24HostagesOptions').change(function () {
	if ($('#alarm24HostagesOptions').val() == '1') {
		$('#alarm24HostagesOptionYes').css('display', 'flex');
	} else {
		$('#alarm24HostagesOptionYes').css('display', 'none');
	}
});
$('#alarm24HostagesOptions').change(function () {
	if ($('#alarm24HostagesOptions').val() == '2') {
		$('#alarm24HostagesOptionNo').css('display', 'flex');
	} else {
		$('#alarm24HostagesOptionNo').css('display', 'none');
	}
});

$("#alarm24HostagesOptionNoCallP").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm24NoCallP').removeAttr('disabled');
	} else {
		$("#alarm24NoCallP").val('0');
		$('#alarm24NoCallP').trigger('change');
		$('#alarm24NoCallP').attr('disabled', 'disabled');
	}
});

// Alarm24 RTPs
$("#unObjRTP1").click(function () {
  $(this).addClass('active');
	$('#alarm24RTPDisplayControls').css('display', 'flex');
	$('#alarm24RTPsDisplay').addClass('unObjAlaEvent1');
	$('#alarm24RTPDisplayControls').children('.playAlarm24Event1').show();
});
$("#closeDocument24RTP1").click(function () {
	$('#alarm24RTPDisplayControls').css('display', 'none');
	$('#alarm24DetStyle4 .alarmEventsDocument').removeClass("active");
	$('#alarm24RTPsDisplay').removeClass('unObjAlaEvent1');
});

// Alarm24 events videos
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

$(".playAlarm24Event1").click(function () {
	var lightBoxVideo = document.getElementById("Alarm24Event1");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#Alarm24Event1").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});
// Site map video mapper
$("#alarm24TP").click(function () {
	$('#alarm24Mapper').css('display', 'flex');
});
$("#alarm24CloseMapper").click(function () {
	$('#alarm24Mapper').css('display', 'none');
});