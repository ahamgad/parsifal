// Alarm27 (Animals Detection) details tabs
function openAlarm27DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm27DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm27DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm27 events
$("#animalDetEvent2").click(function () {
	$(this).addClass('active');
	$('#alarm27EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm27EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm27").click(function () {
	$('#animalDetEvent2').removeClass('active');
	$('#alarm27EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm27EventDescription').addClass('inact');
});

// Alarm27 SOP
$("#alarm27Validition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm27ValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm27ValiditionOptions, #alarm27Handle").val('0');
		$('#alarm27ValiditionOptions, #alarm27Handle').trigger('change');
		$('#alarm27ValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#eventAlarm27Handle").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm27Handle').removeAttr('disabled');
	} else {
		$("#alarm27Handle").val('0');
		$('#alarm27Handle').trigger('change');
		$('#alarm27Handle').attr('disabled', 'disabled');
	}
});

$('#alarm27ValiditionOptions').change(function () {
	if ($('#alarm27ValiditionOptions').val() == '1') {
		$('#alarm27ValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm27ValiditionOptionYes').css('display', 'none');
	}
});

// Alarm27 RTPs
$("#animalDetRTP2").click(function () {
	$(this).addClass('active');
	$('#alarm27RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm27RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm27").click(function () {
	$('#animalDetRTP2').removeClass('active');
	$('#alarm27RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm27RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm27TP").click(function () {
	$('#alarm27Mapper').css('display', 'flex');
});
$("#alarm27CloseMapper").click(function () {
	$('#alarm27Mapper').css('display', 'none');
});