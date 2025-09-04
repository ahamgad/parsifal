// Alarm 68 (Low soil moisture level) details tabs
function openAlarm68DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm68DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm68DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm68DetStyle1 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm68EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm68EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm68").click(function () {
	$('#alarm68DetStyle1 .alarmEventsDocument').removeClass('active');
	$('#alarm68EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm68EventDescription').addClass('inact');
});

// Alarm SOP
$("#alarm68DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm68DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm68DetStyle3 .alarmValiditionOptions, #alarm68DetStyle3 .alarmHandle").val('0');
		$('#alarm68DetStyle3 .alarmValiditionOptions, #alarm68DetStyle3 .alarmHandle').trigger('change');
		$('#alarm68DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm68DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm68DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm68DetStyle3 .alarmHandle").val('0');
		$('#alarm68DetStyle3 .alarmHandle').trigger('change');
		$('#alarm68DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm68DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm68DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm68DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm68DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm68DetStyle4 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm68RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm68RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm68").click(function () {
	$('#alarm68DetStyle4 .alarmEventsDocument').removeClass('active');
	$('#alarm68RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm68RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm68TP").click(function () {
	$('#alarm68Mapper').css('display', 'flex');
});
$("#alarm68CloseMapper").click(function () {
	$('#alarm68Mapper').css('display', 'none');
});