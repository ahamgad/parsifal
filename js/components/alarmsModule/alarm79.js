// Alarm 79 (Electricity spike) details tabs
function openAlarm79DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm79DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm79DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm79DetStyle1 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm79EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm79EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm79").click(function () {
	$('#alarm79DetStyle1 .alarmEventsDocument').removeClass('active');
	$('#alarm79EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm79EventDescription').addClass('inact');
});

// Alarm SOP
$("#alarm79DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm79DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm79DetStyle3 .alarmValiditionOptions, #alarm79DetStyle3 .alarmHandle").val('0');
		$('#alarm79DetStyle3 .alarmValiditionOptions, #alarm79DetStyle3 .alarmHandle').trigger('change');
		$('#alarm79DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm79DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm79DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm79DetStyle3 .alarmHandle").val('0');
		$('#alarm79DetStyle3 .alarmHandle').trigger('change');
		$('#alarm79DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm79DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm79DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm79DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm79DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm79DetStyle4 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm79RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm79RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm79").click(function () {
	$('#alarm79DetStyle4 .alarmEventsDocument').removeClass('active');
	$('#alarm79RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm79RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm79TP").click(function () {
	$('#alarm79Mapper').css('display', 'flex');
});
$("#alarm79CloseMapper").click(function () {
	$('#alarm79Mapper').css('display', 'none');
});