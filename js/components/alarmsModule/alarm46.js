// Alarm46 (Head Counting) details tabs
function openAlarm46DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm46DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm46DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm46DetStyle1 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm46EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm46EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm46").click(function () {
	$('#alarm46DetStyle1 .alarmEventsDocument').removeClass('active');
	$('#alarm46EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm46EventDescription').addClass('inact');
});

// Alarm SOP
$("#alarm46DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm46DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm46DetStyle3 .alarmValiditionOptions, #alarm46DetStyle3 .alarmHandle").val('0');
		$('#alarm46DetStyle3 .alarmValiditionOptions, #alarm46DetStyle3 .alarmHandle').trigger('change');
		$('#alarm46DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm46DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm46DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm46DetStyle3 .alarmHandle").val('0');
		$('#alarm46DetStyle3 .alarmHandle').trigger('change');
		$('#alarm46DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm46DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm46DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm46DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm46DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm46DetStyle4 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm46RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm46RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm46").click(function () {
	$('#alarm46DetStyle4 .alarmEventsDocument').removeClass('active');
	$('#alarm46RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm46RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm46TP").click(function () {
	$('#alarm46Mapper').css('display', 'flex');
});
$("#alarm46CloseMapper").click(function () {
	$('#alarm46Mapper').css('display', 'none');
});