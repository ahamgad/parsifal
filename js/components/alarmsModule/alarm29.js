// Alarm29 (Removed Object) details tabs
function openAlarm29DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm29DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm29DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm29 events
$("#removedObjEvent2").click(function () {
	$(this).addClass('active');
	$('#alarm29DisplayControls').css('display', 'flex');
	$('#alarm29ModEventsDisplay').addClass('removedObjEvent1');
	$('#alarm29DisplayControls').children('.playAlarm29Event1').show();
});
$("#closeDocumentAlarm29").click(function () {
	$('#alarm29DisplayControls').css('display', 'none');
	$('#alarm29DetStyle1 .alarmEventsDocument').removeClass("active");
	$('#alarm29ModEventsDisplay').removeClass('removedObjEvent1');
});

// Alarm29 SOP
$("#alarm29Validition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm29ValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm29ValiditionOptions, #alarm29HostagesOptions").val('0');
		$('#alarm29ValiditionOptions, #alarm29HostagesOptions').trigger('change');
		$('#alarm29ValiditionOptions').attr('disabled', 'disabled');
	}
});

$('#alarm29ValiditionOptions').change(function () {
	if ($('#alarm29ValiditionOptions').val() == '1') {
		$('#alarm29ValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm29ValiditionOptionYes').css('display', 'none');
	}
});

$('#alarm29ValiditionOptions').change(function () {
	if ($('#alarm29ValiditionOptions').val() == '2') {
    $("#alarm29HostagesOptions").val('0');
		$('#alarm29HostagesOptions').trigger('change');
		$('#alarm29HostagesOptions').attr('disabled', 'disabled');
		$('#alarm29ValiditionOptionYes').css('display', 'none');
		$('#alarm29HostagesOptionYes').css('display', 'none');
		$('#alarm29HostagesOptionNo').css('display', 'none');
	}
});

$("#alarm29HostagesCheck").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm29HostagesOptions').removeAttr('disabled');
	} else {
		$("#alarm29HostagesOptions").val('0');
		$('#alarm29HostagesOptions').trigger('change');
		$('#alarm29HostagesOptions').attr('disabled', 'disabled');
	}
});
$("#alarm29HostagesOptionYesCallP").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm29YesCallP').removeAttr('disabled');
	} else {
		$("#alarm29YesCallP").val('0');
		$('#alarm29YesCallP').trigger('change');
		$('#alarm29YesCallP').attr('disabled', 'disabled');
	}
});

$('#alarm29HostagesOptions').change(function () {
	if ($('#alarm29HostagesOptions').val() == '1') {
		$('#alarm29HostagesOptionYes').css('display', 'flex');
	} else {
		$('#alarm29HostagesOptionYes').css('display', 'none');
	}
});
$('#alarm29HostagesOptions').change(function () {
	if ($('#alarm29HostagesOptions').val() == '2') {
		$('#alarm29HostagesOptionNo').css('display', 'flex');
	} else {
		$('#alarm29HostagesOptionNo').css('display', 'none');
	}
});

$("#alarm29HostagesOptionNoCallP").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm29NoCallP').removeAttr('disabled');
	} else {
		$("#alarm29NoCallP").val('0');
		$('#alarm29NoCallP').trigger('change');
		$('#alarm29NoCallP').attr('disabled', 'disabled');
	}
});

// Alarm29 RTPs
$("#removedObjRTP2").click(function () {
  $(this).addClass('active');
	$('#alarm29RTPDisplayControls').css('display', 'flex');
	$('#alarm29RTPsDisplay').addClass('removedObjEvent1');
	$('#alarm29RTPDisplayControls').children('.playAlarm29Event1').show();
});
$("#closeDocument29RTP1").click(function () {
	$('#alarm29RTPDisplayControls').css('display', 'none');
	$('#alarm29DetStyle4 .alarmEventsDocument').removeClass("active");
	$('#alarm29RTPsDisplay').removeClass('removedObjEvent1');
});

// Alarm29 events videos
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

$(".playAlarm29Event1").click(function () {
	var lightBoxVideo = document.getElementById("Alarm29Event1");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#Alarm29Event1").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});
// Site map video mapper
$("#alarm29TP").click(function () {
	$('#alarm29Mapper').css('display', 'flex');
});
$("#alarm29CloseMapper").click(function () {
	$('#alarm29Mapper').css('display', 'none');
});