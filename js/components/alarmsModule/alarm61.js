// Alarm 61 (Blocked access card) details tabs
function openAlarm61DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm61DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm61DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm61DetStyle1 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm61EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm61EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm61").click(function () {
	$('#alarm61DetStyle1 .alarmEventsDocument').removeClass('active');
	$('#alarm61EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm61EventDescription').addClass('inact');
});

// Alarm SOP
$("#alarm61DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm61DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm61DetStyle3 .alarmValiditionOptions, #alarm61DetStyle3 .alarmHandle").val('0');
		$('#alarm61DetStyle3 .alarmValiditionOptions, #alarm61DetStyle3 .alarmHandle').trigger('change');
		$('#alarm61DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm61DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm61DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm61DetStyle3 .alarmHandle").val('0');
		$('#alarm61DetStyle3 .alarmHandle').trigger('change');
		$('#alarm61DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm61DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm61DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm61DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm61DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm61DetStyle4 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm61RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm61RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm61").click(function () {
	$('#alarm61DetStyle4 .alarmEventsDocument').removeClass('active');
	$('#alarm61RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm61RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm61TP").click(function () {
	$('#alarm61Mapper').css('display', 'flex');
});
$("#alarm61CloseMapper").click(function () {
	$('#alarm61Mapper').css('display', 'none');
});