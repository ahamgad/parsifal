// Home active classes
$(document).ready(function () {
  $('.homeCardOpenMap, .homeCardIconMap').click(function () {
    $(".prefMap").addClass('active');
    $("#footerImgLoading").show();
    $("#footerMessage").html("Maps is running now..");
    footerMessage();
  });
  $('.prefMap').click(function () {
    if ($(".prefMap").hasClass('active')) {
      $("#footerImgLoading").show();
      $("#footerMessage").html("Maps is running now..");
      footerMessage();
    }
  });
  $('.homeCardOpenAlarms, .homeCardIconAlarms').click(function () {
    $(".prefAlarms").addClass('active');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Alarms is running now..");
    footerMessage();
  });
  $('.prefAlarms').click(function () {
    if ($(".prefAlarms").hasClass('active')) {
      $("#footerImgLoading").show();
      $("#footerMessage").html("Alarms is running now..");
      footerMessage();
    }
  });
  $('.homeCardOpenBID, .homeCardIconBID').click(function () {
    $(".prefBiD").addClass('active');

    $("#footerImgLoading").show();
    $("#footerMessage").html("BI Dashboards is running now..");
    footerMessage();
  });
  $('.prefBiD').click(function () {
    if ($(".prefBiD").hasClass('active')) {
      $("#footerImgLoading").show();
      $("#footerMessage").html("BI Dashboards is running now..");
      footerMessage();
    }
  });
  $('.homeCardOpenECO, .homeCardIconECO').click(function () {
    $("#footerImgLoading").show();
    $("#footerMessage").html("Fan Ecosystem is running now..");
    footerMessage();
    $(".prefECO").addClass('active');
  });
  $('.prefECO').click(function () {
    if ($(".prefECO").hasClass('active')) {
      $("#footerImgLoading").show();
      $("#footerMessage").html("Fan Ecosystem is running now..");
      footerMessage();
    }
  });
  $('.homeCardOpenRack, .homeCardIconRack').click(function () {
    $("#footerImgLoading").show();
    $("#footerMessage").html("Shelf Lack & Misplacement Detection are running now..");
    footerMessage();

    $(".prefRack").addClass('active');
  });
  $('.prefRack').click(function () {
    if ($(".prefRack").hasClass('active')) {
      $("#footerImgLoading").show();
      $("#footerMessage").html("Shelf Lack & Misplacement Detection are running now..");
      footerMessage();
    }
  });
  $('.homeCardOpenCIHeatMap, .homeCardIconCIHeatMap').click(function () {
    $("#footerImgLoading").show();
    $("#footerMessage").html("Heat Maps are running now..");
    footerMessage();

    $(".prefCIHeatMap").addClass('active');
  });
  $('.prefCIHeatMap').click(function () {
    if ($(".prefCIHeatMap").hasClass('active')) {
      $("#footerImgLoading").show();
      $("#footerMessage").html("Heat Maps are running now..");
      footerMessage();
    }
  });
  $('.homeCardOpenMetco, .homeCardIconMetco').click(function () {
    $(".prefMetco").addClass('active');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Retail Dashboards is running now..");
    footerMessage();
  });
  $('.prefMetco').click(function () {
    if ($(".prefMetco").hasClass('active')) {
      $("#footerImgLoading").show();
      $("#footerMessage").html("Retail Dashboards is running now..");
      footerMessage();
    }
  });
  $('.homeCardOpenVisual, .homeCardIconVisual').click(function () {
    $(".prefVisual").addClass('active');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Visualization is running now..");
    footerMessage();
  });
  $('.prefVisual').click(function () {
    if ($(".prefVisual").hasClass('active')) {
      $("#footerImgLoading").show();
      $("#footerMessage").html("Visualization is running now..");
      footerMessage();
    }
  });
});

// Start app from home cards
$(document).ready(function () {
  $('.subCatBtn, .homeOpenModule, .homeCardIcon, .homeCloseModule').click(function () {
    homepageStartApp();
    $('#closeActModules').show();

    if ($('#carouselPreference .customPreferencesIcons.active').length === $('#carouselPreference .customPreferencesIcons').length) {
      $('#closeActModules').hide();
    }
  });
});

// Home close opened modules
$(document).ready(function () {
  $('.homeCloseModule').click(function () {
    $(this).hide();
  });
});