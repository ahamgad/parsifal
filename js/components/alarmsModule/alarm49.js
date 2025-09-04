// Alarm49 (Mask not Detected) details tabs
function openAlarm49DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm49DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm49DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm49DetStyle1 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm49EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm49EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm49").click(function () {
	$('#alarm49DetStyle1 .alarmEventsDocument').removeClass('active');
	$('#alarm49EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm49EventDescription').addClass('inact');
});

// Alarm SOP
$("#alarm49DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm49DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm49DetStyle3 .alarmValiditionOptions, #alarm49DetStyle3 .alarmHandle").val('0');
		$('#alarm49DetStyle3 .alarmValiditionOptions, #alarm49DetStyle3 .alarmHandle').trigger('change');
		$('#alarm49DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm49DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm49DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm49DetStyle3 .alarmHandle").val('0');
		$('#alarm49DetStyle3 .alarmHandle').trigger('change');
		$('#alarm49DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm49DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm49DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm49DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm49DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm49DetStyle4 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm49RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm49RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm49").click(function () {
	$('#alarm49DetStyle4 .alarmEventsDocument').removeClass('active');
	$('#alarm49RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm49RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm49TP").click(function () {
	$('#alarm49Mapper').css('display', 'flex');
});
$("#alarm49CloseMapper").click(function () {
	$('#alarm49Mapper').css('display', 'none');
});