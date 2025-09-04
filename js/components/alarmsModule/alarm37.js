// Alarm37 (Gas Cartridge Detection) details tabs
function openAlarm37DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm37DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm37DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm37 events
$("#gasDetEvent2").click(function () {
	$(this).addClass('active');
	$('#alarm37EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm37EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm37").click(function () {
	$('#gasDetEvent2').removeClass('active');
	$('#alarm37EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm37EventDescription').addClass('inact');
});

// Alarm37 SOP
$("#alarm37Validition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm37ValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm37ValiditionOptions, #alarm37Handle").val('0');
		$('#alarm37ValiditionOptions, #alarm37Handle').trigger('change');
		$('#alarm37ValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#eventAlarm37Handle").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm37Handle').removeAttr('disabled');
	} else {
		$("#alarm37Handle").val('0');
		$('#alarm37Handle').trigger('change');
		$('#alarm37Handle').attr('disabled', 'disabled');
	}
});

$('#alarm37ValiditionOptions').change(function () {
	if ($('#alarm37ValiditionOptions').val() == '1') {
		$('#alarm37ValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm37ValiditionOptionYes').css('display', 'none');
	}
});

// Alarm37 RTPs
$("#gasDetRTP2").click(function () {
	$(this).addClass('active');
	$('#alarm37RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm37RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm37").click(function () {
	$('#gasDetRTP2').removeClass('active');
	$('#alarm37RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm37RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm37TP").click(function () {
	$('#alarm37Mapper').css('display', 'flex');
});
$("#alarm37CloseMapper").click(function () {
	$('#alarm37Mapper').css('display', 'none');
});