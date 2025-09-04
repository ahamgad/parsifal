// Heat maps side nav
$(document).ready(function () {
  // Toggle side nav
  $("#openHeatMSideNav").click(function () {
    $("#moduleStyle7 .sideIconBtn").toggleClass("inActive");
    $(this).removeClass("inActive");
    $(this).toggleClass("closeNav");
    $("#heatMapsSideNav").toggle();
  });
  // Toggle side nav top filter
  $("#hMapsToggleSideNavFilter").click(function () {
    $(this).toggleClass("active");
    var x = document.getElementById("heatMapsSideNavFilter");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  });
  // Toggle pin/unpin
  $("#pinHeatMapsSideNav").click(function () {
    $(this).hide();
    $("#unpinHeatMapsSideNav").show();
    $('#heatMapsSideNav').addClass('pinned');
  });
  $("#unpinHeatMapsSideNav").click(function () {
    $(this).hide();
    $("#pinHeatMapsSideNav").show();
    $('#heatMapsSideNav').removeClass('pinned');
  });
  // Toggle side nav information
  $('#openHeatMapsInformation').click(function () {
    $(this).toggleClass("activeColl");
    $('#heatMapsSideNavInformation').toggleClass('active');
    $('#heatMapsSideNavInformation').children('.sideNavInformationCont').toggle();
  });
  // Toggle side nav tree
  $('#treeHeatMap').click(function () {
    $('#treeHeatMLevels').toggle();
  });
  $('#treeHeatMLevels .treeOpenSiteMap').click(function () {
    $('#treeHeatMLevels .treeBtn').removeClass('current');
    $(this).parent('li').children('.treeBtn').addClass('current');
  });
  // Open heat map
  $('#openHeatMapLevel1').click(function () {
    $('#moduleStyle7 .hMapsModuleSiteMapContainer').css('display', 'none');
    $('#siteHeatMapLevel1').css('display', 'flex');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Heat map has been successfully loaded");
    footerMessage();
  });
  $('#openHeatMapLevel2').click(function () {
    $('#moduleStyle7 .hMapsModuleSiteMapContainer').css('display', 'none');
    $('#siteHeatMapLevel2').css('display', 'flex');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Heat map has been successfully loaded");
    footerMessage();
  });
  $('#moduleStyle7 .closeSiteHeatMap').click(function () {
    $('#moduleStyle7 .hMapsModuleSiteMapContainer').css('display', 'none');
    $('#treeHeatMLevels .treeBtn').removeClass('current');
  });
});

// Close open menus
var $heatMSideNav = $('#heatMapsSideNav, #moduleStyle7 .sideIconBtn');

$(document).mouseup(function (e) {
  if (!($heatMSideNav.is(e.target)) &&
    ($heatMSideNav.has(e.target).length === 0) &&
    !($('#heatMapsSideNav').hasClass('pinned'))) {
    $('#heatMapsSideNav').css("display", "none");
    $('#moduleStyle7 .sideIconBtn').removeClass('inActive');
    $('#moduleStyle7 .sideIconBtn').removeClass('closeNav');
  }
});