// Alarm85 (Water Flood Detection) details tabs
function openAlarm85DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm85DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm85DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm85 events
$("#alarm85Event1").click(function () {
	$(this).addClass('active');
	$('#alarm85EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm85EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm85").click(function () {
	$('#alarm85Event1').removeClass('active');
	$('#alarm85EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm85EventDescription').addClass('inact');
});

// Alarm85 SOP
$("#alarm85Validition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm85ValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm85ValiditionOptions, #alarm85Handle").val('0');
		$('#alarm85ValiditionOptions, #alarm85Handle').trigger('change');
		$('#alarm85ValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#eventAlarm85Handle").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm85Handle').removeAttr('disabled');
	} else {
		$("#alarm85Handle").val('0');
		$('#alarm85Handle').trigger('change');
		$('#alarm85Handle').attr('disabled', 'disabled');
	}
});

$('#alarm85ValiditionOptions').change(function () {
	if ($('#alarm85ValiditionOptions').val() == '1') {
		$('#alarm85ValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm85ValiditionOptionYes').css('display', 'none');
	}
});

// Alarm85 RTPs
$("#alarm85RTP1").click(function () {
	$(this).addClass('active');
	$('#alarm85RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm85RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm85").click(function () {
	$('#alarm85RTP1').removeClass('active');
	$('#alarm85RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm85RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm85TP").click(function () {
	$('#alarm85Mapper').css('display', 'flex');
});
$("#alarm85CloseMapper").click(function () {
	$('#alarm85Mapper').css('display', 'none');
});