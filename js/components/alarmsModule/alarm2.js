// Alarm2 (Blacklisted person) details tabs
function openAlarm2DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm2DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm2DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm2 events
$("#blPersonEvent1").click(function () {
	$(this).addClass('active');
	$('#alarm2EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm2EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm2").click(function () {
	$('#blPersonEvent1').removeClass('active');
	$('#alarm2EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm2EventDescription').addClass('inact');
});

//// Alarm2 SOP
$("#blPersonAlarmValidition").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#blPersonValiditionOptions').removeAttr('disabled');
	} else {
		$("#blPersonValiditionOptions, #blPesronHandle").val('0');
		$('#blPersonValiditionOptions, #blPesronHandle').trigger('change');
		$('#blPersonValiditionOptions').attr('disabled', 'disabled');
	}
});

$("#blPersonAlarmHandle").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#blPesronHandle').removeAttr('disabled');
	} else {
		$("#blPesronHandle").val('0');
		$('#blPesronHandle').trigger('change');
		$('#blPesronHandle').attr('disabled', 'disabled');
	}
});

$('#blPersonValiditionOptions').change(function () {
	if ($('#blPersonValiditionOptions').val() == '1') {
		$('#blPersonValiditionOptionYes').css('display', 'flex');
	} else {
		$('#blPersonValiditionOptionYes').css('display', 'none');
	}
});

// Alarm2 RTPs
$("#blPersonRTP1").click(function () {
  $(this).addClass('active');
	$('#alarm2RTPDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm2RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm2").click(function () {
	$('#blPersonRTP1').removeClass('active');
	$('#alarm2RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm2RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm2TP").click(function () {
	$('#alarm2Mapper').css('display', 'flex');
});
$("#alarm2CloseMapper").click(function () {
	$('#alarm2Mapper').css('display', 'none');
});