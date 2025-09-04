// Alarm 67 (Over water consumption) details tabs
function openAlarm67DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm67DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm67DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm67DetStyle1 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm67EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm67EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm67").click(function () {
	$('#alarm67DetStyle1 .alarmEventsDocument').removeClass('active');
	$('#alarm67EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm67EventDescription').addClass('inact');
});

// Alarm SOP
$("#alarm67DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm67DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm67DetStyle3 .alarmValiditionOptions, #alarm67DetStyle3 .alarmHandle").val('0');
		$('#alarm67DetStyle3 .alarmValiditionOptions, #alarm67DetStyle3 .alarmHandle').trigger('change');
		$('#alarm67DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm67DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm67DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm67DetStyle3 .alarmHandle").val('0');
		$('#alarm67DetStyle3 .alarmHandle').trigger('change');
		$('#alarm67DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm67DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm67DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm67DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm67DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm67DetStyle4 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm67RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm67RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm67").click(function () {
	$('#alarm67DetStyle4 .alarmEventsDocument').removeClass('active');
	$('#alarm67RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm67RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm67TP").click(function () {
	$('#alarm67Mapper').css('display', 'flex');
});
$("#alarm67CloseMapper").click(function () {
	$('#alarm67Mapper').css('display', 'none');
});