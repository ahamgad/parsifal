// Alarm60 (Bomb Detection) details tabs
function openAlarm60DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm60DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm60DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm60 events
$("#alarm60Event1").click(function () {
	$(this).addClass('active');
	$('#alarm60EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm60EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm60").click(function () {
	$('#alarm60Event1').removeClass('active');
	$('#alarm60EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm60EventDescription').addClass('inact');
});

// Alarm60 SOP
$("#alarm60Validition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm60ValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm60ValiditionOptions, #alarm60Handle").val('0');
		$('#alarm60ValiditionOptions, #alarm60Handle').trigger('change');
		$('#alarm60ValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#eventAlarm60Handle").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm60Handle').removeAttr('disabled');
	} else {
		$("#alarm60Handle").val('0');
		$('#alarm60Handle').trigger('change');
		$('#alarm60Handle').attr('disabled', 'disabled');
	}
});

$('#alarm60ValiditionOptions').change(function () {
	if ($('#alarm60ValiditionOptions').val() == '1') {
		$('#alarm60ValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm60ValiditionOptionYes').css('display', 'none');
	}
});

// Alarm60 RTPs
$("#alarm60RTP1").click(function () {
	$(this).addClass('active');
	$('#alarm60RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm60RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm60").click(function () {
	$('#alarm60RTP1').removeClass('active');
	$('#alarm60RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm60RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm60TP").click(function () {
	$('#alarm60Mapper').css('display', 'flex');
});
$("#alarm60CloseMapper").click(function () {
	$('#alarm60Mapper').css('display', 'none');
});