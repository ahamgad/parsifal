// Alarm56 (Maximum Capacity Reached) details tabs
function openAlarm56DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm56DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm56DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm56DetStyle1 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm56EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm56EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm56").click(function () {
	$('#alarm56DetStyle1 .alarmEventsDocument').removeClass('active');
	$('#alarm56EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm56EventDescription').addClass('inact');
});

// Alarm SOP
$("#alarm56DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm56DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm56DetStyle3 .alarmValiditionOptions, #alarm56DetStyle3 .alarmHandle").val('0');
		$('#alarm56DetStyle3 .alarmValiditionOptions, #alarm56DetStyle3 .alarmHandle').trigger('change');
		$('#alarm56DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm56DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm56DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm56DetStyle3 .alarmHandle").val('0');
		$('#alarm56DetStyle3 .alarmHandle').trigger('change');
		$('#alarm56DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm56DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm56DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm56DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm56DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm56DetStyle4 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm56RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm56RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm56").click(function () {
	$('#alarm56DetStyle4 .alarmEventsDocument').removeClass('active');
	$('#alarm56RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm56RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm56TP").click(function () {
	$('#alarm56Mapper').css('display', 'flex');
});
$("#alarm56CloseMapper").click(function () {
	$('#alarm56Mapper').css('display', 'none');
});