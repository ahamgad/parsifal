// Alarm84 (Forest Fire Detection) details tabs
function openAlarm84DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm84DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm84DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm84 events
$("#alarm84Event1").click(function () {
	$(this).addClass('active');
	$('#alarm84EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm84EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm84").click(function () {
	$('#alarm84Event1').removeClass('active');
	$('#alarm84EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm84EventDescription').addClass('inact');
});

// Alarm84 SOP
$("#alarm84Validition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm84ValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm84ValiditionOptions, #alarm84Handle").val('0');
		$('#alarm84ValiditionOptions, #alarm84Handle').trigger('change');
		$('#alarm84ValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#eventAlarm84Handle").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm84Handle').removeAttr('disabled');
	} else {
		$("#alarm84Handle").val('0');
		$('#alarm84Handle').trigger('change');
		$('#alarm84Handle').attr('disabled', 'disabled');
	}
});

$('#alarm84ValiditionOptions').change(function () {
	if ($('#alarm84ValiditionOptions').val() == '1') {
		$('#alarm84ValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm84ValiditionOptionYes').css('display', 'none');
	}
});

// Alarm84 RTPs
$("#alarm84RTP1").click(function () {
	$(this).addClass('active');
	$('#alarm84RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm84RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm84").click(function () {
	$('#alarm84RTP1').removeClass('active');
	$('#alarm84RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm84RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm84TP").click(function () {
	$('#alarm84Mapper').css('display', 'flex');
});
$("#alarm84CloseMapper").click(function () {
	$('#alarm84Mapper').css('display', 'none');
});