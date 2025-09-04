// Alarm 80 (High usage rate) details tabs
function openAlarm80DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm80DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm80DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm80DetStyle1 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm80EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm80EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm80").click(function () {
	$('#alarm80DetStyle1 .alarmEventsDocument').removeClass('active');
	$('#alarm80EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm80EventDescription').addClass('inact');
});

// Alarm SOP
$("#alarm80DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm80DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm80DetStyle3 .alarmValiditionOptions, #alarm80DetStyle3 .alarmHandle").val('0');
		$('#alarm80DetStyle3 .alarmValiditionOptions, #alarm80DetStyle3 .alarmHandle').trigger('change');
		$('#alarm80DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm80DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm80DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm80DetStyle3 .alarmHandle").val('0');
		$('#alarm80DetStyle3 .alarmHandle').trigger('change');
		$('#alarm80DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm80DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm80DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm80DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm80DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm80DetStyle4 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm80RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm80RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm80").click(function () {
	$('#alarm80DetStyle4 .alarmEventsDocument').removeClass('active');
	$('#alarm80RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm80RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm80TP").click(function () {
	$('#alarm80Mapper').css('display', 'flex');
});
$("#alarm80CloseMapper").click(function () {
	$('#alarm80Mapper').css('display', 'none');
});