// Alarm14 (Protected Area) details tabs
function openAlarm14DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm14DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm14DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm14 events
$("#protcAreaEvent1").click(function () {
	$(this).addClass('active');
	$('#alarm14DisplayControls').css('display', 'flex');
	$('#alarm14ModEventsDisplay').addClass('protcAreaEvent1');
	$('#alarm14DisplayControls').children('.playAlarm14Event1').show();
});
$("#closeDocumentAlarm14").click(function () {
	$('#alarm14DisplayControls').css('display', 'none');
	$('#alarm14DetStyle1 .alarmEventsDocument').removeClass("active");
	$('#alarm14ModEventsDisplay').removeClass('protcAreaEvent1');
});

// Alarm14 SOP
$("#alarm14Validition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm14ValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm14ValiditionOptions, #alarm14HostagesOptions").val('0');
		$('#alarm14ValiditionOptions, #alarm14HostagesOptions').trigger('change');
		$('#alarm14ValiditionOptions').attr('disabled', 'disabled');
	}
});

$('#alarm14ValiditionOptions').change(function () {
	if ($('#alarm14ValiditionOptions').val() == '1') {
		$('#alarm14ValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm14ValiditionOptionYes').css('display', 'none');
	}
});

$('#alarm14ValiditionOptions').change(function () {
	if ($('#alarm14ValiditionOptions').val() == '2') {
    $("#alarm14HostagesOptions").val('0');
		$('#alarm14HostagesOptions').trigger('change');
		$('#alarm14HostagesOptions').attr('disabled', 'disabled');
		$('#alarm14ValiditionOptionYes').css('display', 'none');
		$('#alarm14HostagesOptionYes').css('display', 'none');
		$('#alarm14HostagesOptionNo').css('display', 'none');
	}
});

$("#alarm14HostagesCheck").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm14HostagesOptions').removeAttr('disabled');
	} else {
		$("#alarm14HostagesOptions").val('0');
		$('#alarm14HostagesOptions').trigger('change');
		$('#alarm14HostagesOptions').attr('disabled', 'disabled');
	}
});
$("#alarm14HostagesOptionYesCallP").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm14YesCallP').removeAttr('disabled');
	} else {
		$("#alarm14YesCallP").val('0');
		$('#alarm14YesCallP').trigger('change');
		$('#alarm14YesCallP').attr('disabled', 'disabled');
	}
});

$('#alarm14HostagesOptions').change(function () {
	if ($('#alarm14HostagesOptions').val() == '1') {
		$('#alarm14HostagesOptionYes').css('display', 'flex');
	} else {
		$('#alarm14HostagesOptionYes').css('display', 'none');
	}
});
$('#alarm14HostagesOptions').change(function () {
	if ($('#alarm14HostagesOptions').val() == '2') {
		$('#alarm14HostagesOptionNo').css('display', 'flex');
	} else {
		$('#alarm14HostagesOptionNo').css('display', 'none');
	}
});

$("#alarm14HostagesOptionNoCallP").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm14NoCallP').removeAttr('disabled');
	} else {
		$("#alarm14NoCallP").val('0');
		$('#alarm14NoCallP').trigger('change');
		$('#alarm14NoCallP').attr('disabled', 'disabled');
	}
});

// Alarm14 RTPs
$("#protcAreaRTP1").click(function () {
  $(this).addClass('active');
	$('#alarm14RTPDisplayControls').css('display', 'flex');
	$('#alarm14RTPsDisplay').addClass('protcAreaEvent1');
	$('#alarm14RTPDisplayControls').children('.playAlarm14Event1').show();
});
$("#closeDocument14RTP1").click(function () {
	$('#alarm14RTPDisplayControls').css('display', 'none');
	$('#alarm14DetStyle4 .alarmEventsDocument').removeClass("active");
	$('#alarm14RTPsDisplay').removeClass('protcAreaEvent1');
});

// Alarm14 events videos
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

$(".playAlarm14Event1").click(function () {
	var lightBoxVideo = document.getElementById("Alarm14Event1");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#Alarm14Event1").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});
// Site map video mapper
$("#alarm14TP").click(function () {
	$('#alarm14Mapper').css('display', 'flex');
});
$("#alarm14CloseMapper").click(function () {
	$('#alarm14Mapper').css('display', 'none');
});