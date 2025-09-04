// Alarm30 (Knife Detection) details tabs
function openAlarm30DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm30DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm30DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm30 events
$("#knifeDetEvent2").click(function () {
	$(this).addClass('active');
	$('#alarm30EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm30EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm30").click(function () {
	$('#knifeDetEvent2').removeClass('active');
	$('#alarm30EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm30EventDescription').addClass('inact');
});

// Alarm30 SOP
$("#alarm30Validition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm30ValiditionOptions').removeAttr('disabled');
	} else {
		$("#alarm30ValiditionOptions, #alarm30Handle").val('0');
		$('#alarm30ValiditionOptions, #alarm30Handle').trigger('change');
		$('#alarm30ValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#eventAlarm30Handle").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#alarm30Handle').removeAttr('disabled');
	} else {
		$("#alarm30Handle").val('0');
		$('#alarm30Handle').trigger('change');
		$('#alarm30Handle').attr('disabled', 'disabled');
	}
});

$('#alarm30ValiditionOptions').change(function () {
	if ($('#alarm30ValiditionOptions').val() == '1') {
		$('#alarm30ValiditionOptionYes').css('display', 'flex');
	} else {
		$('#alarm30ValiditionOptionYes').css('display', 'none');
	}
});

// Alarm30 RTPs
$("#knifeDetRTP2").click(function () {
	$(this).addClass('active');
	$('#alarm30RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm30RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm30").click(function () {
	$('#knifeDetRTP2').removeClass('active');
	$('#alarm30RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm30RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm30TP").click(function () {
	$('#alarm30Mapper').css('display', 'flex');
});
$("#alarm30CloseMapper").click(function () {
	$('#alarm30Mapper').css('display', 'none');
});