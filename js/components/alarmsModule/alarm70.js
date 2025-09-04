// Alarm 70 (Low soil moisture level) details tabs
function openAlarm70DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm70DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm70DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm70DetStyle1 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm70EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm70EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm70").click(function () {
	$('#alarm70DetStyle1 .alarmEventsDocument').removeClass('active');
	$('#alarm70EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm70EventDescription').addClass('inact');
});

// Alarm SOP
$("#alarm70DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm70DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm70DetStyle3 .alarmValiditionOptions, #alarm70DetStyle3 .alarmHandle").val('0');
		$('#alarm70DetStyle3 .alarmValiditionOptions, #alarm70DetStyle3 .alarmHandle').trigger('change');
		$('#alarm70DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm70DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm70DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm70DetStyle3 .alarmHandle").val('0');
		$('#alarm70DetStyle3 .alarmHandle').trigger('change');
		$('#alarm70DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm70DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm70DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm70DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm70DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm70DetStyle4 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm70RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm70RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm70").click(function () {
	$('#alarm70DetStyle4 .alarmEventsDocument').removeClass('active');
	$('#alarm70RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm70RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm70TP").click(function () {
	$('#alarm70Mapper').css('display', 'flex');
});
$("#alarm70CloseMapper").click(function () {
	$('#alarm70Mapper').css('display', 'none');
});