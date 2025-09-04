// Alarms side nav
$(document).ready(function () {
  // Toggle side nav
  $("#openAlarmsSideNav").click(function () {
    $("#moduleStyle2 .sideIconBtn").toggleClass("inActive");
    $(this).removeClass("inActive");
    //    $("#moduleStyle2 .closeLayout").removeClass("inActive");
    $(this).toggleClass("closeNav");
    $("#alarmsSideNav").toggle();
  });


  // Toggle side nav top filter
  $("#alarmsToggleSideNavFilter").click(function () {
    $(this).toggleClass("active");
    var x = document.getElementById("alarmsSideNavFilter");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  });
  // Toggle advanced filter
  $("#toggleAlarmsStackFilter").click(function () {
    $(this).toggleClass('show');
    $("#alarmsSideNav .sideNavAdvancedFilter").slideToggle(200);
  });

  // Search
  $("#alarmsToggleSideNavFilter").click(function () {
    if (($(this).hasClass('active')) && ($('#toggleAlarmsStackFilter').hasClass('show'))) {
      $('#alarmStack').removeClass('bothFilters');
      $('#alarmStack').removeClass('noFilters');
    }
    else if (($(this).hasClass('active')) && (!$('#toggleAlarmsStackFilter').hasClass('show'))) {
      $('#alarmStack').removeClass('noFilters');
      $('#alarmStack').addClass('bothFilters');
    }
    else if ((!$(this).hasClass('active')) && ($('#toggleAlarmsStackFilter').hasClass('show'))) {
      $('#alarmStack').removeClass('bothFilters');
      $('#alarmStack').addClass('noFilters');
    }
    else if ((!$(this).hasClass('active')) && (!$('#toggleAlarmsStackFilter').hasClass('show'))) {
      $('#alarmStack').removeClass('bothFilters');
      $('#alarmStack').removeClass('noFilters');
    }
  });

  // Filters
  $("#toggleAlarmsStackFilter").click(function () {
    if (($(this).hasClass('show')) && ($('#alarmsToggleSideNavFilter').hasClass('active'))) {
      $('#alarmStack').removeClass('bothFilters');
      $('#alarmStack').removeClass('noFilters');
    }
    else if (($(this).hasClass('show')) && (!$('#alarmsToggleSideNavFilter').hasClass('active'))) {
      $('#alarmStack').removeClass('bothFilters');
      $('#alarmStack').addClass('noFilters');
    }
    else if ((!$(this).hasClass('show')) && ($('#alarmsToggleSideNavFilter').hasClass('active'))) {
      $('#alarmStack').removeClass('noFilters');
      $('#alarmStack').addClass('bothFilters');
    }
    else if ((!$(this).hasClass('show')) && (!$('#alarmsToggleSideNavFilter').hasClass('active'))) {
      $('#alarmStack').removeClass('bothFilters');
      $('#alarmStack').removeClass('noFilters');
    }
  });


  // Toggle pin/unpin
  $("#pinAlarmsSideNav").click(function () {
    $(this).hide();
    $("#unpinAlarmsSideNav").show();
    $('#alarmsSideNav').addClass('pinned');
  });
  $("#unpinAlarmsSideNav").click(function () {
    $(this).hide();
    $("#pinAlarmsSideNav").show();
    $('#alarmsSideNav').removeClass('pinned');
  });
  // // Toggle pin/unpin
  // $("#pinMapsSideNav").click(function () {
  //   $(this).hide();
  //   $("#unpinMapsSideNav").show();
  //   $('#mapsSideNav').addClass('pinned');
  // });
  // $("#unpinMapsSideNav").click(function () {
  //   $(this).hide();
  //   $("#pinMapsSideNav").show();
  //   $('#mapsSideNav').removeClass('pinned');
  // });

  // Nav advanced filters
  let ViewOption = '';
  let PriorityClass = '';

  function renderAlarmStack() {
    console.log('View ', ViewOption, ' Pri ', PriorityClass);
    $('#alarmStack .alarmStackContainer').hide();
    $('#alarmStack ' + ViewOption + PriorityClass).slideDown();
  }
  // Show all alarms
  $("#showAllAlarmsStack").click(function () {
    ViewOption = '';
    PriorityClass = '';
    $(this).parent('.filterBtnContainer').children().removeClass('active');
    $('#topAdvancedFilterPri, .navAdvancedFilterBtn.high, .navAdvancedFilterBtn.medium, .navAdvancedFilterBtn.low').removeClass('active');
    $(this).addClass('active');
    $('#alarmStack').children('.alarmStackContainer').slideDown();

    $("#footerImgLoading").show();
    $("#footerMessage").html("Alarms has been successfully loaded");
    footerMessage();
  });
  // Show viewed alarms
  $("#showViewedAlarms").click(function () {
    ViewOption = '.viewedAlarmJS';
    renderAlarmStack();
    $(this).parent('.filterBtnContainer').children().removeClass('active');
    $(this).addClass('active');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Viewed alarms has been successfully loaded");
    footerMessage();
  });
  // Show Unviewed alarms
  $("#showUnViewedAlarms").click(function () {
    ViewOption = '.unViewedAlarmJS';
    renderAlarmStack();
    $(this).parent('.filterBtnContainer').children().removeClass('active');
    $(this).addClass('active');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Uniewed alarms has been successfully loaded");
    footerMessage();
  });
  // Show high priority alarms
  $("#showHighPriorityAlarms").click(function () {
    $(this).parent('.filterBtnContainer').children().removeClass('active');
    $(this).addClass('active');
    $('#showAllAlarmsStack').removeClass('active');
    PriorityClass = '.highPriorityJS';
    renderAlarmStack();

    $("#footerImgLoading").show();
    $("#footerMessage").html("High priority alarms has been successfully loaded");
    footerMessage();
  });
  // Show medium priority alarms
  $("#showMediumPriorityAlarms").click(function () {
    $(this).parent('.filterBtnContainer').children().removeClass('active');
    $(this).addClass('active');
    $('#showAllAlarmsStack').removeClass('active');
    PriorityClass = '.mediumPriorityJS';
    renderAlarmStack();

    $("#footerImgLoading").show();
    $("#footerMessage").html("Medium priority alarms has been successfully loaded");
    footerMessage();
  });
  // Show low priority alarms
  $("#showLowPriorityAlarms").click(function () {
    $(this).parent('.filterBtnContainer').children().removeClass('active');
    $(this).addClass('active');
    $('#showAllAlarmsStack').removeClass('active');
    PriorityClass = '.lowPriorityJS';
    renderAlarmStack();

    $("#footerImgLoading").show();
    $("#footerMessage").html("Low priority alarms has been successfully loaded");
    footerMessage();
  });
  // Expand and Collapse
  $("#expandAllStackAlarms").click(function () {
    $(this).parent('.filterBtnContainer').children().removeClass('active');
    $(this).addClass('active');
    $('#alarmStack .sideNavStackDetails').show();
    $('.alarmSideNavStackBtn').addClass('active');
  });
  $("#collapseAllStackAlarms").click(function () {
    $(this).parent('.filterBtnContainer').children().removeClass('active');
    $(this).addClass('active');
    $('#alarmStack .sideNavStackDetails').hide();
    $('.alarmSideNavStackBtn').removeClass('active');
  });
  // Toggle alarm detail
  $(".alarmSideNavStackBtn").click(function () {
    $(this).toggleClass('active');
    $(this).parent('.alarmSideNavStack').find('.sideNavStackDetails').toggle();
    collAndExpBtnsCheck();
  });

  function collAndExpBtnsCheck() {
    if ($('#alarmStack .alarmSideNavStackBtn.active').length === $('#alarmStack .alarmSideNavStackBtn').length) {
      $('#expandAllStackAlarms').addClass('active');
    } else if ($('#alarmStack .alarmSideNavStackBtn').not('.active').length === $('#alarmStack .alarmSideNavStackBtn').length) {
      $('#collapseAllStackAlarms').addClass('active');
    } else {
      $('#collapseAllStackAlarms').removeClass('active');
      $('#expandAllStackAlarms').removeClass('active');
    }
  }
});

// Toggle enable selection
$("#enableStackSelection").change(function () {
  var checked = $(this).is(':checked'); // Checkbox state
  if (checked) {
    $(this).parent('.checkC').children('.navAdvancedFilterLabel').addClass('active');
    $('#selectAllAlarms').removeAttr('disabled');
    $('.navAdvancedFilterBtn.clear').removeAttr('disabled');
    $("#alarmStack .stackCheckB").css('display', 'block');
  } else {
    $(this).parent('.checkC').children('.navAdvancedFilterLabel').removeClass('active');
    $('#selectAllAlarms').attr('disabled', 'disabled');
    $('.navAdvancedFilterBtn.clear').attr('disabled', 'disabled');
    $("#alarmStack .stackCheckB").css('display', 'none');
    $('.selectThisAlarmStack').each(function () { // Deselect All
      $(this).parent('.checkC').children('.navAdvancedFilterLabel').removeClass('active');
      $(this).prop('checked', false);
    });
  }
});

// Toggle alarm stack selection
$("#selectAllAlarms").change(function () {
  var checked = $(this).is(':checked'); // Checkbox state
  if (checked) { // Select all
    $(this).parent('.checkC').children('.navAdvancedFilterLabel').addClass('active');
    $('#alarmStack .selectThisAlarmStack').each(function () {
      $(this).prop('checked', true);
    });
  } else { // Deselect All
    $('.selectThisAlarmStack').each(function () {
      $(this).parent('.checkC').children('.navAdvancedFilterLabel').removeClass('active');
      $(this).prop('checked', false);
    });
  }
});
$("#alarmStack .selectThisAlarmStack").change(function () { // Changing state of Checkbox
  if ($("#alarmStack .selectThisAlarmStack").length == $('[class="selectThisAlarmStack"]:checked').length) {
    $("#selectAllAlarms").prop("checked", true);
  } else {
    $('#selectAllAlarms').parent('.checkC').children('.navAdvancedFilterLabel').removeClass('active');
    $("#selectAllAlarms").prop('checked', false);
  }
});

function ClearAlarmStackCheck() {
  $('.selectThisAlarmStack').each(function () {
    $(this).parent('.checkC').children('.navAdvancedFilterLabel').removeClass('active');
    $(this).prop('checked', false);
  });
}

// Alarms tabs
function openAlarmsModuleStyle(evt, styleName) {
  var i, x, alarmsModuleAlarmTabs;
  x = $(".alarmsModuleStyle");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  alarmsModuleAlarmTabs = $(".alarmsModuleAlarmTab");
  for (i = 0; i < x.length; i++) {
    alarmsModuleAlarmTabs[i].className = alarmsModuleAlarmTabs[i].className.replace(" active", "");
  }
  document.getElementById(styleName).style.display = "block";
  evt.currentTarget.className += " active";
}

$(".alarmsModuleAlarmTab").click(function () {
  $(".subModuleTabCol.alarmsModule").removeClass("active");
  $(this).parent().addClass("active");
});

// Exporting alarm
$(document).ready(function () {
  $(".alarmModAlarmExport").click(function () {
    $('#alarmModExportAlarm').css('display', 'flex');
    $("#alarmModExportAlarm").fadeIn(200);
    $(".exportFormModal").slideDown(200);
  });

  $("#saveExporting").click(function () {
    $("#alarmModExportAlarm").fadeOut(200);
    $(".exportFormModal").slideUp(200);
  });

  $("#cancelExporting").click(function () {
    $("#alarmModExportAlarm").fadeOut(200);
    $(".exportFormModal").slideUp(200);
  });
});

// Alarms functions
$(document).ready(function () {
  if (sessionStorage.getItem("alarmsModAlarm1") != null) {
    alarmsModAlarm1();
  }
  if (sessionStorage.getItem("alarmsModAlarm2") != null) {
    alarmsModAlarm2();
  }
  if (sessionStorage.getItem("alarmsModAlarm3") != null) {
    alarmsModAlarm3();
  }
  if (sessionStorage.getItem("alarmsModAlarm4") != null) {
    alarmsModAlarm4();
  }
  if (sessionStorage.getItem("alarmsModAlarm5") != null) {
    alarmsModAlarm5();
  }
  if (sessionStorage.getItem("alarmsModAlarm6") != null) {
    alarmsModAlarm6();
  }
  if (sessionStorage.getItem("alarmsModAlarm7") != null) {
    alarmsModAlarm7();
  }
  if (sessionStorage.getItem("alarmsModAlarm8") != null) {
    alarmsModAlarm8();
  }
  if (sessionStorage.getItem("alarmsModAlarm9") != null) {
    alarmsModAlarm9();
  }
  if (sessionStorage.getItem("alarmsModAlarm10") != null) {
    alarmsModAlarm10();
  }
  if (sessionStorage.getItem("alarmsModAlarm11") != null) {
    alarmsModAlarm11();
  }
  if (sessionStorage.getItem("alarmsModAlarm14") != null) {
    alarmsModAlarm14();
  }
  if (sessionStorage.getItem("alarmsModAlarm19") != null) {
    alarmsModAlarm19();
  }
  if (sessionStorage.getItem("alarmsModAlarm20") != null) {
    alarmsModAlarm20();
  }
  if (sessionStorage.getItem("alarmsModAlarm24") != null) {
    alarmsModAlarm24();
  }
  if (sessionStorage.getItem("alarmsModAlarm26") != null) {
    alarmsModAlarm26();
  }
  if (sessionStorage.getItem("alarmsModAlarm27") != null) {
    alarmsModAlarm27();
  }
  if (sessionStorage.getItem("alarmsModAlarm29") != null) {
    alarmsModAlarm29();
  }
  if (sessionStorage.getItem("alarmsModAlarm30") != null) {
    alarmsModAlarm30();
  }
  if (sessionStorage.getItem("alarmsModAlarm31") != null) {
    alarmsModAlarm31();
  }
  if (sessionStorage.getItem("alarmsModAlarm32") != null) {
    alarmsModAlarm32();
  }
  if (sessionStorage.getItem("alarmsModAlarm33") != null) {
    alarmsModAlarm33();
  }
  if (sessionStorage.getItem("alarmsModAlarm34") != null) {
    alarmsModAlarm34();
  }
  if (sessionStorage.getItem("alarmsModAlarm35") != null) {
    alarmsModAlarm35();
  }
  if (sessionStorage.getItem("alarmsModAlarm36") != null) {
    alarmsModAlarm36();
  }
  if (sessionStorage.getItem("alarmsModAlarm37") != null) {
    alarmsModAlarm37();
  }
  if (sessionStorage.getItem("alarmsModAlarm38") != null) {
    alarmsModAlarm38();
  }
  if (sessionStorage.getItem("alarmsModAlarm39") != null) {
    alarmsModAlarm39();
  }
  if (sessionStorage.getItem("alarmsModAlarm40") != null) {
    alarmsModAlarm40();
  }
  if (sessionStorage.getItem("alarmsModAlarm41") != null) {
    alarmsModAlarm41();
  }
  if (sessionStorage.getItem("alarmsModAlarm42") != null) {
    alarmsModAlarm42();
  }
  if (sessionStorage.getItem("alarmsModAlarm43") != null) {
    alarmsModAlarm43();
  }
  if (sessionStorage.getItem("alarmsModAlarm44") != null) {
    alarmsModAlarm44();
  }
  if (sessionStorage.getItem("alarmsModAlarm45") != null) {
    alarmsModAlarm45();
  }
  if (sessionStorage.getItem("alarmsModAlarm46") != null) {
    alarmsModAlarm46();
  }
  if (sessionStorage.getItem("alarmsModAlarm47") != null) {
    alarmsModAlarm47();
  }
  if (sessionStorage.getItem("alarmsModAlarm48") != null) {
    alarmsModAlarm48();
  }
  if (sessionStorage.getItem("alarmsModAlarm49") != null) {
    alarmsModAlarm49();
  }
  if (sessionStorage.getItem("alarmsModAlarm50") != null) {
    alarmsModAlarm50();
  }
  if (sessionStorage.getItem("alarmsModAlarm51") != null) {
    alarmsModAlarm51();
  }
  if (sessionStorage.getItem("alarmsModAlarm52") != null) {
    alarmsModAlarm52();
  }
  if (sessionStorage.getItem("alarmsModAlarm53") != null) {
    alarmsModAlarm53();
  }
  if (sessionStorage.getItem("alarmsModAlarm54") != null) {
    alarmsModAlarm54();
  }
  if (sessionStorage.getItem("alarmsModAlarm55") != null) {
    alarmsModAlarm55();
  }
  if (sessionStorage.getItem("alarmsModAlarm56") != null) {
    alarmsModAlarm56();
  }
  if (sessionStorage.getItem("alarmsModAlarm57") != null) {
    alarmsModAlarm57();
  }
  if (sessionStorage.getItem("alarmsModAlarm58") != null) {
    alarmsModAlarm58();
  }
  if (sessionStorage.getItem("alarmsModAlarm59") != null) {
    alarmsModAlarm59();
  }
  if (sessionStorage.getItem("alarmsModAlarm60") != null) {
    alarmsModAlarm60();
  }
  if (sessionStorage.getItem("alarmsModAlarm61") != null) {
    alarmsModAlarm61();
  }
  if (sessionStorage.getItem("alarmsModAlarm62") != null) {
    alarmsModAlarm62();
  }
  if (sessionStorage.getItem("alarmsModAlarm63") != null) {
    alarmsModAlarm63();
  }
  if (sessionStorage.getItem("alarmsModAlarm64") != null) {
    alarmsModAlarm64();
  }
  if (sessionStorage.getItem("alarmsModAlarm65") != null) {
    alarmsModAlarm65();
  }
  if (sessionStorage.getItem("alarmsModAlarm66") != null) {
    alarmsModAlarm66();
  }
  if (sessionStorage.getItem("alarmsModAlarm67") != null) {
    alarmsModAlarm67();
  }
  if (sessionStorage.getItem("alarmsModAlarm68") != null) {
    alarmsModAlarm68();
  }
  if (sessionStorage.getItem("alarmsModAlarm69") != null) {
    alarmsModAlarm69();
  }
  if (sessionStorage.getItem("alarmsModAlarm70") != null) {
    alarmsModAlarm70();
  }
  if (sessionStorage.getItem("alarmsModAlarm71") != null) {
    alarmsModAlarm71();
  }
  if (sessionStorage.getItem("alarmsModAlarm72") != null) {
    alarmsModAlarm72();
  }
  if (sessionStorage.getItem("alarmsModAlarm73") != null) {
    alarmsModAlarm73();
  }
  if (sessionStorage.getItem("alarmsModAlarm74") != null) {
    alarmsModAlarm74();
  }
  if (sessionStorage.getItem("alarmsModAlarm75") != null) {
    alarmsModAlarm75();
  }
  if (sessionStorage.getItem("alarmsModAlarm76") != null) {
    alarmsModAlarm76();
  }
  if (sessionStorage.getItem("alarmsModAlarm77") != null) {
    alarmsModAlarm77();
  }
  if (sessionStorage.getItem("alarmsModAlarm78") != null) {
    alarmsModAlarm78();
  }
  if (sessionStorage.getItem("alarmsModAlarm79") != null) {
    alarmsModAlarm79();
  }
  if (sessionStorage.getItem("alarmsModAlarm80") != null) {
    alarmsModAlarm80();
  }
  if (sessionStorage.getItem("alarmsModAlarm81") != null) {
    alarmsModAlarm81();
  }
  if (sessionStorage.getItem("alarmsModAlarm82") != null) {
    alarmsModAlarm82();
  }
  if (sessionStorage.getItem("alarmsModAlarm83") != null) {
    alarmsModAlarm83();
  }
  if (sessionStorage.getItem("alarmsModAlarm84") != null) {
    alarmsModAlarm84();
  }
  if (sessionStorage.getItem("alarmsModAlarm85") != null) {
    alarmsModAlarm85();
  }
});

// Alarm 1 (Armed assault)
function alarmsModAlarm1() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.armed").addClass('active');

  $("#alarmTab1").removeAttr("hidden");
  $("#alarmTab1").addClass('active');
  $("#alarmsModuleStyle1").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm1", "alarmsModAlarm1");
}

$("#alarmsModOpenAlarm1").click(function () {
  alarmsModAlarm1();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Armed assault alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm1").click(function () {
  if ($('#alarmTab1').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab1").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.armed").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle1").css('display', 'none');
    $("#alarmTab1").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.armed").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm1");
});

// Alarm 11 (fight detection)
function alarmsModAlarm11() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.fighting").addClass('active');

  $("#alarmTab11").removeAttr("hidden");
  $("#alarmTab11").addClass('active');
  $("#alarmsModuleStyle11").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm11", "alarmsModAlarm11");
}

$("#alarmsModOpenAlarm11").click(function () {
  alarmsModAlarm11();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Fighting detection alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm11").click(function () {
  if ($('#alarmTab11').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab11").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.fighting").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle11").css('display', 'none');
    $("#alarmTab11").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.fighting").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm11");
});

//// Alarm 2 (Blacklisted person)
function alarmsModAlarm2() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.blPerson").addClass('active');

  $("#alarmTab2").removeAttr("hidden");
  $("#alarmTab2").addClass('active');
  $("#alarmsModuleStyle2").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm2", "alarmsModAlarm2");
}

$("#alarmsModOpenAlarm2").click(function () {
  alarmsModAlarm2();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Blacklisted person alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm2").click(function () {
  if ($('#alarmTab2').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab2").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.blPerson").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle2").css('display', 'none');
    $("#alarmTab2").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.blPerson").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm2");
});

//// Alarm 3 (Force door open)
function alarmsModAlarm3() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.vandalism").addClass('active');

  $("#alarmTab3").removeAttr("hidden");
  $("#alarmTab3").addClass('active');
  $("#alarmsModuleStyle3").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm3", "alarmsModAlarm3");
}

$("#alarmsModOpenAlarm3").click(function () {
  alarmsModAlarm3();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Force door open alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm3").click(function () {
  if ($('#alarmTab3').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab3").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.vandalism").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle3").css('display', 'none');
    $("#alarmTab3").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.vandalism").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm3");
});

//// Alarm 4 (Fire)
function alarmsModAlarm4() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.fire").addClass('active');

  $("#alarmTab4").removeAttr("hidden");
  $("#alarmTab4").addClass('active');
  $("#alarmsModuleStyle4").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm4", "alarmsModAlarm4");
}

$("#alarmsModOpenAlarm4").click(function () {
  alarmsModAlarm4();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Fire alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm4").click(function () {
  if ($('#alarmTab4').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab4").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.fire").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle4").css('display', 'none');
    $("#alarmTab4").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.fire").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm4");
});

//// Alarm 5 (Blacklisted car)
function alarmsModAlarm5() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.blCar").addClass('active');

  $("#alarmTab5").removeAttr("hidden");
  $("#alarmTab5").addClass('active');
  $("#alarmsModuleStyle5").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm5", "alarmsModAlarm5");
}

$("#alarmsModOpenAlarm5").click(function () {
  alarmsModAlarm5();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Blacklisted car alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm5").click(function () {
  if ($('#alarmTab5').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab5").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.blCar").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle5").css('display', 'none');
    $("#alarmTab5").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.blCar").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm5");
});

//// Alarm 6 (Unattended Object)
function alarmsModAlarm6() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.unObject").addClass('active');

  $("#alarmTab6").removeAttr("hidden");
  $("#alarmTab6").addClass('active');
  $("#alarmsModuleStyle6").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm6", "alarmsModAlarm6");
}

$("#alarmsModOpenAlarm6").click(function () {
  alarmsModAlarm6();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Unattended object alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm6").click(function () {
  if ($('#alarmTab6').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab6").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.unObject").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle6").css('display', 'none');
    $("#alarmTab6").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.unObject").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm6");
});

//// Alarm 7 (Grafitti)
function alarmsModAlarm7() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.grafitti").addClass('active');

  $("#alarmTab7").removeAttr("hidden");
  $("#alarmTab7").addClass('active');
  $("#alarmsModuleStyle7").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm7", "alarmsModAlarm7");
}

$("#alarmsModOpenAlarm7").click(function () {
  alarmsModAlarm7();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Grafitti alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm7").click(function () {
  if ($('#alarmTab7').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab7").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.grafitti").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle7").css('display', 'none');
    $("#alarmTab7").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.grafitti").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm7");
});

//// Alarm 8 (Planted Object)
function alarmsModAlarm8() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.plantedL").addClass('active');

  $("#alarmTab8").removeAttr("hidden");
  $("#alarmTab8").addClass('active');
  $("#alarmsModuleStyle8").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm8", "alarmsModAlarm8");
}

$("#alarmsModOpenAlarm8").click(function () {
  alarmsModAlarm8();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Planted object alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm8").click(function () {
  if ($('#alarmTab8').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab8").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.plantedL").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle7").css('display', 'none');
    $("#alarmTab8").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.plantedL").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm8");
});

//// Alarm 9 (Crossing line)
function alarmsModAlarm9() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.crossLine").addClass('active');

  $("#alarmTab9").removeAttr("hidden");
  $("#alarmTab9").addClass('active');
  $("#alarmsModuleStyle9").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm9", "alarmsModAlarm9");
}

$("#alarmsModOpenAlarm9").click(function () {
  alarmsModAlarm9();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Crossing line alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm9").click(function () {
  if ($('#alarmTab9').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab9").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.crossLine").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle9").css('display', 'none');
    $("#alarmTab9").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.crossLine").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm9");
});

//// Alarm 10 (Rack refill)
function alarmsModAlarm10() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.rack").addClass('active');

  $("#alarmTab10").removeAttr("hidden");
  $("#alarmTab10").addClass('active');
  $("#alarmsModuleStyle10").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm10", "alarmsModAlarm10");
}

$("#alarmsModOpenAlarm10").click(function () {
  alarmsModAlarm10();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Rack refill alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm10").click(function () {
  if ($('#alarmTab10').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab10").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.rack").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle10").css('display', 'none');
    $("#alarmTab10").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.rack").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm10");
});

// Alarm 14 (Protected Area)
function alarmsModAlarm14() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.protectedArea1").addClass('active');

  $("#alarmTab14").removeAttr("hidden");
  $("#alarmTab14").addClass('active');
  $("#alarmsModuleStyle14").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm14", "alarmsModAlarm14");
}

$("#alarmsModOpenAlarm14").click(function () {
  alarmsModAlarm14();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Protected area alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm14").click(function () {
  if ($('#alarmTab14').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab14").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.protectedArea1").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle14").css('display', 'none');
    $("#alarmTab14").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.protectedArea1").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm14");
});

// Alarm 19 (Laying Person)
function alarmsModAlarm19() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.layingPDeuBahn").addClass('active');

  $("#alarmTab19").removeAttr("hidden");
  $("#alarmTab19").addClass('active');
  $("#alarmsModuleStyle19").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm19", "alarmsModAlarm19");
}

$("#alarmsModOpenAlarm19").click(function () {
  alarmsModAlarm19();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Laying person detection alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm19").click(function () {
  if ($('#alarmTab19').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab19").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.layingPDeuBahn").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle19").css('display', 'none');
    $("#alarmTab19").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.layingPDeuBahn").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm19");
});

// Alarm 20 (Crowd Detection)
function alarmsModAlarm20() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.crowdDeuBahn").addClass('active');

  $("#alarmTab20").removeAttr("hidden");
  $("#alarmTab20").addClass('active');
  $("#alarmsModuleStyle20").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm20", "alarmsModAlarm20");
}

$("#alarmsModOpenAlarm20").click(function () {
  alarmsModAlarm20();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Crowd detection alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm20").click(function () {
  if ($('#alarmTab20').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab20").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.crowdDeuBahn").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle20").css('display', 'none');
    $("#alarmTab20").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.crowdDeuBahn").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm20");
});

// Alarm 24 (Unattended Object)
function alarmsModAlarm24() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.unattendedObjectJS").addClass('active');

  $("#alarmTab24").removeAttr("hidden");
  $("#alarmTab24").addClass('active');
  $("#alarmsModuleStyle24").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm24", "alarmsModAlarm24");
}

$("#alarmsModOpenAlarm24").click(function () {
  alarmsModAlarm24();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Unattended object alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm24").click(function () {
  if ($('#alarmTab24').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab24").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.unattendedObjectJS").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle24").css('display', 'none');
    $("#alarmTab24").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.unattendedObjectJS").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm24");
});

// Germany Airport
// Alarm 26 (Object Detection)
function alarmsModAlarm26() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.unObject2JS").addClass('active');

  $("#alarmTab26").removeAttr("hidden");
  $("#alarmTab26").addClass('active');
  $("#alarmsModuleStyle26").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm26", "alarmsModAlarm26");
}

$("#alarmsModOpenAlarm26").click(function () {
  alarmsModAlarm26();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Object detection alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm26").click(function () {
  if ($('#alarmTab26').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab26").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.unObject2JS").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle26").css('display', 'none');
    $("#alarmTab26").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.unObject2JS").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm26");
});

// Alarm 27 (Animal Detection)
function alarmsModAlarm27() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.animal2").addClass('active');

  $("#alarmTab27").removeAttr("hidden");
  $("#alarmTab27").addClass('active');
  $("#alarmsModuleStyle27").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm27", "alarmsModAlarm27");
}

$("#alarmsModOpenAlarm27").click(function () {
  alarmsModAlarm27();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Animals detection alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm27").click(function () {
  if ($('#alarmTab27').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab27").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.animal2").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle27").css('display', 'none');
    $("#alarmTab27").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.animal2").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm27");
});

// Alarm 29 (Removed Object)
function alarmsModAlarm29() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.removedObject2").addClass('active');

  $("#alarmTab29").removeAttr("hidden");
  $("#alarmTab29").addClass('active');
  $("#alarmsModuleStyle29").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm29", "alarmsModAlarm29");
}

$("#alarmsModOpenAlarm29").click(function () {
  alarmsModAlarm29();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Removed object alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm29").click(function () {
  if ($('#alarmTab29').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab29").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.removedObject2").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle29").css('display', 'none');
    $("#alarmTab29").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.removedObject2").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm29");
});

// Alarm 30 (Knife Detection)
function alarmsModAlarm30() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.knife2").addClass('active');

  $("#alarmTab30").removeAttr("hidden");
  $("#alarmTab30").addClass('active');
  $("#alarmsModuleStyle30").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm30", "alarmsModAlarm30");
}

$("#alarmsModOpenAlarm30").click(function () {
  alarmsModAlarm30();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Knife detection alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm30").click(function () {
  if ($('#alarmTab30').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab30").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.knife2").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle30").css('display', 'none');
    $("#alarmTab30").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.knife2").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm30");
});

// Alarm 31 (Wrong Direction)
function alarmsModAlarm31() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.wrongDirection2").addClass('active');

  $("#alarmTab31").removeAttr("hidden");
  $("#alarmTab31").addClass('active');
  $("#alarmsModuleStyle31").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm31", "alarmsModAlarm31");
}

$("#alarmsModOpenAlarm31").click(function () {
  alarmsModAlarm31();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Wrong direction alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm31").click(function () {
  if ($('#alarmTab31').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab31").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.wrongDirection2").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle31").css('display', 'none');
    $("#alarmTab31").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.wrongDirection2").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm31");
});

// Alarm 32 (Gun Detection)
function alarmsModAlarm32() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.gunDet2JS").addClass('active');

  $("#alarmTab32").removeAttr("hidden");
  $("#alarmTab32").addClass('active');
  $("#alarmsModuleStyle32").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm32", "alarmsModAlarm32");
}

$("#alarmsModOpenAlarm32").click(function () {
  alarmsModAlarm32();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Gun detection alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm32").click(function () {
  if ($('#alarmTab32').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab32").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.gunDet2JS").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle32").css('display', 'none');
    $("#alarmTab32").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.gunDet2JS").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm32");
});

// Alarm 33 (Person Falling and Fighting)
function alarmsModAlarm33() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.fallFighting2").addClass('active');

  $("#alarmTab33").removeAttr("hidden");
  $("#alarmTab33").addClass('active');
  $("#alarmsModuleStyle33").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm33", "alarmsModAlarm33");
}

$("#alarmsModOpenAlarm33").click(function () {
  alarmsModAlarm33();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Falling and fighting detection alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm33").click(function () {
  if ($('#alarmTab33').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab33").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.fallFighting2").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle33").css('display', 'none');
    $("#alarmTab33").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.fallFighting2").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm33");
});

// Alarm 34 (Loitering Detection)
function alarmsModAlarm34() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.loitering2").addClass('active');

  $("#alarmTab34").removeAttr("hidden");
  $("#alarmTab34").addClass('active');
  $("#alarmsModuleStyle34").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm34", "alarmsModAlarm34");
}

$("#alarmsModOpenAlarm34").click(function () {
  alarmsModAlarm34();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Loitering detection alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm34").click(function () {
  if ($('#alarmTab34').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab34").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.loitering2").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle34").css('display', 'none');
    $("#alarmTab34").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.loitering2").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm34");
});

// Alarm 35 (ATM Robbery)
function alarmsModAlarm35() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.robbery2").addClass('active');

  $("#alarmTab35").removeAttr("hidden");
  $("#alarmTab35").addClass('active');
  $("#alarmsModuleStyle35").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm35", "alarmsModAlarm35");
}

$("#alarmsModOpenAlarm35").click(function () {
  alarmsModAlarm35();

  $("#footerImgLoading").show();
  $("#footerMessage").html("ATM robbery alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm35").click(function () {
  if ($('#alarmTab35').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab35").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.robbery2").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle35").css('display', 'none');
    $("#alarmTab35").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.robbery2").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm35");
});

// Alarm 36 (Drugs Detection)
function alarmsModAlarm36() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.drugs2").addClass('active');

  $("#alarmTab36").removeAttr("hidden");
  $("#alarmTab36").addClass('active');
  $("#alarmsModuleStyle36").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm36", "alarmsModAlarm36");
}

$("#alarmsModOpenAlarm36").click(function () {
  alarmsModAlarm36();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Drugs detection alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm36").click(function () {
  if ($('#alarmTab36').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab36").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.drugs2").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle36").css('display', 'none');
    $("#alarmTab36").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.drugs2").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm36");
});

// Alarm 37 (Gas Cartridge Detection)
function alarmsModAlarm37() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.gasCart2").addClass('active');

  $("#alarmTab37").removeAttr("hidden");
  $("#alarmTab37").addClass('active');
  $("#alarmsModuleStyle37").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm37", "alarmsModAlarm37");
}

$("#alarmsModOpenAlarm37").click(function () {
  alarmsModAlarm37();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Gas cartridge detection alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm37").click(function () {
  if ($('#alarmTab37').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab37").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.gasCart2").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle37").css('display', 'none');
    $("#alarmTab37").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.gasCart2").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm37");
});

// Alarm 38 (Unattended Object)
function alarmsModAlarm38() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.unattendedObject2JS").addClass('active');

  $("#alarmTab38").removeAttr("hidden");
  $("#alarmTab38").addClass('active');
  $("#alarmsModuleStyle38").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm38", "alarmsModAlarm38");
}

$("#alarmsModOpenAlarm38").click(function () {
  alarmsModAlarm38();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Unattended object alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm38").click(function () {
  if ($('#alarmTab38').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab38").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.unattendedObject2JS").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle38").css('display', 'none');
    $("#alarmTab38").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.unattendedObject2JS").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm38");
});

// Alarm 39 (Bomb Detection)
function alarmsModAlarm39() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.bombDet2JS").addClass('active');

  $("#alarmTab39").removeAttr("hidden");
  $("#alarmTab39").addClass('active');
  $("#alarmsModuleStyle39").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm39", "alarmsModAlarm39");
}

$("#alarmsModOpenAlarm39").click(function () {
  alarmsModAlarm39();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Bomb detection alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm39").click(function () {
  if ($('#alarmTab39').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab39").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.bombDet2JS").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle39").css('display', 'none');
    $("#alarmTab39").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.bombDet2JS").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm39");
});

// Alarm 40 (Mis-scan Detection)
function alarmsModAlarm40() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.uncGoodsJS").addClass('active');

  $("#alarmTab40").removeAttr("hidden");
  $("#alarmTab40").addClass('active');
  $("#alarmsModuleStyle40").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm40", "alarmsModAlarm40");
}

$("#alarmsModOpenAlarm40").click(function () {
  alarmsModAlarm40();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Mis-scan detection alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm40").click(function () {
  if ($('#alarmTab40').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab40").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.uncGoodsJS").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle40").css('display', 'none');
    $("#alarmTab40").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.uncGoodsJS").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm40");
});

// Alarm 41 (Rack Refill)
function alarmsModAlarm41() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.oxxoRackJS").addClass('active');

  $("#alarmTab41").removeAttr("hidden");
  $("#alarmTab41").addClass('active');
  $("#alarmsModuleStyle41").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm41", "alarmsModAlarm41");
}

$("#alarmsModOpenAlarm41").click(function () {
  alarmsModAlarm41();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Rack refill alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm41").click(function () {
  if ($('#alarmTab41').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab41").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.oxxoRackJS").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle41").css('display', 'none');
    $("#alarmTab41").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.oxxoRackJS").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm41");
});

// Alarm 42 (Low Conversion Rate)
function alarmsModAlarm42() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.lowConverJS").addClass('active');

  $("#alarmTab42").removeAttr("hidden");
  $("#alarmTab42").addClass('active');
  $("#alarmsModuleStyle42").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm42", "alarmsModAlarm42");
}

$("#alarmsModOpenAlarm42").click(function () {
  alarmsModAlarm42();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Low conversion rate alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm42").click(function () {
  if ($('#alarmTab42').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab42").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.lowConverJS").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle42").css('display', 'none');
    $("#alarmTab42").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.lowConverJS").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm42");
});

// Alarm 43 (Maximum Capacity Reached)
function alarmsModAlarm43() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.maxCapacJS").addClass('active');

  $("#alarmTab43").removeAttr("hidden");
  $("#alarmTab43").addClass('active');
  $("#alarmsModuleStyle43").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm43", "alarmsModAlarm43");
}

$("#alarmsModOpenAlarm43").click(function () {
  alarmsModAlarm43();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Maximum capacity reached alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm43").click(function () {
  if ($('#alarmTab43').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab43").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.maxCapacJS").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle43").css('display', 'none');
    $("#alarmTab43").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.maxCapacJS").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm43");
});

// Alarm 44 (High Purchase Detected)
function alarmsModAlarm44() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.purchaseJS").addClass('active');

  $("#alarmTab44").removeAttr("hidden");
  $("#alarmTab44").addClass('active');
  $("#alarmsModuleStyle44").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm44", "alarmsModAlarm44");
}

$("#alarmsModOpenAlarm44").click(function () {
  alarmsModAlarm44();

  $("#footerImgLoading").show();
  $("#footerMessage").html("High purchase detected alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm44").click(function () {
  if ($('#alarmTab44').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab44").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.purchaseJS").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle44").css('display', 'none');
    $("#alarmTab44").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.purchaseJS").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm44");
});

// Alarm 45 (Demographics Alert)
function alarmsModAlarm45() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.demographicsJS").addClass('active');

  $("#alarmTab45").removeAttr("hidden");
  $("#alarmTab45").addClass('active');
  $("#alarmsModuleStyle45").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm45", "alarmsModAlarm45");
}

$("#alarmsModOpenAlarm45").click(function () {
  alarmsModAlarm45();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Demographics alert is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm45").click(function () {
  if ($('#alarmTab45').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab45").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.demographicsJS").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle45").css('display', 'none');
    $("#alarmTab45").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.demographicsJS").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm45");
});

// Alarm 46 (Low Visits)
function alarmsModAlarm46() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.headCountJS").addClass('active');

  $("#alarmTab46").removeAttr("hidden");
  $("#alarmTab46").addClass('active');
  $("#alarmsModuleStyle46").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm46", "alarmsModAlarm46");
}

$("#alarmsModOpenAlarm46").click(function () {
  alarmsModAlarm46();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Low visits alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm46").click(function () {
  if ($('#alarmTab46').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab46").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.headCountJS").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle46").css('display', 'none');
    $("#alarmTab46").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.headCountJS").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm46");
});

// Alarm 47 (Gun Detected)
function alarmsModAlarm47() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.gunMarketJS").addClass('active');

  $("#alarmTab47").removeAttr("hidden");
  $("#alarmTab47").addClass('active');
  $("#alarmsModuleStyle47").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm47", "alarmsModAlarm47");
}

$("#alarmsModOpenAlarm47").click(function () {
  alarmsModAlarm47();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Gun detected alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm47").click(function () {
  if ($('#alarmTab47').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab47").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.gunMarketJS").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle47").css('display', 'none');
    $("#alarmTab47").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.gunMarketJS").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm47");
});

// Alarm 48 (High Fever Detected)
function alarmsModAlarm48() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.feverJS").addClass('active');

  $("#alarmTab48").removeAttr("hidden");
  $("#alarmTab48").addClass('active');
  $("#alarmsModuleStyle48").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm48", "alarmsModAlarm48");
}

$("#alarmsModOpenAlarm48").click(function () {
  alarmsModAlarm48();

  $("#footerImgLoading").show();
  $("#footerMessage").html("High fever detected alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm48").click(function () {
  if ($('#alarmTab48').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab48").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.feverJS").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle48").css('display', 'none');
    $("#alarmTab48").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.feverJS").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm48");
});

// Alarm 49 (Mask not Detected)
function alarmsModAlarm49() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.maskDetJS").addClass('active');

  $("#alarmTab49").removeAttr("hidden");
  $("#alarmTab49").addClass('active');
  $("#alarmsModuleStyle49").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm49", "alarmsModAlarm49");
}

$("#alarmsModOpenAlarm49").click(function () {
  alarmsModAlarm49();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Mask not detected alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm49").click(function () {
  if ($('#alarmTab49').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab49").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.maskDetJS").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle49").css('display', 'none');
    $("#alarmTab49").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.maskDetJS").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm49");
});

// Alarm 50 (Social Media)
function alarmsModAlarm50() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.socialMPostJS").addClass('active');

  $("#alarmTab50").removeAttr("hidden");
  $("#alarmTab50").addClass('active');
  $("#alarmsModuleStyle50").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm50", "alarmsModAlarm50");
}

$("#alarmsModOpenAlarm50").click(function () {
  alarmsModAlarm50();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Social media alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm50").click(function () {
  if ($('#alarmTab50').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab50").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.socialMPostJS").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle50").css('display', 'none');
    $("#alarmTab50").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.socialMPostJS").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm50");
});

// Alarm 51 (High Flow of People)
function alarmsModAlarm51() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.flowPeopleJS").addClass('active');

  $("#alarmTab51").removeAttr("hidden");
  $("#alarmTab51").addClass('active');
  $("#alarmsModuleStyle51").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm51", "alarmsModAlarm51");
}

$("#alarmsModOpenAlarm51").click(function () {
  alarmsModAlarm51();

  $("#footerImgLoading").show();
  $("#footerMessage").html("High flow of people alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm51").click(function () {
  if ($('#alarmTab51').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab51").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.flowPeopleJS").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle51").css('display', 'none');
    $("#alarmTab51").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.flowPeopleJS").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm51");
});

// Alarm 52 (Intrusion detection)
function alarmsModAlarm52() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.intrusionDor").addClass('active');

  $("#alarmTab52").removeAttr("hidden");
  $("#alarmTab52").addClass('active');
  $("#alarmsModuleStyle52").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm52", "alarmsModAlarm52");
}

$("#alarmsModOpenAlarm52").click(function () {
  alarmsModAlarm52();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Intrusion detection alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm52").click(function () {
  if ($('#alarmTab52').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab52").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.intrusionDor").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle52").css('display', 'none');
    $("#alarmTab52").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.intrusionDor").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm52");
});

// Alarm 53 (Unattended object)
function alarmsModAlarm53() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.unObjectDor").addClass('active');

  $("#alarmTab53").removeAttr("hidden");
  $("#alarmTab53").addClass('active');
  $("#alarmsModuleStyle53").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm53", "alarmsModAlarm53");
}

$("#alarmsModOpenAlarm53").click(function () {
  alarmsModAlarm53();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Unattended object alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm53").click(function () {
  if ($('#alarmTab53').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab53").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.unObjectDor").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle53").css('display', 'none');
    $("#alarmTab53").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.unObjectDor").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm53");
});

// Alarm 54 (Fire detection)
function alarmsModAlarm54() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.fireDor").addClass('active');

  $("#alarmTab54").removeAttr("hidden");
  $("#alarmTab54").addClass('active');
  $("#alarmsModuleStyle54").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm54", "alarmsModAlarm54");
}

$("#alarmsModOpenAlarm54").click(function () {
  alarmsModAlarm54();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Fire detection alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm54").click(function () {
  if ($('#alarmTab54').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab54").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.fireDor").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle54").css('display', 'none');
    $("#alarmTab54").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.fireDor").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm54");
});

// Alarm 55 (Violence detection)
function alarmsModAlarm55() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.fightingDor").addClass('active');

  $("#alarmTab55").removeAttr("hidden");
  $("#alarmTab55").addClass('active');
  $("#alarmsModuleStyle55").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm55", "alarmsModAlarm55");
}

$("#alarmsModOpenAlarm55").click(function () {
  alarmsModAlarm55();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Violence detection alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm55").click(function () {
  if ($('#alarmTab55').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab55").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.fightingDor").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle55").css('display', 'none');
    $("#alarmTab55").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.fightingDor").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm55");
});

// Alarm 56 (Maximum capacity reached)
function alarmsModAlarm56() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.maxCapacDor").addClass('active');

  $("#alarmTab56").removeAttr("hidden");
  $("#alarmTab56").addClass('active');
  $("#alarmsModuleStyle56").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm56", "alarmsModAlarm56");
}

$("#alarmsModOpenAlarm56").click(function () {
  alarmsModAlarm56();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Maximum capacity reached alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm56").click(function () {
  if ($('#alarmTab56').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab56").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.maxCapacDor").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle56").css('display', 'none');
    $("#alarmTab56").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.maxCapacDor").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm56");
});

// Alarm 57 (Knife detection)
function alarmsModAlarm57() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.knifeDor").addClass('active');

  $("#alarmTab57").removeAttr("hidden");
  $("#alarmTab57").addClass('active');
  $("#alarmsModuleStyle57").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm57", "alarmsModAlarm57");
}

$("#alarmsModOpenAlarm57").click(function () {
  alarmsModAlarm57();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Knife detection alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm57").click(function () {
  if ($('#alarmTab57').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab57").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.knifeDor").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle57").css('display', 'none');
    $("#alarmTab57").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.knifeDor").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm57");
});

// Alarm 58 (Gun detection)
function alarmsModAlarm58() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.gunDor").addClass('active');

  $("#alarmTab58").removeAttr("hidden");
  $("#alarmTab58").addClass('active');
  $("#alarmsModuleStyle58").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm58", "alarmsModAlarm58");
}

$("#alarmsModOpenAlarm58").click(function () {
  alarmsModAlarm58();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Gun detection alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm58").click(function () {
  if ($('#alarmTab58').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab58").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.gunDor").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle58").css('display', 'none');
    $("#alarmTab58").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.gunDor").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm58");
});

// Alarm 59 (Gas Cartridge Detection)
function alarmsModAlarm59() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.gasCartDor").addClass('active');

  $("#alarmTab59").removeAttr("hidden");
  $("#alarmTab59").addClass('active');
  $("#alarmsModuleStyle59").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm59", "alarmsModAlarm59");
}

$("#alarmsModOpenAlarm59").click(function () {
  alarmsModAlarm59();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Gas cartridge detection alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm59").click(function () {
  if ($('#alarmTab59').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab59").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.gasCartDor").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle59").css('display', 'none');
    $("#alarmTab59").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.gasCartDor").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm59");
});

// Alarm 60 (Bomb Detection)
function alarmsModAlarm60() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.bombDor").addClass('active');

  $("#alarmTab60").removeAttr("hidden");
  $("#alarmTab60").addClass('active');
  $("#alarmsModuleStyle60").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm60", "alarmsModAlarm60");
}

$("#alarmsModOpenAlarm60").click(function () {
  alarmsModAlarm60();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Bomb detection alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm60").click(function () {
  if ($('#alarmTab60').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab60").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.bombDor").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle60").css('display', 'none');
    $("#alarmTab60").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.bombDor").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm60");
});

// Alarm 61 (Blocked access card)
function alarmsModAlarm61() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.egyBloCard").addClass('active');

  $("#alarmTab61").removeAttr("hidden");
  $("#alarmTab61").addClass('active');
  $("#alarmsModuleStyle61").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm61", "alarmsModAlarm61");
}

$("#alarmsModOpenAlarm61").click(function () {
  alarmsModAlarm61();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Blocked access card alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm61").click(function () {
  if ($('#alarmTab61').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab61").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyBloCard").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle61").css('display', 'none');
    $("#alarmTab61").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyBloCard").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm61");
});
// Alarm 62 (Door open too long)
function alarmsModAlarm62() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.egyDoorOpen").addClass('active');

  $("#alarmTab62").removeAttr("hidden");
  $("#alarmTab62").addClass('active');
  $("#alarmsModuleStyle62").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm62", "alarmsModAlarm62");
}

$("#alarmsModOpenAlarm62").click(function () {
  alarmsModAlarm62();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Door open too long alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm62").click(function () {
  if ($('#alarmTab62').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab62").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyDoorOpen").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle62").css('display', 'none');
    $("#alarmTab62").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyDoorOpen").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm62");
});
// Alarm 63 (Device disconnected)
function alarmsModAlarm63() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.egyDeviceDis").addClass('active');

  $("#alarmTab63").removeAttr("hidden");
  $("#alarmTab63").addClass('active');
  $("#alarmsModuleStyle63").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm63", "alarmsModAlarm63");
}

$("#alarmsModOpenAlarm63").click(function () {
  alarmsModAlarm63();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Device disconnected alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm63").click(function () {
  if ($('#alarmTab63').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab63").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyDeviceDis").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle63").css('display', 'none');
    $("#alarmTab63").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyDeviceDis").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm63");
});
// Alarm 64 (Duress)
function alarmsModAlarm64() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.egyDuress").addClass('active');

  $("#alarmTab64").removeAttr("hidden");
  $("#alarmTab64").addClass('active');
  $("#alarmsModuleStyle64").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm64", "alarmsModAlarm64");
}

$("#alarmsModOpenAlarm64").click(function () {
  alarmsModAlarm64();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Duress alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm64").click(function () {
  if ($('#alarmTab64').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab64").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyDuress").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle64").css('display', 'none');
    $("#alarmTab64").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyDuress").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm64");
});
// Alarm 65 (Remote open)
function alarmsModAlarm65() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.egyRemoteOp").addClass('active');

  $("#alarmTab65").removeAttr("hidden");
  $("#alarmTab65").addClass('active');
  $("#alarmsModuleStyle65").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm65", "alarmsModAlarm65");
}

$("#alarmsModOpenAlarm65").click(function () {
  alarmsModAlarm65();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Remote open alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm65").click(function () {
  if ($('#alarmTab65').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab65").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyRemoteOp").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle65").css('display', 'none');
    $("#alarmTab65").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyRemoteOp").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm65");
});
// Alarm 66 (Over electricity consumption)
function alarmsModAlarm66() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.egyElecCons").addClass('active');

  $("#alarmTab66").removeAttr("hidden");
  $("#alarmTab66").addClass('active');
  $("#alarmsModuleStyle66").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm66", "alarmsModAlarm66");
}

$("#alarmsModOpenAlarm66").click(function () {
  alarmsModAlarm66();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Over electricity consumption alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm66").click(function () {
  if ($('#alarmTab66').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab66").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyElecCons").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle66").css('display', 'none');
    $("#alarmTab66").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyElecCons").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm66");
});
// Alarm 67 (Over water consumption)
function alarmsModAlarm67() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.egyWatCons").addClass('active');

  $("#alarmTab67").removeAttr("hidden");
  $("#alarmTab67").addClass('active');
  $("#alarmsModuleStyle67").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm67", "alarmsModAlarm67");
}

$("#alarmsModOpenAlarm67").click(function () {
  alarmsModAlarm67();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Over water consumption alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm67").click(function () {
  if ($('#alarmTab67').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab67").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyWatCons").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle67").css('display', 'none');
    $("#alarmTab67").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyWatCons").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm67");
});

// Alarm 68 (Double check unmatched face)
function alarmsModAlarm68() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.egyFaceRe").addClass('active');

  $("#alarmTab68").removeAttr("hidden");
  $("#alarmTab68").addClass('active');
  $("#alarmsModuleStyle68").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm68", "alarmsModAlarm68");
}

$("#alarmsModOpenAlarm68").click(function () {
  alarmsModAlarm68();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Double check unmatched face alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm68").click(function () {
  if ($('#alarmTab68').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab68").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyFaceRe").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle68").css('display', 'none');
    $("#alarmTab68").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyFaceRe").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm68");
});
// Alarm 69 (People capacity reached)
function alarmsModAlarm69() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.egyPCapa").addClass('active');

  $("#alarmTab69").removeAttr("hidden");
  $("#alarmTab69").addClass('active');
  $("#alarmsModuleStyle69").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm69", "alarmsModAlarm69");
}

$("#alarmsModOpenAlarm69").click(function () {
  alarmsModAlarm69();

  $("#footerImgLoading").show();
  $("#footerMessage").html("People capacity reached alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm69").click(function () {
  if ($('#alarmTab69').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab69").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyPCapa").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle69").css('display', 'none');
    $("#alarmTab69").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyPCapa").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm69");
});
// Alarm 70 (Low soil moisture level)
function alarmsModAlarm70() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.egyLowSoil").addClass('active');

  $("#alarmTab70").removeAttr("hidden");
  $("#alarmTab70").addClass('active');
  $("#alarmsModuleStyle70").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm70", "alarmsModAlarm70");
}

$("#alarmsModOpenAlarm70").click(function () {
  alarmsModAlarm70();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Low soil moisture level alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm70").click(function () {
  if ($('#alarmTab70').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab70").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyLowSoil").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle70").css('display', 'none');
    $("#alarmTab70").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyLowSoil").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm70");
});
// Alarm 71 (Sprinkler wrong direction)
function alarmsModAlarm71() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.egySprDirec").addClass('active');

  $("#alarmTab71").removeAttr("hidden");
  $("#alarmTab71").addClass('active');
  $("#alarmsModuleStyle71").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm71", "alarmsModAlarm71");
}

$("#alarmsModOpenAlarm71").click(function () {
  alarmsModAlarm71();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Sprinkler wrong direction alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm71").click(function () {
  if ($('#alarmTab71').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab71").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egySprDirec").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle71").css('display', 'none');
    $("#alarmTab71").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egySprDirec").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm71");
});
// Alarm 72 (Water leakage)
function alarmsModAlarm72() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.egyWatLeakage").addClass('active');

  $("#alarmTab72").removeAttr("hidden");
  $("#alarmTab72").addClass('active');
  $("#alarmsModuleStyle72").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm72", "alarmsModAlarm72");
}

$("#alarmsModOpenAlarm72").click(function () {
  alarmsModAlarm72();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Water leakage alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm72").click(function () {
  if ($('#alarmTab72').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab72").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyWatLeakage").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle72").css('display', 'none');
    $("#alarmTab72").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyWatLeakage").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm72");
});
// Alarm 73 (Bad water quality)
function alarmsModAlarm73() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.egyBadWater").addClass('active');

  $("#alarmTab73").removeAttr("hidden");
  $("#alarmTab73").addClass('active');
  $("#alarmsModuleStyle73").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm73", "alarmsModAlarm73");
}

$("#alarmsModOpenAlarm73").click(function () {
  alarmsModAlarm73();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Bad water quality alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm73").click(function () {
  if ($('#alarmTab73').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab73").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyBadWater").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle73").css('display', 'none');
    $("#alarmTab73").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyBadWater").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm73");
});
// Alarm 74 (High water pressure)
function alarmsModAlarm74() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.egyHighWatPress").addClass('active');

  $("#alarmTab74").removeAttr("hidden");
  $("#alarmTab74").addClass('active');
  $("#alarmsModuleStyle74").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm74", "alarmsModAlarm74");
}

$("#alarmsModOpenAlarm74").click(function () {
  alarmsModAlarm74();

  $("#footerImgLoading").show();
  $("#footerMessage").html("High water pressure alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm74").click(function () {
  if ($('#alarmTab74').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab74").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyHighWatPress").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle74").css('display', 'none');
    $("#alarmTab74").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyHighWatPress").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm74");
});
// Alarm 75 (Pump low water level)
function alarmsModAlarm75() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.egyLowWater").addClass('active');

  $("#alarmTab75").removeAttr("hidden");
  $("#alarmTab75").addClass('active');
  $("#alarmsModuleStyle75").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm75", "alarmsModAlarm75");
}

$("#alarmsModOpenAlarm75").click(function () {
  alarmsModAlarm75();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Pump low water level alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm75").click(function () {
  if ($('#alarmTab75').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab75").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyLowWater").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle75").css('display', 'none');
    $("#alarmTab75").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyLowWater").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm75");
});
// Alarm 76 (Defected pump tank)
function alarmsModAlarm76() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.egyDefePump").addClass('active');

  $("#alarmTab76").removeAttr("hidden");
  $("#alarmTab76").addClass('active');
  $("#alarmsModuleStyle76").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm76", "alarmsModAlarm76");
}

$("#alarmsModOpenAlarm76").click(function () {
  alarmsModAlarm76();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Defected pump tank alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm76").click(function () {
  if ($('#alarmTab76').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab76").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyDefePump").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle76").css('display', 'none');
    $("#alarmTab76").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyDefePump").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm76");
});

// Alarm 77 (LNPR blacklist)
function alarmsModAlarm77() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.egyLNPR").addClass('active');

  $("#alarmTab77").removeAttr("hidden");
  $("#alarmTab77").addClass('active');
  $("#alarmsModuleStyle77").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm77", "alarmsModAlarm77");
}

$("#alarmsModOpenAlarm77").click(function () {
  alarmsModAlarm77();

  $("#footerImgLoading").show();
  $("#footerMessage").html("LNPR blacklist alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm77").click(function () {
  if ($('#alarmTab77').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab77").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyLNPR").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle77").css('display', 'none');
    $("#alarmTab77").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyLNPR").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm77");
});
// Alarm 78 (Wrong direction vehicle)
function alarmsModAlarm78() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.egyWongDir").addClass('active');

  $("#alarmTab78").removeAttr("hidden");
  $("#alarmTab78").addClass('active');
  $("#alarmsModuleStyle78").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm78", "alarmsModAlarm78");
}

$("#alarmsModOpenAlarm78").click(function () {
  alarmsModAlarm78();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Wrong direction vehicle alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm78").click(function () {
  if ($('#alarmTab78').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab78").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyWongDir").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle78").css('display', 'none');
    $("#alarmTab78").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyWongDir").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm78");
});
// Alarm 79 (Electricity spike)
function alarmsModAlarm79() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.egyElecSpike").addClass('active');

  $("#alarmTab79").removeAttr("hidden");
  $("#alarmTab79").addClass('active');
  $("#alarmsModuleStyle79").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm79", "alarmsModAlarm79");
}

$("#alarmsModOpenAlarm79").click(function () {
  alarmsModAlarm79();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Electricity spike alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm79").click(function () {
  if ($('#alarmTab79').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab79").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyElecSpike").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle79").css('display', 'none');
    $("#alarmTab79").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyElecSpike").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm79");
});
// Alarm 80 (High usage rate)
function alarmsModAlarm80() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.egyHighUsage").addClass('active');

  $("#alarmTab80").removeAttr("hidden");
  $("#alarmTab80").addClass('active');
  $("#alarmsModuleStyle80").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm80", "alarmsModAlarm80");
}

$("#alarmsModOpenAlarm80").click(function () {
  alarmsModAlarm80();

  $("#footerImgLoading").show();
  $("#footerMessage").html("High usage rate alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm80").click(function () {
  if ($('#alarmTab80').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab80").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyHighUsage").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle80").css('display', 'none');
    $("#alarmTab80").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyHighUsage").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm80");
});
// Alarm 81 (Street light malfunction)
function alarmsModAlarm81() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.egyStreetLight").addClass('active');

  $("#alarmTab81").removeAttr("hidden");
  $("#alarmTab81").addClass('active');
  $("#alarmsModuleStyle81").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm81", "alarmsModAlarm81");
}

$("#alarmsModOpenAlarm81").click(function () {
  alarmsModAlarm81();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Street light malfunction alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm81").click(function () {
  if ($('#alarmTab81').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab81").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyStreetLight").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle81").css('display', 'none');
    $("#alarmTab81").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyStreetLight").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm81");
});
// Alarm 82 (Full Trash bin)
function alarmsModAlarm82() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.egyFullTrash").addClass('active');

  $("#alarmTab82").removeAttr("hidden");
  $("#alarmTab82").addClass('active');
  $("#alarmsModuleStyle82").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm82", "alarmsModAlarm82");
}

$("#alarmsModOpenAlarm82").click(function () {
  alarmsModAlarm82();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Full Trash bin alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm82").click(function () {
  if ($('#alarmTab82').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab82").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyFullTrash").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle82").css('display', 'none');
    $("#alarmTab82").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.egyFullTrash").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm82");
});
// Alarm 83 (Storm Detection)
function alarmsModAlarm83() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.bavStorm").addClass('active');

  $("#alarmTab83").removeAttr("hidden");
  $("#alarmTab83").addClass('active');
  $("#alarmsModuleStyle83").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm83", "alarmsModAlarm83");
}

$("#alarmsModOpenAlarm83").click(function () {
  alarmsModAlarm83();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Storm detection alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm83").click(function () {
  if ($('#alarmTab83').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab83").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.bavStorm").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle83").css('display', 'none');
    $("#alarmTab83").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.bavStorm").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm83");
});
// Alarm 84 (Forest Fire Detection)
function alarmsModAlarm84() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.bavForstFire").addClass('active');

  $("#alarmTab84").removeAttr("hidden");
  $("#alarmTab84").addClass('active');
  $("#alarmsModuleStyle84").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm84", "alarmsModAlarm84");
}

$("#alarmsModOpenAlarm84").click(function () {
  alarmsModAlarm84();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Forest fire detection alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm84").click(function () {
  if ($('#alarmTab84').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab84").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.bavForstFire").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle84").css('display', 'none');
    $("#alarmTab84").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.bavForstFire").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm84");
});
// Alarm 85 (Water Flood Detection)
function alarmsModAlarm85() {
  $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
  $(".alarmsModuleStyle").css('display', 'none');

  $(".alarmSideNavStackIcon.bavWaterFlood").addClass('active');

  $("#alarmTab85").removeAttr("hidden");
  $("#alarmTab85").addClass('active');
  $("#alarmsModuleStyle85").css('display', 'block');
  sessionStorage.setItem("alarmsModAlarm85", "alarmsModAlarm85");
}

$("#alarmsModOpenAlarm85").click(function () {
  alarmsModAlarm85();

  $("#footerImgLoading").show();
  $("#footerMessage").html("Water flood detection alarm is running now..");
  footerMessage();
});
$("#closeAlarmsModAlarm85").click(function () {
  if ($('#alarmTab85').hasClass('active')) {
    $('#alarmsModuleHeader .subModuleTabCol').removeClass('active');
    $(".alarmsModuleStyle").css('display', 'none');
    $("#alarmTab85").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.bavWaterFlood").removeClass('active');

    $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
    $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
  } else {
    $("#alarmsModuleStyle85").css('display', 'none');
    $("#alarmTab85").attr("hidden", "hidden");

    $(".alarmSideNavStackIcon.bavWaterFlood").removeClass('active');
  }
  sessionStorage.removeItem("alarmsModAlarm85");
});
// First opend alarm display
$(document).ready(function () {
  $('#alarmsModuleHeader .subModuleTabCol:visible:first').children('.alarmsModuleAlarmTab').click();
  $('#alarmsModuleHeader').find('.subModuleTabCol:visible:first').addClass("active");
});

// Close open menus
var $alarmsSideNav = $('#alarmsSideNav, #moduleStyle2 .sideIconBtn');
$(document).mouseup(function (e) {
  if (!($alarmsSideNav.is(e.target))
    && ($alarmsSideNav.has(e.target).length === 0)
    && !($('#alarmsSideNav').hasClass('pinned'))) {
    $('#alarmsSideNav').css("display", "none");
    $('#moduleStyle2 .sideIconBtn').removeClass('inActive');
    $('#moduleStyle2 .sideIconBtn').removeClass('closeNav');
  }
});

// Select dropdown menus
$(document).ready(function () {
  $('select').select2({
    minimumResultsForSearch: -1
  });
});

// data tables
$(document).ready(function () {
  $('.dataTableScroll').dataTable({
    "scrollY": "300px",
    "scrollCollapse": true,
    "filter": false,
    "paging": false,
    "bInfo": false
  });
});
