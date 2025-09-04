// Alarm36 (Drugs Detection) details tabs
function openAlarm36DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm36DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm36DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm36 events
$("#drugsDetEvent2").click(function () {
	$(this).addClass('active');
	$('#alarm36EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm36EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm36").click(function () {
	$('#drugsDetEvent2').removeClass('active');
	$('#alarm36EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm36EventDescription').addClass('inact');
});

// Alarm36 SOP
$("#alarm36Validition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm36ValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm36ValiditionOptions, #alarm36Handle").val('0');
		$('#alarm36ValiditionOptions, #alarm36Handle').trigger('change');
		$('#alarm36ValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#eventAlarm36Handle").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm36Handle').removeAttr('disabled');
	} else {
		$("#alarm36Handle").val('0');
		$('#alarm36Handle').trigger('change');
		$('#alarm36Handle').attr('disabled', 'disabled');
	}
});

$('#alarm36ValiditionOptions').change(function () {
	if ($('#alarm36ValiditionOptions').val() == '1') {
		$('#alarm36ValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm36ValiditionOptionYes').css('display', 'none');
	}
});

// Alarm36 RTPs
$("#drugsDetRTP2").click(function () {
	$(this).addClass('active');
	$('#alarm36RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm36RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm36").click(function () {
	$('#drugsDetRTP2').removeClass('active');
	$('#alarm36RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm36RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm36TP").click(function () {
	$('#alarm36Mapper').css('display', 'flex');
});
$("#alarm36CloseMapper").click(function () {
	$('#alarm36Mapper').css('display', 'none');
});