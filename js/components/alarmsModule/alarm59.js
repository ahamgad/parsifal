// Alarm59 (Gas Cartridge Detection) details tabs
function openAlarm59DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm59DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm59DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm59 events
$("#alarm59Event1").click(function () {
	$(this).addClass('active');
	$('#alarm59EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm59EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm59").click(function () {
	$('#alarm59Event1').removeClass('active');
	$('#alarm59EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm59EventDescription').addClass('inact');
});

// Alarm59 SOP
$("#alarm59Validition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm59ValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm59ValiditionOptions, #alarm59Handle").val('0');
		$('#alarm59ValiditionOptions, #alarm59Handle').trigger('change');
		$('#alarm59ValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#eventAlarm59Handle").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm59Handle').removeAttr('disabled');
	} else {
		$("#alarm59Handle").val('0');
		$('#alarm59Handle').trigger('change');
		$('#alarm59Handle').attr('disabled', 'disabled');
	}
});

$('#alarm59ValiditionOptions').change(function () {
	if ($('#alarm59ValiditionOptions').val() == '1') {
		$('#alarm59ValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm59ValiditionOptionYes').css('display', 'none');
	}
});

// Alarm59 RTPs
$("#alarm59RTP1").click(function () {
	$(this).addClass('active');
	$('#alarm59RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm59RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm59").click(function () {
	$('#alarm59RTP1').removeClass('active');
	$('#alarm59RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm59RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm59TP").click(function () {
	$('#alarm59Mapper').css('display', 'flex');
});
$("#alarm59CloseMapper").click(function () {
	$('#alarm59Mapper').css('display', 'none');
});