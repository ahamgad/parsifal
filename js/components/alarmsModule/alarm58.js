// Alarm58 (Gun Detection) details tabs
function openAlarm58DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm58DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm58DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm58 events
$("#alarm58Event1").click(function () {
	$(this).addClass('active');
	$('#alarm58EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm58EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm58").click(function () {
	$('#alarm58Event1').removeClass('active');
	$('#alarm58EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm58EventDescription').addClass('inact');
});

// Alarm58 SOP
$("#alarm58Validition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm58ValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm58ValiditionOptions, #alarm58Handle").val('0');
		$('#alarm58ValiditionOptions, #alarm58Handle').trigger('change');
		$('#alarm58ValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#eventAlarm58Handle").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm58Handle').removeAttr('disabled');
	} else {
		$("#alarm58Handle").val('0');
		$('#alarm58Handle').trigger('change');
		$('#alarm58Handle').attr('disabled', 'disabled');
	}
});

$('#alarm58ValiditionOptions').change(function () {
	if ($('#alarm58ValiditionOptions').val() == '1') {
		$('#alarm58ValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm58ValiditionOptionYes').css('display', 'none');
	}
});

// Alarm58 RTPs
$("#alarm58RTP1").click(function () {
	$(this).addClass('active');
	$('#alarm58RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm58RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm58").click(function () {
	$('#alarm58RTP1').removeClass('active');
	$('#alarm58RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm58RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm58TP").click(function () {
	$('#alarm58Mapper').css('display', 'flex');
});
$("#alarm58CloseMapper").click(function () {
	$('#alarm58Mapper').css('display', 'none');
});