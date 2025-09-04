// Alarm 81 (Street light malfunction) details tabs
function openAlarm81DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm81DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm81DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm81DetStyle1 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm81EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm81EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm81").click(function () {
	$('#alarm81DetStyle1 .alarmEventsDocument').removeClass('active');
	$('#alarm81EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm81EventDescription').addClass('inact');
});

// Alarm SOP
$("#alarm81DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm81DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm81DetStyle3 .alarmValiditionOptions, #alarm81DetStyle3 .alarmHandle").val('0');
		$('#alarm81DetStyle3 .alarmValiditionOptions, #alarm81DetStyle3 .alarmHandle').trigger('change');
		$('#alarm81DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm81DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm81DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm81DetStyle3 .alarmHandle").val('0');
		$('#alarm81DetStyle3 .alarmHandle').trigger('change');
		$('#alarm81DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm81DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm81DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm81DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm81DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm81DetStyle4 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm81RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm81RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm81").click(function () {
	$('#alarm81DetStyle4 .alarmEventsDocument').removeClass('active');
	$('#alarm81RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm81RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm81TP").click(function () {
	$('#alarm81Mapper').css('display', 'flex');
});
$("#alarm81CloseMapper").click(function () {
	$('#alarm81Mapper').css('display', 'none');
});