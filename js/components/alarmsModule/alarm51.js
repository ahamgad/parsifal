// Alarm51 (High Flow of People) details tabs
function openAlarm51DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm51DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm51DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm51DetStyle1 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm51EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm51EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm51").click(function () {
	$('#alarm51DetStyle1 .alarmEventsDocument').removeClass('active');
	$('#alarm51EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm51EventDescription').addClass('inact');
});

// Alarm SOP
$("#alarm51DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm51DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm51DetStyle3 .alarmValiditionOptions, #alarm51DetStyle3 .alarmHandle").val('0');
		$('#alarm51DetStyle3 .alarmValiditionOptions, #alarm51DetStyle3 .alarmHandle').trigger('change');
		$('#alarm51DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm51DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm51DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm51DetStyle3 .alarmHandle").val('0');
		$('#alarm51DetStyle3 .alarmHandle').trigger('change');
		$('#alarm51DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm51DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm51DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm51DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm51DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm51DetStyle4 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm51RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm51RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm51").click(function () {
	$('#alarm51DetStyle4 .alarmEventsDocument').removeClass('active');
	$('#alarm51RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm51RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm51TP").click(function () {
	$('#alarm51Mapper').css('display', 'flex');
});
$("#alarm51CloseMapper").click(function () {
	$('#alarm51Mapper').css('display', 'none');
});