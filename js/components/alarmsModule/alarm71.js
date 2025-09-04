// Alarm 71 (Sprinkler wrong direction) details tabs
function openAlarm71DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm71DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm71DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm71DetStyle1 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm71EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm71EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm71").click(function () {
	$('#alarm71DetStyle1 .alarmEventsDocument').removeClass('active');
	$('#alarm71EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm71EventDescription').addClass('inact');
});

// Alarm SOP
$("#alarm71DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm71DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm71DetStyle3 .alarmValiditionOptions, #alarm71DetStyle3 .alarmHandle").val('0');
		$('#alarm71DetStyle3 .alarmValiditionOptions, #alarm71DetStyle3 .alarmHandle').trigger('change');
		$('#alarm71DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm71DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm71DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm71DetStyle3 .alarmHandle").val('0');
		$('#alarm71DetStyle3 .alarmHandle').trigger('change');
		$('#alarm71DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm71DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm71DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm71DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm71DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm71DetStyle4 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm71RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm71RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm71").click(function () {
	$('#alarm71DetStyle4 .alarmEventsDocument').removeClass('active');
	$('#alarm71RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm71RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm71TP").click(function () {
	$('#alarm71Mapper').css('display', 'flex');
});
$("#alarm71CloseMapper").click(function () {
	$('#alarm71Mapper').css('display', 'none');
});