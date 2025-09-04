// Alarm32 (Gun Detection) details tabs
function openAlarm32DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm32DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm32DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm32 events
$("#gunDetEvent2").click(function () {
	$(this).addClass('active');
	$('#alarm32EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm32EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm32").click(function () {
	$('#gunDetEvent2').removeClass('active');
	$('#alarm32EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm32EventDescription').addClass('inact');
});

// Alarm32 SOP
$("#alarm32Validition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm32ValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm32ValiditionOptions, #alarm32Handle").val('0');
		$('#alarm32ValiditionOptions, #alarm32Handle').trigger('change');
		$('#alarm32ValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#eventAlarm32Handle").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm32Handle').removeAttr('disabled');
	} else {
		$("#alarm32Handle").val('0');
		$('#alarm32Handle').trigger('change');
		$('#alarm32Handle').attr('disabled', 'disabled');
	}
});

$('#alarm32ValiditionOptions').change(function () {
	if ($('#alarm32ValiditionOptions').val() == '1') {
		$('#alarm32ValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm32ValiditionOptionYes').css('display', 'none');
	}
});

// Alarm32 RTPs
$("#gunDetRTP2").click(function () {
	$(this).addClass('active');
	$('#alarm32RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm32RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm32").click(function () {
	$('#gunDetRTP2').removeClass('active');
	$('#alarm32RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm32RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm32TP").click(function () {
	$('#alarm32Mapper').css('display', 'flex');
});
$("#alarm32CloseMapper").click(function () {
	$('#alarm32Mapper').css('display', 'none');
});