// Alarm 74 (High water pressure) details tabs
function openAlarm74DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm74DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm74DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm74DetStyle1 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm74EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm74EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm74").click(function () {
	$('#alarm74DetStyle1 .alarmEventsDocument').removeClass('active');
	$('#alarm74EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm74EventDescription').addClass('inact');
});

// Alarm SOP
$("#alarm74DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm74DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm74DetStyle3 .alarmValiditionOptions, #alarm74DetStyle3 .alarmHandle").val('0');
		$('#alarm74DetStyle3 .alarmValiditionOptions, #alarm74DetStyle3 .alarmHandle').trigger('change');
		$('#alarm74DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm74DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm74DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm74DetStyle3 .alarmHandle").val('0');
		$('#alarm74DetStyle3 .alarmHandle').trigger('change');
		$('#alarm74DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm74DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm74DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm74DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm74DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm74DetStyle4 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm74RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm74RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm74").click(function () {
	$('#alarm74DetStyle4 .alarmEventsDocument').removeClass('active');
	$('#alarm74RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm74RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm74TP").click(function () {
	$('#alarm74Mapper').css('display', 'flex');
});
$("#alarm74CloseMapper").click(function () {
	$('#alarm74Mapper').css('display', 'none');
});