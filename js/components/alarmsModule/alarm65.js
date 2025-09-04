// Alarm 65 (Remote Open) details tabs
function openAlarm65DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm65DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm65DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm details events
$("#alarm65DetStyle1 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm65EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm65EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm65").click(function () {
	$('#alarm65DetStyle1 .alarmEventsDocument').removeClass('active');
	$('#alarm65EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm65EventDescription').addClass('inact');
});

// Alarm SOP
$("#alarm65DetStyle3 .alarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm65DetStyle3 .alarmValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm65DetStyle3 .alarmValiditionOptions, #alarm65DetStyle3 .alarmHandle").val('0');
		$('#alarm65DetStyle3 .alarmValiditionOptions, #alarm65DetStyle3 .alarmHandle').trigger('change');
		$('#alarm65DetStyle3 .alarmValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#alarm65DetStyle3 .alarmHandleOptions").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm65DetStyle3 .alarmHandle').removeAttr('disabled');
	} else {
		$("#alarm65DetStyle3 .alarmHandle").val('0');
		$('#alarm65DetStyle3 .alarmHandle').trigger('change');
		$('#alarm65DetStyle3 .alarmHandle').attr('disabled', 'disabled');
	}
});

$('#alarm65DetStyle3 .alarmValiditionOptions').change(function () {
	if ($('#alarm65DetStyle3 .alarmValiditionOptions').val() == '1') {
		$('#alarm65DetStyle3 .alarmValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm65DetStyle3 .alarmValiditionOptionYes').css('display', 'none');
	}
});

// Alarm related TPs
$("#alarm65DetStyle4 .alarmEventsDocument").click(function () {
	$(this).addClass('active');
	$('#alarm65RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm65RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm65").click(function () {
	$('#alarm65DetStyle4 .alarmEventsDocument').removeClass('active');
	$('#alarm65RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm65RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm65TP").click(function () {
	$('#alarm65Mapper').css('display', 'flex');
});
$("#alarm65CloseMapper").click(function () {
	$('#alarm65Mapper').css('display', 'none');
});