// Alarm 72 (Water leakage) details tabs
function openAlarm72DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm72DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm72DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm72DetStyle1 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm72EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm72EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm72").click(function () {
	$('#alarm72DetStyle1 .alarmEventsDocument').removeClass('active');
	$('#alarm72EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm72EventDescription').addClass('inact');
});

// Alarm SOP
$("#alarm72DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm72DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm72DetStyle3 .alarmValiditionOptions, #alarm72DetStyle3 .alarmHandle").val('0');
		$('#alarm72DetStyle3 .alarmValiditionOptions, #alarm72DetStyle3 .alarmHandle').trigger('change');
		$('#alarm72DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm72DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm72DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm72DetStyle3 .alarmHandle").val('0');
		$('#alarm72DetStyle3 .alarmHandle').trigger('change');
		$('#alarm72DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm72DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm72DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm72DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm72DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm72DetStyle4 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm72RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm72RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm72").click(function () {
	$('#alarm72DetStyle4 .alarmEventsDocument').removeClass('active');
	$('#alarm72RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm72RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm72TP").click(function () {
	$('#alarm72Mapper').css('display', 'flex');
});
$("#alarm72CloseMapper").click(function () {
	$('#alarm72Mapper').css('display', 'none');
});