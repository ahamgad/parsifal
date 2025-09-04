// Alarm45 (Demographics Alert) details tabs
function openAlarm45DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm45DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm45DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm45DetStyle1 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm45EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm45EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm45").click(function () {
	$('#alarm45DetStyle1 .alarmEventsDocument').removeClass('active');
	$('#alarm45EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm45EventDescription').addClass('inact');
});

// Alarm SOP
$("#alarm45DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm45DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm45DetStyle3 .alarmValiditionOptions, #alarm45DetStyle3 .alarmHandle").val('0');
		$('#alarm45DetStyle3 .alarmValiditionOptions, #alarm45DetStyle3 .alarmHandle').trigger('change');
		$('#alarm45DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm45DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm45DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm45DetStyle3 .alarmHandle").val('0');
		$('#alarm45DetStyle3 .alarmHandle').trigger('change');
		$('#alarm45DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm45DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm45DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm45DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm45DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm45DetStyle4 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm45RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm45RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm45").click(function () {
	$('#alarm45DetStyle4 .alarmEventsDocument').removeClass('active');
	$('#alarm45RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm45RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm45TP").click(function () {
	$('#alarm45Mapper').css('display', 'flex');
});
$("#alarm45CloseMapper").click(function () {
	$('#alarm45Mapper').css('display', 'none');
});