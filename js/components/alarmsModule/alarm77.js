// Alarm 77 (LNPR blacklist) details tabs
function openAlarm77DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm77DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm77DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm77DetStyle1 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm77EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm77EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm77").click(function () {
	$('#alarm77DetStyle1 .alarmEventsDocument').removeClass('active');
	$('#alarm77EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm77EventDescription').addClass('inact');
});

// Alarm SOP
$("#alarm77DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm77DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm77DetStyle3 .alarmValiditionOptions, #alarm77DetStyle3 .alarmHandle").val('0');
		$('#alarm77DetStyle3 .alarmValiditionOptions, #alarm77DetStyle3 .alarmHandle').trigger('change');
		$('#alarm77DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm77DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm77DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm77DetStyle3 .alarmHandle").val('0');
		$('#alarm77DetStyle3 .alarmHandle').trigger('change');
		$('#alarm77DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm77DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm77DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm77DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm77DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm77DetStyle4 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm77RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm77RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm77").click(function () {
	$('#alarm77DetStyle4 .alarmEventsDocument').removeClass('active');
	$('#alarm77RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm77RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm77TP").click(function () {
	$('#alarm77Mapper').css('display', 'flex');
});
$("#alarm77CloseMapper").click(function () {
	$('#alarm77Mapper').css('display', 'none');
});