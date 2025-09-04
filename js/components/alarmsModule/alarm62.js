// Alarm 62 (Door open too long) details tabs
function openAlarm62DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm62DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm62DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm62DetStyle1 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm62EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm62EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm62").click(function () {
	$('#alarm62DetStyle1 .alarmEventsDocument').removeClass('active');
	$('#alarm62EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm62EventDescription').addClass('inact');
});

// Alarm SOP
$("#alarm62DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm62DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm62DetStyle3 .alarmValiditionOptions, #alarm62DetStyle3 .alarmHandle").val('0');
		$('#alarm62DetStyle3 .alarmValiditionOptions, #alarm62DetStyle3 .alarmHandle').trigger('change');
		$('#alarm62DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm62DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm62DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm62DetStyle3 .alarmHandle").val('0');
		$('#alarm62DetStyle3 .alarmHandle').trigger('change');
		$('#alarm62DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm62DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm62DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm62DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm62DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm62DetStyle4 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm62RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm62RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm62").click(function () {
	$('#alarm62DetStyle4 .alarmEventsDocument').removeClass('active');
	$('#alarm62RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm62RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm62TP").click(function () {
	$('#alarm62Mapper').css('display', 'flex');
});
$("#alarm62CloseMapper").click(function () {
	$('#alarm62Mapper').css('display', 'none');
});