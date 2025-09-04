// Alarm 73 (Bad water quality) details tabs
function openAlarm73DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm73DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm73DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm73DetStyle1 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm73EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm73EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm73").click(function () {
	$('#alarm73DetStyle1 .alarmEventsDocument').removeClass('active');
	$('#alarm73EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm73EventDescription').addClass('inact');
});

// Alarm SOP
$("#alarm73DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm73DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm73DetStyle3 .alarmValiditionOptions, #alarm73DetStyle3 .alarmHandle").val('0');
		$('#alarm73DetStyle3 .alarmValiditionOptions, #alarm73DetStyle3 .alarmHandle').trigger('change');
		$('#alarm73DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm73DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm73DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm73DetStyle3 .alarmHandle").val('0');
		$('#alarm73DetStyle3 .alarmHandle').trigger('change');
		$('#alarm73DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm73DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm73DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm73DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm73DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm73DetStyle4 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm73RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm73RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm73").click(function () {
	$('#alarm73DetStyle4 .alarmEventsDocument').removeClass('active');
	$('#alarm73RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm73RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm73TP").click(function () {
	$('#alarm73Mapper').css('display', 'flex');
});
$("#alarm73CloseMapper").click(function () {
	$('#alarm73Mapper').css('display', 'none');
});