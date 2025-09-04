// Heat maps side nav
$(document).ready(function () {
  // Toggle side nav
  $("#openVisualSideNav").click(function () {
    $("#moduleStyle14 .sideIconBtn").toggleClass("inActive");
    $(this).removeClass("inActive");
    $(this).toggleClass("closeNav");
    $("#visualSideNav").toggle();
  });
  // Toggle side nav top filter
  $("#visualToggleSideNavFilter").click(function () {
    $(this).toggleClass("active");
    var x = document.getElementById("visualSideNavFilter");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  });
  // Toggle pin/unpin
  $("#pinVisualSideNav").click(function () {
    $(this).hide();
    $("#unpinVisualSideNav").show();
    $('#visualSideNav').addClass('pinned');
  });
  $("#unpinVisualSideNav").click(function () {
    $(this).hide();
    $("#pinVisualSideNav").show();
    $('#visualSideNav').removeClass('pinned');
  });
  // Toggle side nav information
  $('#openHeatMapsInformation').click(function () {
    $(this).toggleClass("activeColl");
    $('#visualSideNavInformation').toggleClass('active');
    $('#visualSideNavInformation').children('.sideNavInformationCont').toggle();
  });
  // Toggle side nav tree
  $('#treeVisual').click(function () {
    $('#treeVisualLevels').toggle();
  });
  $('#treeVisualLevels .treeOpenSiteMap').click(function () {
    $('#treeVisualLevels .treeBtn').removeClass('current');
    $(this).parent('li').children('.treeBtn').addClass('current');
  });
  // Open Tracemap
  $('#openVisual1').click(function () {
    $('#moduleStyle14 .hMapsModuleSiteMapContainer').css('display', 'none');
    $('#siteVisual1').css('display', 'flex');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Tracemap has been successfully loaded");
    footerMessage();
  });
  // Open Heatmap
  $('#openVisual2').click(function () {
    $('#moduleStyle14 .hMapsModuleSiteMapContainer').css('display', 'none');
    $('#siteVisual2').css('display', 'flex');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Heatmap has been successfully loaded");
    footerMessage();
  });
  // Open Dwellmap
  $('#openVisual3').click(function () {
    $('#moduleStyle14 .hMapsModuleSiteMapContainer').css('display', 'none');
    $('#siteVisual3').css('display', 'flex');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Dwellmap has been successfully loaded");
    footerMessage();
  });
  $('#moduleStyle14 .closeSiteVisual').click(function () {
    $('#moduleStyle14 .hMapsModuleSiteMapContainer').css('display', 'none');
    $('#treeVisualLevels .treeBtn').removeClass('current');
  });
});

// Close open menus
var $visualSideNav = $('#visualSideNav, #moduleStyle14 .sideIconBtn');

$(document).mouseup(function (e) {
  if (!($visualSideNav.is(e.target)) &&
    ($visualSideNav.has(e.target).length === 0) &&
    !($('#visualSideNav').hasClass('pinned'))) {
    $('#visualSideNav').css("display", "none");
    $('#moduleStyle14 .sideIconBtn').removeClass('inActive');
    $('#moduleStyle14 .sideIconBtn').removeClass('closeNav');
  }
});