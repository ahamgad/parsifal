// Alarm41 (Rack refill) details tabs
function openAlarm41DetStyle(evt, styleName) {
	var i, x, alarmDetailsTabs;
	x = $(".alarm41DetStyle");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	alarmDetailsTabs = $(".alarm41DetailsTab");
	for (i = 0; i < x.length; i++) {
		alarmDetailsTabs[i].className = alarmDetailsTabs[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "flex";
	evt.currentTarget.className += " active";
}

// Alarm41 events
$("#rackEvent41").click(function () {
	$(this).addClass('active');
	$('#alarm41EventDescription .alarmEventDescription').css('display', 'flex');
	$('#alarm41EventDescription').removeClass('inact');
});
$("#closeDocumentAlarm41").click(function () {
	$('#rackEvent41').removeClass('active');
	$('#alarm41EventDescription .alarmEventDescription').css('display', 'none');
	$('#alarm41EventDescription').addClass('inact');
});

// Alarm41 SOP
$("#rackAlarmValidition1").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#rackValiditionOptions1').removeAttr('disabled');
	} else {
		$("#rackValiditionOptions1, #rackHandle1").val('0');
		$('#rackValiditionOptions1, #rackHandle1').trigger('change');
		$('#rackValiditionOptions1').attr('disabled', 'disabled');
	}
});

$("#rackAlarmHandle1").change(function () {
	var checked = $(this).is(':checked'); // Checkbox state
	if (checked) {
		$('#rackHandle1').removeAttr('disabled');
	} else {
		$("#rackHandle1").val('0');
		$('#rackHandle1').trigger('change');
		$('#rackHandle1').attr('disabled', 'disabled');
	}
});

$('#rackValiditionOptions1').change(function () {
	if ($('#rackValiditionOptions1').val() == '1') {
		$('#rackValiditionOptionYes1').css('display', 'flex');
	} else {
		$('#rackValiditionOptionYes1').css('display', 'none');
	}
});

// Alarm41 RTPs
$("#rackRTP41").click(function () {
	$(this).addClass('active');
	$('#alarm41RTPDescription .alarmEventDescription').css('display', 'flex');

	$('#alarm41RTPDescription').removeClass('inact');
});
$("#closeRTPAlarm41").click(function () {
	$('#rackRTP41').removeClass('active');
	$('#alarm41RTPDescription .alarmEventDescription').css('display', 'none');
	$('#alarm41RTPDescription').addClass('inact');
});

// Site map video mapper
$("#alarm41TP").click(function () {
	$('#alarm41Mapper').css('display', 'flex');
});
$("#alarm41CloseMapper").click(function () {
	$('#alarm41Mapper').css('display', 'none');
});