// Alarm 75 (Pump low water level) details tabs
function openAlarm75DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm75DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm75DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm75DetStyle1 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm75EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm75EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm75").click(function () {
	$('#alarm75DetStyle1 .alarmEventsDocument').removeClass('active');
	$('#alarm75EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm75EventDescription').addClass('inact');
});

// Alarm SOP
$("#alarm75DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm75DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm75DetStyle3 .alarmValiditionOptions, #alarm75DetStyle3 .alarmHandle").val('0');
		$('#alarm75DetStyle3 .alarmValiditionOptions, #alarm75DetStyle3 .alarmHandle').trigger('change');
		$('#alarm75DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm75DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm75DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm75DetStyle3 .alarmHandle").val('0');
		$('#alarm75DetStyle3 .alarmHandle').trigger('change');
		$('#alarm75DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm75DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm75DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm75DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm75DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm75DetStyle4 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm75RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm75RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm75").click(function () {
	$('#alarm75DetStyle4 .alarmEventsDocument').removeClass('active');
	$('#alarm75RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm75RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm75TP").click(function () {
	$('#alarm75Mapper').css('display', 'flex');
});
$("#alarm75CloseMapper").click(function () {
	$('#alarm75Mapper').css('display', 'none');
});