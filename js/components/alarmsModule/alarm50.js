// Alarm50 (Social Media) details tabs
function openAlarm50DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm50DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm50DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm50DetStyle1 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm50EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm50EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm50").click(function () {
	$('#alarm50DetStyle1 .alarmEventsDocument').removeClass('active');
	$('#alarm50EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm50EventDescription').addClass('inact');
});

// Alarm SOP
$("#alarm50DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm50DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm50DetStyle3 .alarmValiditionOptions, #alarm50DetStyle3 .alarmHandle").val('0');
		$('#alarm50DetStyle3 .alarmValiditionOptions, #alarm50DetStyle3 .alarmHandle').trigger('change');
		$('#alarm50DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm50DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm50DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm50DetStyle3 .alarmHandle").val('0');
		$('#alarm50DetStyle3 .alarmHandle').trigger('change');
		$('#alarm50DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm50DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm50DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm50DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm50DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm50DetStyle4 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm50RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm50RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm50").click(function () {
	$('#alarm50DetStyle4 .alarmEventsDocument').removeClass('active');
	$('#alarm50RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm50RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm50TP").click(function () {
	$('#alarm50Mapper').css('display', 'flex');
});
$("#alarm50CloseMapper").click(function () {
	$('#alarm50Mapper').css('display', 'none');
});