// Alarm53 (Unattended Object) details tabs
function openAlarm53DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm53DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm53DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm53 events
$("#alarm53Event1").click(function () {
	$(this).addClass('active');
	$('#alarm53DisplayControls').css('display', 'flex');
	$('#alarm53ModEventsDisplay').addClass('alarm53Event1');
	$('#alarm53DisplayControls').children('.playAlarm53Event1').show();
});
$("#closeDocumentAlarm53").click(function () {
	$('#alarm53DisplayControls').css('display', 'none');
	$('#alarm53DetStyle1 .alarmEventsDocument').removeClass("active");
	$('#alarm53ModEventsDisplay').removeClass('alarm53Event1');
});

// Alarm53 SOP
$("#alarm53Validition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm53ValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm53ValiditionOptions, #alarm53HostagesOptions").val('0');
		$('#alarm53ValiditionOptions, #alarm53HostagesOptions').trigger('change');
		$('#alarm53ValiditionOptions').attr('disabled', 'disabled');
	}
});

$('#alarm53ValiditionOptions').change(function () {
	if ($('#alarm53ValiditionOptions').val() == '1') {
		$('#alarm53ValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm53ValiditionOptionYes').css('display', 'none');
	}
});

$('#alarm53ValiditionOptions').change(function () {
	if ($('#alarm53ValiditionOptions').val() == '2') {
    $("#alarm53HostagesOptions").val('0');
		$('#alarm53HostagesOptions').trigger('change');
		$('#alarm53HostagesOptions').attr('disabled', 'disabled');
		$('#alarm53ValiditionOptionYes').css('display', 'none');
		$('#alarm53HostagesOptionYes').css('display', 'none');
		$('#alarm53HostagesOptionNo').css('display', 'none');
	}
});

$("#alarm53HostagesCheck").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm53HostagesOptions').removeAttr('disabled');
	} else {
		$("#alarm53HostagesOptions").val('0');
		$('#alarm53HostagesOptions').trigger('change');
		$('#alarm53HostagesOptions').attr('disabled', 'disabled');
	}
});
$("#alarm53HostagesOptionYesCallP").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm53YesCallP').removeAttr('disabled');
	} else {
		$("#alarm53YesCallP").val('0');
		$('#alarm53YesCallP').trigger('change');
		$('#alarm53YesCallP').attr('disabled', 'disabled');
	}
});

$('#alarm53HostagesOptions').change(function () {
	if ($('#alarm53HostagesOptions').val() == '1') {
		$('#alarm53HostagesOptionYes').css('display', 'flex');
	} else {
		$('#alarm53HostagesOptionYes').css('display', 'none');
	}
});
$('#alarm53HostagesOptions').change(function () {
	if ($('#alarm53HostagesOptions').val() == '2') {
		$('#alarm53HostagesOptionNo').css('display', 'flex');
	} else {
		$('#alarm53HostagesOptionNo').css('display', 'none');
	}
});

$("#alarm53HostagesOptionNoCallP").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm53NoCallP').removeAttr('disabled');
	} else {
		$("#alarm53NoCallP").val('0');
		$('#alarm53NoCallP').trigger('change');
		$('#alarm53NoCallP').attr('disabled', 'disabled');
	}
});

// Alarm53 RTPs
$("#alarm53RTP1").click(function () {
  $(this).addClass('active');
	$('#alarm53RTPDisplayControls').css('display', 'flex');
	$('#alarm53RTPsDisplay').addClass('alarm53Event1');
	$('#alarm53RTPDisplayControls').children('.playAlarm53Event1').show();
});
$("#closeDocument53RTP1").click(function () {
	$('#alarm53RTPDisplayControls').css('display', 'none');
	$('#alarm53DetStyle4 .alarmEventsDocument').removeClass("active");
	$('#alarm53RTPsDisplay').removeClass('alarm53Event1');
});

// Alarm53 events videos
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

$(".playAlarm53Event1").click(function () {
	var lightBoxVideo = document.getElementById("Alarm53Event1");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#Alarm53Event1").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});
// Site map video mapper
$("#alarm53TP").click(function () {
	$('#alarm53Mapper').css('display', 'flex');
});
$("#alarm53CloseMapper").click(function () {
	$('#alarm53Mapper').css('display', 'none');
});