// Alarm39 (Bomb Detection) details tabs
function openAlarm39DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm39DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm39DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm39 events
$("#bombEvent2").click(function () {
	$(this).addClass('active');
	$('#alarm39EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm39EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm39").click(function () {
	$('#bombEvent2').removeClass('active');
	$('#alarm39EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm39EventDescription').addClass('inact');
});

// Alarm39 SOP
$("#alarm39Validition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm39ValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm39ValiditionOptions, #alarm39Handle").val('0');
		$('#alarm39ValiditionOptions, #alarm39Handle').trigger('change');
		$('#alarm39ValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#eventAlarm39Handle").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm39Handle').removeAttr('disabled');
	} else {
		$("#alarm39Handle").val('0');
		$('#alarm39Handle').trigger('change');
		$('#alarm39Handle').attr('disabled', 'disabled');
	}
});

$('#alarm39ValiditionOptions').change(function () {
	if ($('#alarm39ValiditionOptions').val() == '1') {
		$('#alarm39ValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm39ValiditionOptionYes').css('display', 'none');
	}
});

// Alarm39 RTPs
$("#bombRTP2").click(function () {
	$(this).addClass('active');
	$('#alarm39RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm39RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm39").click(function () {
	$('#bombRTP2').removeClass('active');
	$('#alarm39RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm39RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm39TP").click(function () {
	$('#alarm39Mapper').css('display', 'flex');
});
$("#alarm39CloseMapper").click(function () {
	$('#alarm39Mapper').css('display', 'none');
});