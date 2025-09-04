// Alarm42 (Low Conversion Rate) details tabs
function openAlarm42DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm42DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm42DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm42DetStyle1 .ACSforceDoorJS").click(function () {
	$(this).parent('.alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmEventsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarm42EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm42EventDescription').removeClass('inact');
});

$("#alarm42DetStyle1 .ACSforceDoorJSNone").click(function () {
	$(this).parent('.alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmEventsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarm42EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm42EventDescription').addClass('inact');
});
$("#closeDocumentAlarm42").click(function () {
	$('#alarm42DetStyle1 .alarmEventsDocument').removeClass('active');
	$('#alarm42EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm42EventDescription').addClass('inact');
});

// Alarm SOP
$("#alarm42DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm42DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm42DetStyle3 .alarmValiditionOptions, #alarm42DetStyle3 .alarmHandle").val('0');
		$('#alarm42DetStyle3 .alarmValiditionOptions, #alarm42DetStyle3 .alarmHandle').trigger('change');
		$('#alarm42DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm42DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm42DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm42DetStyle3 .alarmHandle").val('0');
		$('#alarm42DetStyle3 .alarmHandle').trigger('change');
		$('#alarm42DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm42DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm42DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm42DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm42DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm42DetStyle4 .ACSforceDoorJS").click(function () {
	$(this).parent('.alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmEventsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarm42RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm42RTPDescription').removeClass('inact');
});
$("#alarm42DetStyle4 .ACSforceDoorJSNone").click(function () {
	$(this).parent('.alarmEventsRow').parent('.alarmModAlarmDetails.events').find('.alarmEventsDocument').removeClass("active");
	$(this).addClass('active');
	$('#alarm42EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm42EventDescription').addClass('inact');
});
$("#closeRTPAlarm42").click(function () {
	$('#alarm42DetStyle4 .alarmEventsDocument').removeClass('active');
	$('#alarm42RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm42RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm42TP").click(function () {
	$('#alarm42Mapper').css('display', 'flex');
});
$("#alarm42CloseMapper").click(function () {
	$('#alarm42Mapper').css('display', 'none');
});