// Alarm20 (Crowd Detection) details tabs
function openAlarm20DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm20DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm20DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm20 events
$("#loiteringDetEvent1").click(function () {
	$(this).addClass('active');
	$('#alarm20DisplayControls').css('display', 'flex');
	$('#alarm20ModEventsDisplay').addClass('loiteringDetEvent1');
	$('#alarm20DisplayControls').children('.playAlarm20Event1').show();
});
$("#closeDocumentAlarm20").click(function () {
	$('#alarm20DisplayControls').css('display', 'none');
	$('#alarm20DetStyle1 .alarmEventsDocument').removeClass("active");
	$('#alarm20ModEventsDisplay').removeClass('loiteringDetEvent1');
});

// Alarm20 SOP
$("#alarm20Validition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm20ValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm20ValiditionOptions, #alarm20HostagesOptions").val('0');
		$('#alarm20ValiditionOptions, #alarm20HostagesOptions').trigger('change');
		$('#alarm20ValiditionOptions').attr('disabled', 'disabled');
	}
});

$('#alarm20ValiditionOptions').change(function () {
	if ($('#alarm20ValiditionOptions').val() == '1') {
		$('#alarm20ValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm20ValiditionOptionYes').css('display', 'none');
	}
});

$('#alarm20ValiditionOptions').change(function () {
	if ($('#alarm20ValiditionOptions').val() == '2') {
    $("#alarm20HostagesOptions").val('0');
		$('#alarm20HostagesOptions').trigger('change');
		$('#alarm20HostagesOptions').attr('disabled', 'disabled');
		$('#alarm20ValiditionOptionYes').css('display', 'none');
		$('#alarm20HostagesOptionYes').css('display', 'none');
		$('#alarm20HostagesOptionNo').css('display', 'none');
	}
});

$("#alarm20HostagesCheck").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm20HostagesOptions').removeAttr('disabled');
	} else {
		$("#alarm20HostagesOptions").val('0');
		$('#alarm20HostagesOptions').trigger('change');
		$('#alarm20HostagesOptions').attr('disabled', 'disabled');
	}
});
$("#alarm20HostagesOptionYesCallP").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm20YesCallP').removeAttr('disabled');
	} else {
		$("#alarm20YesCallP").val('0');
		$('#alarm20YesCallP').trigger('change');
		$('#alarm20YesCallP').attr('disabled', 'disabled');
	}
});

$('#alarm20HostagesOptions').change(function () {
	if ($('#alarm20HostagesOptions').val() == '1') {
		$('#alarm20HostagesOptionYes').css('display', 'flex');
	} else {
		$('#alarm20HostagesOptionYes').css('display', 'none');
	}
});
$('#alarm20HostagesOptions').change(function () {
	if ($('#alarm20HostagesOptions').val() == '2') {
		$('#alarm20HostagesOptionNo').css('display', 'flex');
	} else {
		$('#alarm20HostagesOptionNo').css('display', 'none');
	}
});

$("#alarm20HostagesOptionNoCallP").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm20NoCallP').removeAttr('disabled');
	} else {
		$("#alarm20NoCallP").val('0');
		$('#alarm20NoCallP').trigger('change');
		$('#alarm20NoCallP').attr('disabled', 'disabled');
	}
});

// Alarm20 RTPs
$("#loiteringDetRTP1").click(function () {
  $(this).addClass('active');
	$('#alarm20RTPDisplayControls').css('display', 'flex');
	$('#alarm20RTPsDisplay').addClass('loiteringDetEvent1');
	$('#alarm20RTPDisplayControls').children('.playAlarm20Event1').show();
});
$("#closeDocument20RTP1").click(function () {
	$('#alarm20RTPDisplayControls').css('display', 'none');
	$('#alarm20DetStyle4 .alarmEventsDocument').removeClass("active");
	$('#alarm20RTPsDisplay').removeClass('loiteringDetEvent1');
});

// Alarm20 events videos
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

$(".playAlarm20Event1").click(function () {
	var lightBoxVideo = document.getElementById("Alarm20Event1");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#Alarm20Event1").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});
// Site map video mapper
$("#alarm20TP").click(function () {
	$('#alarm20Mapper').css('display', 'flex');
});
$("#alarm20CloseMapper").click(function () {
	$('#alarm20Mapper').css('display', 'none');
});