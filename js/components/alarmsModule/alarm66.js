// Alarm 66 (Over electricity consumption) details tabs
function openAlarm66DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm66DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm66DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm66DetStyle1 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm66EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm66EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm66").click(function () {
	$('#alarm66DetStyle1 .alarmEventsDocument').removeClass('active');
	$('#alarm66EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm66EventDescription').addClass('inact');
});

// Alarm SOP
$("#alarm66DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm66DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm66DetStyle3 .alarmValiditionOptions, #alarm66DetStyle3 .alarmHandle").val('0');
		$('#alarm66DetStyle3 .alarmValiditionOptions, #alarm66DetStyle3 .alarmHandle').trigger('change');
		$('#alarm66DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm66DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm66DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm66DetStyle3 .alarmHandle").val('0');
		$('#alarm66DetStyle3 .alarmHandle').trigger('change');
		$('#alarm66DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm66DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm66DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm66DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm66DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm66DetStyle4 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm66RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm66RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm66").click(function () {
	$('#alarm66DetStyle4 .alarmEventsDocument').removeClass('active');
	$('#alarm66RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm66RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm66TP").click(function () {
	$('#alarm66Mapper').css('display', 'flex');
});
$("#alarm66CloseMapper").click(function () {
	$('#alarm66Mapper').css('display', 'none');
});