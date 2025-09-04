// Alarm38 (Unattended Object) details tabs
function openAlarm38DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm38DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm38DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm38 events
$("#unObjAlaEvent2").click(function () {
	$(this).addClass('active');
	$('#alarm38DisplayControls').css('display', 'flex');
	$('#alarm38ModEventsDisplay').addClass('unObjAlaEvent1');
	$('#alarm38DisplayControls').children('.playAlarm38Event1').show();
});
$("#closeDocumentAlarm38").click(function () {
	$('#alarm38DisplayControls').css('display', 'none');
	$('#alarm38DetStyle1 .alarmEventsDocument').removeClass("active");
	$('#alarm38ModEventsDisplay').removeClass('unObjAlaEvent1');
});

// Alarm38 SOP
$("#alarm38Validition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm38ValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm38ValiditionOptions, #alarm38HostagesOptions").val('0');
		$('#alarm38ValiditionOptions, #alarm38HostagesOptions').trigger('change');
		$('#alarm38ValiditionOptions').attr('disabled', 'disabled');
	}
});

$('#alarm38ValiditionOptions').change(function () {
	if ($('#alarm38ValiditionOptions').val() == '1') {
		$('#alarm38ValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm38ValiditionOptionYes').css('display', 'none');
	}
});

$('#alarm38ValiditionOptions').change(function () {
	if ($('#alarm38ValiditionOptions').val() == '2') {
    $("#alarm38HostagesOptions").val('0');
		$('#alarm38HostagesOptions').trigger('change');
		$('#alarm38HostagesOptions').attr('disabled', 'disabled');
		$('#alarm38ValiditionOptionYes').css('display', 'none');
		$('#alarm38HostagesOptionYes').css('display', 'none');
		$('#alarm38HostagesOptionNo').css('display', 'none');
	}
});

$("#alarm38HostagesCheck").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm38HostagesOptions').removeAttr('disabled');
	} else {
		$("#alarm38HostagesOptions").val('0');
		$('#alarm38HostagesOptions').trigger('change');
		$('#alarm38HostagesOptions').attr('disabled', 'disabled');
	}
});
$("#alarm38HostagesOptionYesCallP").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm38YesCallP').removeAttr('disabled');
	} else {
		$("#alarm38YesCallP").val('0');
		$('#alarm38YesCallP').trigger('change');
		$('#alarm38YesCallP').attr('disabled', 'disabled');
	}
});

$('#alarm38HostagesOptions').change(function () {
	if ($('#alarm38HostagesOptions').val() == '1') {
		$('#alarm38HostagesOptionYes').css('display', 'flex');
	} else {
		$('#alarm38HostagesOptionYes').css('display', 'none');
	}
});
$('#alarm38HostagesOptions').change(function () {
	if ($('#alarm38HostagesOptions').val() == '2') {
		$('#alarm38HostagesOptionNo').css('display', 'flex');
	} else {
		$('#alarm38HostagesOptionNo').css('display', 'none');
	}
});

$("#alarm38HostagesOptionNoCallP").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm38NoCallP').removeAttr('disabled');
	} else {
		$("#alarm38NoCallP").val('0');
		$('#alarm38NoCallP').trigger('change');
		$('#alarm38NoCallP').attr('disabled', 'disabled');
	}
});

// Alarm38 RTPs
$("#unObjRTP2").click(function () {
  $(this).addClass('active');
	$('#alarm38RTPDisplayControls').css('display', 'flex');
	$('#alarm38RTPsDisplay').addClass('unObjAlaEvent1');
	$('#alarm38RTPDisplayControls').children('.playAlarm38Event1').show();
});
$("#closeDocument38RTP1").click(function () {
	$('#alarm38RTPDisplayControls').css('display', 'none');
	$('#alarm38DetStyle4 .alarmEventsDocument').removeClass("active");
	$('#alarm38RTPsDisplay').removeClass('unObjAlaEvent1');
});

// Alarm38 events videos
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

$(".playAlarm38Event1").click(function () {
	var lightBoxVideo = document.getElementById("Alarm38Event1");
	$("#alarmEventVideoFadeLight video").attr("style", "display:none");
	$("#Alarm24Event1").attr("style", "display:block");
	lightbox_open(lightBoxVideo);
});
// Site map video mapper
$("#alarm38TP").click(function () {
	$('#alarm38Mapper').css('display', 'flex');
});
$("#alarm38CloseMapper").click(function () {
	$('#alarm38Mapper').css('display', 'none');
});