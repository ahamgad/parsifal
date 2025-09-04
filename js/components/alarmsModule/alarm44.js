// Alarm44 (High Purchase Detected) details tabs
function openAlarm44DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm44DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm44DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm44DetStyle1 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm44EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm44EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm44").click(function () {
	$('#alarm44DetStyle1 .alarmEventsDocument').removeClass('active');
	$('#alarm44EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm44EventDescription').addClass('inact');
});

// Alarm SOP
$("#alarm44DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm44DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm44DetStyle3 .alarmValiditionOptions, #alarm44DetStyle3 .alarmHandle").val('0');
		$('#alarm44DetStyle3 .alarmValiditionOptions, #alarm44DetStyle3 .alarmHandle').trigger('change');
		$('#alarm44DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm44DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm44DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm44DetStyle3 .alarmHandle").val('0');
		$('#alarm44DetStyle3 .alarmHandle').trigger('change');
		$('#alarm44DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm44DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm44DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm44DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm44DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm44DetStyle4 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm44RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm44RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm44").click(function () {
	$('#alarm44DetStyle4 .alarmEventsDocument').removeClass('active');
	$('#alarm44RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm44RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm44TP").click(function () {
	$('#alarm44Mapper').css('display', 'flex');
});
$("#alarm44CloseMapper").click(function () {
	$('#alarm44Mapper').css('display', 'none');
});