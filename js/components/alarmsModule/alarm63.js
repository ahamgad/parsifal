// Alarm 63 (Device disconnected) details tabs
function openAlarm63DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm63DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm63DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm63DetStyle1 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm63EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm63EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm63").click(function () {
	$('#alarm63DetStyle1 .alarmEventsDocument').removeClass('active');
	$('#alarm63EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm63EventDescription').addClass('inact');
});

// Alarm SOP
$("#alarm63DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm63DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm63DetStyle3 .alarmValiditionOptions, #alarm63DetStyle3 .alarmHandle").val('0');
		$('#alarm63DetStyle3 .alarmValiditionOptions, #alarm63DetStyle3 .alarmHandle').trigger('change');
		$('#alarm63DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm63DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm63DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm63DetStyle3 .alarmHandle").val('0');
		$('#alarm63DetStyle3 .alarmHandle').trigger('change');
		$('#alarm63DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm63DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm63DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm63DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm63DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm63DetStyle4 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm63RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm63RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm63").click(function () {
	$('#alarm63DetStyle4 .alarmEventsDocument').removeClass('active');
	$('#alarm63RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm63RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm63TP").click(function () {
	$('#alarm63Mapper').css('display', 'flex');
});
$("#alarm63CloseMapper").click(function () {
	$('#alarm63Mapper').css('display', 'none');
});