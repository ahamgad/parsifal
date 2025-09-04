// Alarm19 (Laying Person) details tabs
function openAlarm19DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm19DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm19DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm19 events
$("#fallNdFighEvent1").click(function () {
	$(this).addClass('active');
	$('#alarm19DisplayControls').css('display', 'flex');
	$('#alarm19ModEventsDisplay').addClass('fallNdFighEvent1');
	$('#alarm19DisplayControls').children('.playAlarm19Event1').show();
});
$("#closeDocumentAlarm19").click(function () {
	$('#alarm19DisplayControls').css('display', 'none');
	$('#alarm19DetStyle1 .alarmEventsDocument').removeClass("active");
	$('#alarm19ModEventsDisplay').removeClass('fallNdFighEvent1');
});

// Alarm19 SOP
$("#alarm19Validition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm19ValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm19ValiditionOptions, #alarm19HostagesOptions").val('0');
		$('#alarm19ValiditionOptions, #alarm19HostagesOptions').trigger('change');
		$('#alarm19ValiditionOptions').attr('disabled', 'disabled');
	}
});

$('#alarm19ValiditionOptions').change(function () {
	if ($('#alarm19ValiditionOptions').val() == '1') {
		$('#alarm19ValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm19ValiditionOptionYes').css('display', 'none');
	}
});

$('#alarm19ValiditionOptions').change(function () {
	if ($('#alarm19ValiditionOptions').val() == '2') {
    $("#alarm19HostagesOptions").val('0');
		$('#alarm19HostagesOptions').trigger('change');
		$('#alarm19HostagesOptions').attr('disabled', 'disabled');
		$('#alarm19ValiditionOptionYes').css('display', 'none');
		$('#alarm19HostagesOptionYes').css('display', 'none');
		$('#alarm19HostagesOptionNo').css('display', 'none');
	}
});

$("#alarm19HostagesCheck").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm19HostagesOptions').removeAttr('disabled');
	} else {
		$("#alarm19HostagesOptions").val('0');
		$('#alarm19HostagesOptions').trigger('change');
		$('#alarm19HostagesOptions').attr('disabled', 'disabled');
	}
});
$("#alarm19HostagesOptionYesCallP").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm19YesCallP').removeAttr('disabled');
	} else {
		$("#alarm19YesCallP").val('0');
		$('#alarm19YesCallP').trigger('change');
		$('#alarm19YesCallP').attr('disabled', 'disabled');
	}
});

$('#alarm19HostagesOptions').change(function () {
	if ($('#alarm19HostagesOptions').val() == '1') {
		$('#alarm19HostagesOptionYes').css('display', 'flex');
	} else {
		$('#alarm19HostagesOptionYes').css('display', 'none');
	}
});
$('#alarm19HostagesOptions').change(function () {
	if ($('#alarm19HostagesOptions').val() == '2') {
		$('#alarm19HostagesOptionNo').css('display', 'flex');
	} else {
		$('#alarm19HostagesOptionNo').css('display', 'none');
	}
});

$("#alarm19HostagesOptionNoCallP").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm19NoCallP').removeAttr('disabled');
	} else {
		$("#alarm19NoCallP").val('0');
		$('#alarm19NoCallP').trigger('change');
		$('#alarm19NoCallP').attr('disabled', 'disabled');
	}
});

// Alarm19 RTPs
$("#fallNdFighRTP1").click(function () {
  $(this).addClass('active');
	$('#alarm19RTPDisplayControls').css('display', 'flex');
	$('#alarm19RTPsDisplay').addClass('fallNdFighEvent1');
	$('#alarm19RTPDisplayControls').children('.playAlarm19Event1').show();
});
$("#closeDocument19RTP1").click(function () {
	$('#alarm19RTPDisplayControls').css('display', 'none');
	$('#alarm19DetStyle4 .alarmEventsDocument').removeClass("active");
	$('#alarm19RTPsDisplay').removeClass('fallNdFighEvent1');
});

// Alarm19 events videos
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

$(".playAlarm19Event1").click(function () {
	var lightBoxVideo = document.getElementById("Alarm19Event1");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#Alarm19Event1").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});
// Site map video mapper
$("#alarm19TP").click(function () {
	$('#alarm19Mapper').css('display', 'flex');
});
$("#alarm19CloseMapper").click(function () {
	$('#alarm19Mapper').css('display', 'none');
});