// Alarm43 (Maximum Capacity Reached) details tabs
function openAlarm43DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm43DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm43DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm43DetStyle1 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm43EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm43EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm43").click(function () {
	$('#alarm43DetStyle1 .alarmEventsDocument').removeClass('active');
	$('#alarm43EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm43EventDescription').addClass('inact');
});

// Alarm SOP
$("#alarm43DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm43DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm43DetStyle3 .alarmValiditionOptions, #alarm43DetStyle3 .alarmHandle").val('0');
		$('#alarm43DetStyle3 .alarmValiditionOptions, #alarm43DetStyle3 .alarmHandle').trigger('change');
		$('#alarm43DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm43DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm43DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm43DetStyle3 .alarmHandle").val('0');
		$('#alarm43DetStyle3 .alarmHandle').trigger('change');
		$('#alarm43DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm43DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm43DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm43DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm43DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm43DetStyle4 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm43RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm43RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm43").click(function () {
	$('#alarm43DetStyle4 .alarmEventsDocument').removeClass('active');
	$('#alarm43RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm43RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm43TP").click(function () {
	$('#alarm43Mapper').css('display', 'flex');
});
$("#alarm43CloseMapper").click(function () {
	$('#alarm43Mapper').css('display', 'none');
});