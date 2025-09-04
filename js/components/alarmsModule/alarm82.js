// Alarm 82 (Full Trash bin) details tabs
function openAlarm82DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm82DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm82DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm82DetStyle1 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm82EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm82EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm82").click(function () {
	$('#alarm82DetStyle1 .alarmEventsDocument').removeClass('active');
	$('#alarm82EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm82EventDescription').addClass('inact');
});

// Alarm SOP
$("#alarm82DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm82DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm82DetStyle3 .alarmValiditionOptions, #alarm82DetStyle3 .alarmHandle").val('0');
		$('#alarm82DetStyle3 .alarmValiditionOptions, #alarm82DetStyle3 .alarmHandle').trigger('change');
		$('#alarm82DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm82DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm82DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm82DetStyle3 .alarmHandle").val('0');
		$('#alarm82DetStyle3 .alarmHandle').trigger('change');
		$('#alarm82DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm82DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm82DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm82DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm82DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm82DetStyle4 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm82RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm82RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm82").click(function () {
	$('#alarm82DetStyle4 .alarmEventsDocument').removeClass('active');
	$('#alarm82RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm82RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm82TP").click(function () {
	$('#alarm82Mapper').css('display', 'flex');
});
$("#alarm82CloseMapper").click(function () {
	$('#alarm82Mapper').css('display', 'none');
});