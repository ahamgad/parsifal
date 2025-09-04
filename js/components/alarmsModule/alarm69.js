// Alarm 69 (People capacity reached) details tabs
function openAlarm69DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm69DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm69DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm69DetStyle1 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm69EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm69EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm69").click(function () {
	$('#alarm69DetStyle1 .alarmEventsDocument').removeClass('active');
	$('#alarm69EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm69EventDescription').addClass('inact');
});

// Alarm SOP
$("#alarm69DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm69DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm69DetStyle3 .alarmValiditionOptions, #alarm69DetStyle3 .alarmHandle").val('0');
		$('#alarm69DetStyle3 .alarmValiditionOptions, #alarm69DetStyle3 .alarmHandle').trigger('change');
		$('#alarm69DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm69DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm69DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm69DetStyle3 .alarmHandle").val('0');
		$('#alarm69DetStyle3 .alarmHandle').trigger('change');
		$('#alarm69DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm69DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm69DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm69DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm69DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm69DetStyle4 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm69RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm69RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm69").click(function () {
	$('#alarm69DetStyle4 .alarmEventsDocument').removeClass('active');
	$('#alarm69RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm69RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm69TP").click(function () {
	$('#alarm69Mapper').css('display', 'flex');
});
$("#alarm69CloseMapper").click(function () {
	$('#alarm69Mapper').css('display', 'none');
});