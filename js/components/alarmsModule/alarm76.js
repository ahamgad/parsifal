// Alarm 76 (Defected pump tank) details tabs
function openAlarm76DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm76DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm76DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm76DetStyle1 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm76EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm76EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm76").click(function () {
	$('#alarm76DetStyle1 .alarmEventsDocument').removeClass('active');
	$('#alarm76EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm76EventDescription').addClass('inact');
});

// Alarm SOP
$("#alarm76DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm76DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm76DetStyle3 .alarmValiditionOptions, #alarm76DetStyle3 .alarmHandle").val('0');
		$('#alarm76DetStyle3 .alarmValiditionOptions, #alarm76DetStyle3 .alarmHandle').trigger('change');
		$('#alarm76DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm76DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm76DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm76DetStyle3 .alarmHandle").val('0');
		$('#alarm76DetStyle3 .alarmHandle').trigger('change');
		$('#alarm76DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm76DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm76DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm76DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm76DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm76DetStyle4 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm76RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm76RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm76").click(function () {
	$('#alarm76DetStyle4 .alarmEventsDocument').removeClass('active');
	$('#alarm76RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm76RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm76TP").click(function () {
	$('#alarm76Mapper').css('display', 'flex');
});
$("#alarm76CloseMapper").click(function () {
	$('#alarm76Mapper').css('display', 'none');
});