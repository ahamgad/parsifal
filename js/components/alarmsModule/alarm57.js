// Alarm57 (Knife Detection) details tabs
function openAlarm57DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm57DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm57DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm57 events
$("#alarm57Event1").click(function () {
	$(this).addClass('active');
	$('#alarm57EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm57EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm57").click(function () {
	$('#alarm57Event1').removeClass('active');
	$('#alarm57EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm57EventDescription').addClass('inact');
});

// Alarm57 SOP
$("#alarm57Validition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm57ValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm57ValiditionOptions, #alarm57Handle").val('0');
		$('#alarm57ValiditionOptions, #alarm57Handle').trigger('change');
		$('#alarm57ValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#eventAlarm57Handle").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm57Handle').removeAttr('disabled');
	} else {
		$("#alarm57Handle").val('0');
		$('#alarm57Handle').trigger('change');
		$('#alarm57Handle').attr('disabled', 'disabled');
	}
});

$('#alarm57ValiditionOptions').change(function () {
	if ($('#alarm57ValiditionOptions').val() == '1') {
		$('#alarm57ValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm57ValiditionOptionYes').css('display', 'none');
	}
});

// Alarm57 RTPs
$("#alarm57RTP1").click(function () {
	$(this).addClass('active');
	$('#alarm57RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm57RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm57").click(function () {
	$('#alarm57RTP1').removeClass('active');
	$('#alarm57RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm57RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm57TP").click(function () {
	$('#alarm57Mapper').css('display', 'flex');
});
$("#alarm57CloseMapper").click(function () {
	$('#alarm57Mapper').css('display', 'none');
});