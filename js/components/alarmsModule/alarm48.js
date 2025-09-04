// Alarm48 (High Fever Detected) details tabs
function openAlarm48DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm48DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm48DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm48DetStyle1 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm48EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm48EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm48").click(function () {
	$('#alarm48DetStyle1 .alarmEventsDocument').removeClass('active');
	$('#alarm48EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm48EventDescription').addClass('inact');
});

// Alarm SOP
$("#alarm48DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm48DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm48DetStyle3 .alarmValiditionOptions, #alarm48DetStyle3 .alarmHandle").val('0');
		$('#alarm48DetStyle3 .alarmValiditionOptions, #alarm48DetStyle3 .alarmHandle').trigger('change');
		$('#alarm48DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm48DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm48DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm48DetStyle3 .alarmHandle").val('0');
		$('#alarm48DetStyle3 .alarmHandle').trigger('change');
		$('#alarm48DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm48DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm48DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm48DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm48DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm48DetStyle4 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm48RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm48RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm48").click(function () {
	$('#alarm48DetStyle4 .alarmEventsDocument').removeClass('active');
	$('#alarm48RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm48RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm48TP").click(function () {
	$('#alarm48Mapper').css('display', 'flex');
});
$("#alarm48CloseMapper").click(function () {
	$('#alarm48Mapper').css('display', 'none');
});