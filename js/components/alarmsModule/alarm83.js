// Alarm83 (Storm Detection) details tabs
function openAlarm83DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm83DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm83DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm83 events
$("#alarm83Event1").click(function () {
	$(this).addClass('active');
	$('#alarm83EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm83EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm83").click(function () {
	$('#alarm83Event1').removeClass('active');
	$('#alarm83EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm83EventDescription').addClass('inact');
});

// Alarm83 SOP
$("#alarm83Validition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm83ValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm83ValiditionOptions, #alarm83Handle").val('0');
		$('#alarm83ValiditionOptions, #alarm83Handle').trigger('change');
		$('#alarm83ValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#eventAlarm83Handle").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm83Handle').removeAttr('disabled');
	} else {
		$("#alarm83Handle").val('0');
		$('#alarm83Handle').trigger('change');
		$('#alarm83Handle').attr('disabled', 'disabled');
	}
});

$('#alarm83ValiditionOptions').change(function () {
	if ($('#alarm83ValiditionOptions').val() == '1') {
		$('#alarm83ValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm83ValiditionOptionYes').css('display', 'none');
	}
});

// Alarm83 RTPs
$("#alarm83RTP1").click(function () {
	$(this).addClass('active');
	$('#alarm83RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm83RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm83").click(function () {
	$('#alarm83RTP1').removeClass('active');
	$('#alarm83RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm83RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm83TP").click(function () {
	$('#alarm83Mapper').css('display', 'flex');
});
$("#alarm83CloseMapper").click(function () {
	$('#alarm83Mapper').css('display', 'none');
});