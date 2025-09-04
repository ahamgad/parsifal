// Maps side nav
$(document).ready(function () {

  // Toggle side nav tree (Germany)
  $('#mapsSideNavTree .treeBtn').click(function () {
    $(this).toggleClass('active');
    $('#mapsSideNavTree .treeBtn').removeClass('current');
    $('#mapsSideNavTree .treeBtn.tp').removeClass('current');
    $(this).addClass('current');
    if (!$(this).hasClass('active')) {
      $(this).removeClass('current');
    }
  });
  $('.treeOpenSiteMap').click(function () {
    $('#mapsSideNavTree .treeBtn').removeClass('active, current');
    $('#mapsSideNavTree .treeBtn.tp').removeClass('active, current');
    $(this).parent('li').children('.treeBtn').addClass('active, current');
  });
  $('#treeGermany').click(function () {
    $('#treeBerlin, #treeDortmund, #treeRostock, #treeMunich').toggle();
  });
  $('#treeBerlinBtn').click(function () {
    $('#treeSites').toggle();
    $('#treeSites5').toggle();
  });
  $('#treeSite1Btn').click(function () {
    $('#treeSite1Levels').toggle();
  });
  $('#treeSite1Level1Btn').click(function () {
    $('#treeSite1Level1TPs').toggle();
  });
  $('#treeSite1Level1TPsBtn').click(function () {
    $('#treeSite1Level1TPsUL').toggle();
  });
  $('#treeSite1Level1TPs1Btn').click(function () {
    $('#treeSite1Level1TPs1UL').toggle();
  });
  $('#treeSite1Level1TPs2Btn').click(function () {
    $('#treeSite1Level1TPs2UL').toggle();
  });
  $('#treeSite1Level2Btn').click(function () {
    $('#treeSite1Level2TPs').toggle();
  });
  $('#treeSite1Level2TPsBtn').click(function () {
    $('#treeSite1Level2TPsUL').toggle();
  });
  $('#treeSite1Level2TPs1Btn').click(function () {
    $('#treeSite1Level2TPs1UL').toggle();
  });
  $('#treeSite1Level2TPs2Btn').click(function () {
    $('#treeSite1Level2TPs2UL').toggle();
  });
  $('#treeSite1Level2TPs3Btn').click(function () {
    $('#treeSite1Level2TPs3UL').toggle();
  });
  // Open site maps
  $('#treeOpenSiteMap1').click(function () {
    $('.mapsModuleSiteMapContainer').css('display', 'none');
    $('#mapsModSiteMap1').css('display', 'flex');
    $('#mapsModSiteMap1').parent('.moduleSectionContent').removeClass('siteMap');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Site map has been successfully loaded");
    footerMessage();
  });
  $('#treeOpenSiteMap2').click(function () {
    $('.mapsModuleSiteMapContainer').css('display', 'none');
    $('#mapsModSiteMap2').css('display', 'flex');
    $('#mapsModSiteMap1').parent('.moduleSectionContent').removeClass('siteMap');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Site map has been successfully loaded");
    footerMessage();
  });
  $('.closeSiteMap').click(function () {
    $('.mapsModuleSiteMapContainer').css('display', 'none');
    $('.mapsModuleSiteMapContainer').parent('.moduleSectionContent').addClass('siteMap');
    $('.treeOpenSiteMap').parent('li').children('.treeBtn').removeClass('active, current');
  });
  
  // Toggle side nav tree (Berlin Airport)
  $('#treeSite5Btn').click(function () {
    $('#treeSite5Levels').toggle();
  });
  $('#treeSite5Level1Btn').click(function () {
    $('#treeSite5Level1TPs').toggle();
  });
  $('#treeSite5Level1TPsBtn').click(function () {
    $('#treeSite5Level1TPsUL').toggle();
  });
  $('#treeSite5Level1TPs1Btn').click(function () {
    $('#treeSite5Level1TPs1UL').toggle();
  });
  $('#treeSite5Level1TPs2Btn').click(function () {
    $('#treeSite5Level1TPs2UL').toggle();
  });
  $('#treeSite5Level2Btn').click(function () {
    $('#treeSite5Level2TPs').toggle();
  });
  $('#treeSite5Level2TPsBtn').click(function () {
    $('#treeSite5Level2TPsUL').toggle();
  });
  $('#treeSite5Level2TPs1Btn').click(function () {
    $('#treeSite5Level2TPs1UL').toggle();
  });
  $('#treeSite5Level2TPs2Btn').click(function () {
    $('#treeSite5Level2TPs2UL').toggle();
  });
  $('#treeSite5Level2TPs3Btn').click(function () {
    $('#treeSite5Level2TPs3UL').toggle();
  });
  $('#treeSite5Level3Btn').click(function () {
    $('#treeSite5Level3TPs').toggle();
  });
  $('#treeSite5Level3TPsBtn').click(function () {
    $('#treeSite5Level3TPsUL').toggle();
  });
  $('#treeSite5Level3TPs1Btn').click(function () {
    $('#treeSit5Level3TPs1UL').toggle();
  });
   // Open site maps
   $('#treeOpenSite5Map1').click(function () {
    $('.mapsModuleSiteMapContainer').css('display', 'none');
    $('#mapsModSite5Map1').css('display', 'flex');
    $('#mapsModSite5Map1').parent('.moduleSectionContent').removeClass('siteMap');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Site map has been successfully loaded");
    footerMessage();
  });
  $('#treeOpenSite5Map2').click(function () {
    $('.mapsModuleSiteMapContainer').css('display', 'none');
    $('#mapsModSite5Map2').css('display', 'flex');
    $('#mapsModSite5Map2').parent('.moduleSectionContent').removeClass('siteMap');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Site map has been successfully loaded");
    footerMessage();
  });

  // Toggle side nav tree (Dortmund Stadium)
  $('#treeDortmundBtn').click(function () {
    $('#dortmundSites').toggle();
  });
  $('#treeSite7Btn').click(function () {
    $('#treeSite7Levels').toggle();
  });
  $('#treeSite7Level1Btn').click(function () {
    $('#treeSite7Level1TPs').toggle();
  });
  $('#treeSite7Level1TPsBtn').click(function () {
    $('#treeSite7Level1TPsUL').toggle();
  });
  $('#treeSite7Level1TPs1Btn').click(function () {
    $('#treeSite7Level1TPs1UL').toggle();
  });
  $('#treeSite7Level1TPs2Btn').click(function () {
    $('#treeSite7Level1TPs2UL').toggle();
  });
  $('#treeSite7Level1TPs3Btn').click(function () {
    $('#treeSite7Level1TPs3UL').toggle();
  });
  $('#treeSite7Level2Btn').click(function () {
    $('#treeSite7Level2TPs').toggle();
  });
  $('#treeSite7Level2TPsBtn').click(function () {
    $('#treeSite7Level2TPsUL').toggle();
  });
  $('#treeSite7Level2TPs1Btn').click(function () {
    $('#treeSite7Level2TPs1UL').toggle();
  });
  $('#treeSite7Level2TPs2Btn').click(function () {
    $('#treeSite7Level2TPs2UL').toggle();
  });
  $('#treeSite7Level2TPs3Btn').click(function () {
    $('#treeSite7Level2TPs3UL').toggle();
  });
  // Open site maps
  $('#treeOpenSite7Map1').click(function () {
    $('.mapsModuleSiteMapContainer').css('display', 'none');
    $('#mapsModSite7Map1').css('display', 'flex');
    $('#mapsModSite7Map2').parent('.moduleSectionContent').removeClass('siteMap');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Site map has been successfully loaded");
    footerMessage();
  });
  $('#treeOpenSite7Map2').click(function () {
    $('.mapsModuleSiteMapContainer').css('display', 'none');
    $('#mapsModSite7Map2').css('display', 'flex');
    $('#mapsModSite7Map1').parent('.moduleSectionContent').removeClass('siteMap');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Site map has been successfully loaded");
    footerMessage();
  });
  $('.closeSiteMap').click(function () {
    $('.mapsModuleSiteMapContainer').css('display', 'none');
    $('.mapsModuleSiteMapContainer').parent('.moduleSectionContent').addClass('siteMap');
    $('.treeOpenSiteMap').parent('li').children('.treeBtn').removeClass('active, current');
  });



  
  
  
  // Toggle side nav tree (AIDAmira)
  $('#treeRostockBtn').click(function () {
    $('#treeRostockSites').toggle();
  });
  $('#treeSite10Btn').click(function () {
    $('#treeSite10Levels').toggle();
  });

  $('#treeSite10Level1Btn').click(function () {
    $('#treeSite10Level1TPs').toggle();
  });
  $('#treeSite10Level1TPsBtn').click(function () {
    $('#treeSite10Level1TPsUL').toggle();
  });
  $('#treeSite10Level1TPs1Btn').click(function () {
    $('#treeSite10Level1TPs1UL').toggle();
  });
  $('#treeSite10Level1TPs2Btn').click(function () {
    $('#treeSite10Level1TPs2UL').toggle();
  });
  $('#treeSite10Level1TPs3Btn').click(function () {
    $('#treeSite10Level1TPs3UL').toggle();
  });

  $('#treeSite10Level2Btn').click(function () {
    $('#treeSite10Level2TPs').toggle();
  });
  $('#treeSite10Level2TPsBtn').click(function () {
    $('#treeSite10Level2TPsUL').toggle();
  });
  $('#treeSite10Level2TPs1Btn').click(function () {
    $('#treeSite10Level2TPs1UL').toggle();
  });
  $('#treeSite10Level2TPs2Btn').click(function () {
    $('#treeSite10Level2TPs2UL').toggle();
  });
  $('#treeSite10Level2TPs3Btn').click(function () {
    $('#treeSite10Level2TPs3UL').toggle();
  });

  $('#treeSite10Level3Btn').click(function () {
    $('#treeSite10Level3TPs').toggle();
  });
  $('#treeSite10Level3TPsBtn').click(function () {
    $('#treeSite10Level3TPsUL').toggle();
  });
  $('#treeSite10Level3TPs1Btn').click(function () {
    $('#treeSite10Level3TPs1UL').toggle();
  });
  $('#treeSite10Level3TPs2Btn').click(function () {
    $('#treeSite10Level3TPs2UL').toggle();
  });
  $('#treeSite10Level3TPs3Btn').click(function () {
    $('#treeSite10Level3TPs3UL').toggle();
  });

  $('#treeSite10Level4Btn').click(function () {
    $('#treeSite10Level4TPs').toggle();
  });
  $('#treeSite10Level4TPsBtn').click(function () {
    $('#treeSite10Level4TPsUL').toggle();
  });
  $('#treeSite10Level4TPs1Btn').click(function () {
    $('#treeSite10Level4TPs1UL').toggle();
  });
  $('#treeSite10Level4TPs2Btn').click(function () {
    $('#treeSite10Level4TPs2UL').toggle();
  });
  $('#treeSite10Level4TPs3Btn').click(function () {
    $('#treeSite10Level4TPs3UL').toggle();
  });

  $('#treeSite10Level5Btn').click(function () {
    $('#treeSite10Level5TPs').toggle();
  });
  $('#treeSite10Level5TPsBtn').click(function () {
    $('#treeSite10Level5TPsUL').toggle();
  });
  $('#treeSite10Level5TPs1Btn').click(function () {
    $('#treeSite10Level5TPs1UL').toggle();
  });
  $('#treeSite10Level5TPs2Btn').click(function () {
    $('#treeSite10Level5TPs2UL').toggle();
  });
  $('#treeSite10Level5TPs3Btn').click(function () {
    $('#treeSite10Level5TPs3UL').toggle();
  });

  $('#treeSite10Level6Btn').click(function () {
    $('#treeSite10Level6TPs').toggle();
  });
  $('#treeSite10Level6TPsBtn').click(function () {
    $('#treeSite10Level6TPsUL').toggle();
  });
  $('#treeSite10Level6TPs1Btn').click(function () {
    $('#treeSite10Level6TPs1UL').toggle();
  });
  $('#treeSite10Level6TPs2Btn').click(function () {
    $('#treeSite10Level6TPs2UL').toggle();
  });
  $('#treeSite10Level6TPs3Btn').click(function () {
    $('#treeSite10Level6TPs3UL').toggle();
  });

  $('#treeSite10Level7Btn').click(function () {
    $('#treeSite10Level7TPs').toggle();
  });
  $('#treeSite10Level7TPsBtn').click(function () {
    $('#treeSite10Level7TPsUL').toggle();
  });
  $('#treeSite10Level7TPs1Btn').click(function () {
    $('#treeSite10Level7TPs1UL').toggle();
  });
  $('#treeSite10Level7TPs2Btn').click(function () {
    $('#treeSite10Level7TPs2UL').toggle();
  });
  $('#treeSite10Level7TPs3Btn').click(function () {
    $('#treeSite10Level7TPs3UL').toggle();
  });

  // Open site maps
  $('#treeOpenSite10Map').click(function () {
    $('.mapsModuleSiteMapContainer').css('display', 'none');
    $('#mapsModSite10Map').css('display', 'flex');
    $('#mapsModSite10Map').parent('.moduleSectionContent').removeClass('siteMap');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Site map has been successfully loaded");
    footerMessage();
  });
  $('#treeOpenSite10Map1').click(function () {
    $('.mapsModuleSiteMapContainer').css('display', 'none');
    $('#mapsModSite10Map1').css('display', 'flex');
    $('#mapsModSite10Map1').parent('.moduleSectionContent').removeClass('siteMap');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Site map has been successfully loaded");
    footerMessage();
  });
  $('#treeOpenSite10Map2').click(function () {
    $('.mapsModuleSiteMapContainer').css('display', 'none');
    $('#mapsModSite10Map2').css('display', 'flex');
    $('#mapsModSite10Map2').parent('.moduleSectionContent').removeClass('siteMap');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Site map has been successfully loaded");
    footerMessage();
  });
  $('#treeOpenSite10Map3').click(function () {
    $('.mapsModuleSiteMapContainer').css('display', 'none');
    $('#mapsModSite10Map3').css('display', 'flex');
    $('#mapsModSite10Map3').parent('.moduleSectionContent').removeClass('siteMap');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Site map has been successfully loaded");
    footerMessage();
  });
  $('#treeOpenSite10Map4').click(function () {
    $('.mapsModuleSiteMapContainer').css('display', 'none');
    $('#mapsModSite10Map4').css('display', 'flex');
    $('#mapsModSite10Map4').parent('.moduleSectionContent').removeClass('siteMap');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Site map has been successfully loaded");
    footerMessage();
  });
  $('#treeOpenSite10Map5').click(function () {
    $('.mapsModuleSiteMapContainer').css('display', 'none');
    $('#mapsModSite10Map5').css('display', 'flex');
    $('#mapsModSite10Map5').parent('.moduleSectionContent').removeClass('siteMap');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Site map has been successfully loaded");
    footerMessage();
  });
  $('#treeOpenSite10Map6').click(function () {
    $('.mapsModuleSiteMapContainer').css('display', 'none');
    $('#mapsModSite10Map6').css('display', 'flex');
    $('#mapsModSite10Map6').parent('.moduleSectionContent').removeClass('siteMap');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Site map has been successfully loaded");
    footerMessage();
  });
  $('#treeOpenSite10Map7').click(function () {
    $('.mapsModuleSiteMapContainer').css('display', 'none');
    $('#mapsModSite10Map7').css('display', 'flex');
    $('#mapsModSite10Map7').parent('.moduleSectionContent').removeClass('siteMap');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Site map has been successfully loaded");
    footerMessage();
  });
  $('.closeSiteMap').click(function () {
    $('.mapsModuleSiteMapContainer').css('display', 'none');
    $('.mapsModuleSiteMapContainer').parent('.moduleSectionContent').addClass('siteMap');
    $('.treeOpenSiteMap').parent('li').children('.treeBtn').removeClass('active, current');
  });


// Toggle side nav tree (AIDAnova)
$('#treeSite11Btn').click(function () {
  $('#treeSite11Levels').toggle();
});

$('#treeSite11Level1Btn').click(function () {
  $('#treeSite11Level1TPs').toggle();
});
$('#treeSite11Level1TPsBtn').click(function () {
  $('#treeSite11Level1TPsUL').toggle();
});
$('#treeSite11Level1TPs1Btn').click(function () {
  $('#treeSite11Level1TPs1UL').toggle();
});
$('#treeSite11Level1TPs2Btn').click(function () {
  $('#treeSite11Level1TPs2UL').toggle();
});
$('#treeSite11Level1TPs3Btn').click(function () {
  $('#treeSite11Level1TPs3UL').toggle();
});

$('#treeSite11Level2Btn').click(function () {
  $('#treeSite11Level2TPs').toggle();
});
$('#treeSite11Level2TPsBtn').click(function () {
  $('#treeSite11Level2TPsUL').toggle();
});
$('#treeSite11Level2TPs1Btn').click(function () {
  $('#treeSite11Level2TPs1UL').toggle();
});
$('#treeSite11Level2TPs2Btn').click(function () {
  $('#treeSite11Level2TPs2UL').toggle();
});
$('#treeSite11Level2TPs3Btn').click(function () {
  $('#treeSite11Level2TPs3UL').toggle();
});

$('#treeSite11Level3Btn').click(function () {
  $('#treeSite11Level3TPs').toggle();
});
$('#treeSite11Level3TPsBtn').click(function () {
  $('#treeSite11Level3TPsUL').toggle();
});
$('#treeSite11Level3TPs1Btn').click(function () {
  $('#treeSite11Level3TPs1UL').toggle();
});
$('#treeSite11Level3TPs2Btn').click(function () {
  $('#treeSite11Level3TPs2UL').toggle();
});
$('#treeSite11Level3TPs3Btn').click(function () {
  $('#treeSite11Level3TPs3UL').toggle();
});

$('#treeSite11Level4Btn').click(function () {
  $('#treeSite11Level4TPs').toggle();
});
$('#treeSite11Level4TPsBtn').click(function () {
  $('#treeSite11Level4TPsUL').toggle();
});
$('#treeSite11Level4TPs1Btn').click(function () {
  $('#treeSite11Level4TPs1UL').toggle();
});
$('#treeSite11Level4TPs2Btn').click(function () {
  $('#treeSite11Level4TPs2UL').toggle();
});
$('#treeSite11Level4TPs3Btn').click(function () {
  $('#treeSite11Level4TPs3UL').toggle();
});

$('#treeSite11Level5Btn').click(function () {
  $('#treeSite11Level5TPs').toggle();
});
$('#treeSite11Level5TPsBtn').click(function () {
  $('#treeSite11Level5TPsUL').toggle();
});
$('#treeSite11Level5TPs1Btn').click(function () {
  $('#treeSite11Level5TPs1UL').toggle();
});
$('#treeSite11Level5TPs2Btn').click(function () {
  $('#treeSite11Level5TPs2UL').toggle();
});
$('#treeSite11Level5TPs3Btn').click(function () {
  $('#treeSite11Level5TPs3UL').toggle();
});

$('#treeSite11Level6Btn').click(function () {
  $('#treeSite11Level6TPs').toggle();
});
$('#treeSite11Level6TPsBtn').click(function () {
  $('#treeSite11Level6TPsUL').toggle();
});
$('#treeSite11Level6TPs1Btn').click(function () {
  $('#treeSite11Level6TPs1UL').toggle();
});
$('#treeSite11Level6TPs2Btn').click(function () {
  $('#treeSite11Level6TPs2UL').toggle();
});
$('#treeSite11Level6TPs3Btn').click(function () {
  $('#treeSite11Level6TPs3UL').toggle();
});

$('#treeSite11Level7Btn').click(function () {
  $('#treeSite11Level7TPs').toggle();
});
$('#treeSite11Level7TPsBtn').click(function () {
  $('#treeSite11Level7TPsUL').toggle();
});
$('#treeSite11Level7TPs1Btn').click(function () {
  $('#treeSite11Level7TPs1UL').toggle();
});
$('#treeSite11Level7TPs2Btn').click(function () {
  $('#treeSite11Level7TPs2UL').toggle();
});
$('#treeSite11Level7TPs3Btn').click(function () {
  $('#treeSite11Level7TPs3UL').toggle();
});

// Open site maps
$('#treeOpenSite11Map').click(function () {
  $('.mapsModuleSiteMapContainer').css('display', 'none');
  $('#mapsModSite11Map').css('display', 'flex');
  $('#mapsModSite11Map').parent('.moduleSectionContent').removeClass('siteMap');

  $("#footerImgLoading").show();
  $("#footerMessage").html("Site map has been successfully loaded");
  footerMessage();
});
$('#treeOpenSite11Map1').click(function () {
  $('.mapsModuleSiteMapContainer').css('display', 'none');
  $('#mapsModSite11Map1').css('display', 'flex');
  $('#mapsModSite11Map1').parent('.moduleSectionContent').removeClass('siteMap');

  $("#footerImgLoading").show();
  $("#footerMessage").html("Site map has been successfully loaded");
  footerMessage();
});
$('#treeOpenSite11Map2').click(function () {
  $('.mapsModuleSiteMapContainer').css('display', 'none');
  $('#mapsModSite11Map2').css('display', 'flex');
  $('#mapsModSite11Map2').parent('.moduleSectionContent').removeClass('siteMap');

  $("#footerImgLoading").show();
  $("#footerMessage").html("Site map has been successfully loaded");
  footerMessage();
});
$('#treeOpenSite11Map3').click(function () {
  $('.mapsModuleSiteMapContainer').css('display', 'none');
  $('#mapsModSite11Map3').css('display', 'flex');
  $('#mapsModSite11Map3').parent('.moduleSectionContent').removeClass('siteMap');

  $("#footerImgLoading").show();
  $("#footerMessage").html("Site map has been successfully loaded");
  footerMessage();
});
$('#treeOpenSite11Map4').click(function () {
  $('.mapsModuleSiteMapContainer').css('display', 'none');
  $('#mapsModSite11Map4').css('display', 'flex');
  $('#mapsModSite11Map4').parent('.moduleSectionContent').removeClass('siteMap');

  $("#footerImgLoading").show();
  $("#footerMessage").html("Site map has been successfully loaded");
  footerMessage();
});
$('#treeOpenSite11Map5').click(function () {
  $('.mapsModuleSiteMapContainer').css('display', 'none');
  $('#mapsModSite11Map5').css('display', 'flex');
  $('#mapsModSite11Map5').parent('.moduleSectionContent').removeClass('siteMap');

  $("#footerImgLoading").show();
  $("#footerMessage").html("Site map has been successfully loaded");
  footerMessage();
});
$('#treeOpenSite11Map6').click(function () {
  $('.mapsModuleSiteMapContainer').css('display', 'none');
  $('#mapsModSite11Map6').css('display', 'flex');
  $('#mapsModSite11Map6').parent('.moduleSectionContent').removeClass('siteMap');

  $("#footerImgLoading").show();
  $("#footerMessage").html("Site map has been successfully loaded");
  footerMessage();
});
$('#treeOpenSite11Map7').click(function () {
  $('.mapsModuleSiteMapContainer').css('display', 'none');
  $('#mapsModSite11Map7').css('display', 'flex');
  $('#mapsModSite11Map7').parent('.moduleSectionContent').removeClass('siteMap');

  $("#footerImgLoading").show();
  $("#footerMessage").html("Site map has been successfully loaded");
  footerMessage();
});
$('.closeSiteMap').click(function () {
  $('.mapsModuleSiteMapContainer').css('display', 'none');
  $('.mapsModuleSiteMapContainer').parent('.moduleSectionContent').addClass('siteMap');
  $('.treeOpenSiteMap').parent('li').children('.treeBtn').removeClass('active, current');
});

// Toggle side nav tree (Munich)
$('#treeMunichBtn').click(function () {
  $('#treeMunichSites').toggle();
});

$('#treeSite12Btn').click(function () {
  $('#treeSite12Levels').toggle();
});
$('#treeSite12Level1Btn').click(function () {
  $('#treeSite12Level1TPs').toggle();
});
$('#treeSite12Level1TPsBtn').click(function () {
  $('#treeSite12Level1TPsUL').toggle();
});
$('#treeSite12Level1TPs1Btn').click(function () {
  $('#treeSite12Level1TPs1UL').toggle();
});
$('#treeSite12Level1TPs2Btn').click(function () {
  $('#treeSite12Level1TPs2UL').toggle();
});
$('#treeSite12Level1TPs3Btn').click(function () {
  $('#treeSite12Level1TPs3UL').toggle();
});

$('#treeSite13Btn').click(function () {
  $('#treeSite13Levels').toggle();
});
$('#treeSite13Level1Btn').click(function () {
  $('#treeSite13Level1TPs').toggle();
});
$('#treeSite13Level1TPsBtn').click(function () {
  $('#treeSite13Level1TPsUL').toggle();
});
$('#treeSite13Level1TPs1Btn').click(function () {
  $('#treeSite13Level1TPs1UL').toggle();
});
$('#treeSite13Level1TPs2Btn').click(function () {
  $('#treeSite13Level1TPs2UL').toggle();
});
$('#treeSite13Level1TPs3Btn').click(function () {
  $('#treeSite13Level1TPs3UL').toggle();
});

$('#treeSite14Btn').click(function () {
  $('#treeSite14Levels').toggle();
});
$('#treeSite14Level1Btn').click(function () {
  $('#treeSite14Level1TPs').toggle();
});
$('#treeSite14Level1TPsBtn').click(function () {
  $('#treeSite14Level1TPsUL').toggle();
});
$('#treeSite14Level1TPs1Btn').click(function () {
  $('#treeSite14Level1TPs1UL').toggle();
});
$('#treeSite14Level1TPs2Btn').click(function () {
  $('#treeSite14Level1TPs2UL').toggle();
});
$('#treeSite14Level1TPs3Btn').click(function () {
  $('#treeSite14Level1TPs3UL').toggle();
});

$('#treeSite15Btn').click(function () {
  $('#treeSite15Levels').toggle();
});
$('#treeSite15Level1Btn').click(function () {
  $('#treeSite15Level1TPs').toggle();
});
$('#treeSite15Level1TPsBtn').click(function () {
  $('#treeSite15Level1TPsUL').toggle();
});
$('#treeSite15Level1TPs1Btn').click(function () {
  $('#treeSite15Level1TPs1UL').toggle();
});
$('#treeSite15Level1TPs2Btn').click(function () {
  $('#treeSite15Level1TPs2UL').toggle();
});
$('#treeSite15Level1TPs3Btn').click(function () {
  $('#treeSite15Level1TPs3UL').toggle();
});

$('#treeSite16Btn').click(function () {
  $('#treeSite16Levels').toggle();
});
$('#treeSite16Level1Btn').click(function () {
  $('#treeSite16Level1TPs').toggle();
});
$('#treeSite16Level1TPsBtn').click(function () {
  $('#treeSite16Level1TPsUL').toggle();
});
$('#treeSite16Level1TPs1Btn').click(function () {
  $('#treeSite16Level1TPs1UL').toggle();
});
$('#treeSite16Level1TPs2Btn').click(function () {
  $('#treeSite16Level1TPs2UL').toggle();
});
$('#treeSite16Level1TPs3Btn').click(function () {
  $('#treeSite16Level1TPs3UL').toggle();
});
// Open site maps
$('#treeOpenSite12Map1').click(function () {
  $('.mapsModuleSiteMapContainer').css('display', 'none');
  $('#mapsModSite12Map1').css('display', 'flex');
  $('#mapsModSite12Map1').parent('.moduleSectionContent').removeClass('siteMap');

  $("#footerImgLoading").show();
  $("#footerMessage").html("Site map has been successfully loaded");
  footerMessage();
});
$('#treeOpenSite13Map1').click(function () {
  $('.mapsModuleSiteMapContainer').css('display', 'none');
  $('#mapsModSite13Map1').css('display', 'flex');
  $('#mapsModSite13Map1').parent('.moduleSectionContent').removeClass('siteMap');

  $("#footerImgLoading").show();
  $("#footerMessage").html("Site map has been successfully loaded");
  footerMessage();
});
$('#treeOpenSite14Map1').click(function () {
  $('.mapsModuleSiteMapContainer').css('display', 'none');
  $('#mapsModSite14Map1').css('display', 'flex');
  $('#mapsModSite14Map1').parent('.moduleSectionContent').removeClass('siteMap');

  $("#footerImgLoading").show();
  $("#footerMessage").html("Site map has been successfully loaded");
  footerMessage();
});
$('#treeOpenSite15Map1').click(function () {
  $('.mapsModuleSiteMapContainer').css('display', 'none');
  $('#mapsModSite15Map1').css('display', 'flex');
  $('#mapsModSite15Map1').parent('.moduleSectionContent').removeClass('siteMap');

  $("#footerImgLoading").show();
  $("#footerMessage").html("Site map has been successfully loaded");
  footerMessage();
});
$('#treeOpenSite16Map1').click(function () {
  $('.mapsModuleSiteMapContainer').css('display', 'none');
  $('#mapsModSite16Map1').css('display', 'flex');
  $('#mapsModSite16Map1').parent('.moduleSectionContent').removeClass('siteMap');

  $("#footerImgLoading").show();
  $("#footerMessage").html("Site map has been successfully loaded");
  footerMessage();
});


// Toggle side nav tree (OXXO Market)
$('#treeSite6Btn').click(function () {
      $('#treeSite6Levels').toggle();
    });
    $('#treeSite6Level1Btn').click(function () {
      $('#treeSite6Level1TPs').toggle();
    });
    $('#treeSite6Level1TPsBtn').click(function () {
      $('#treeSite6Level1TPsUL').toggle();
    });
    $('#treeSite6Level1TPs2Btn').click(function () {
      $('#treeSite6Level1TPs2UL').toggle();
    });
    $('#treeSite6Level2Btn').click(function () {
      $('#treeSite6Level2TPs').toggle();
    });
    $('#treeSite6Level2TPsBtn').click(function () {
      $('#treeSite6Level2TPsUL').toggle();
    });
    $('#treeSite6Level2TPs2Btn').click(function () {
      $('#treeSite6Level2TPs2UL').toggle();
    });
    $('#treeSite6Level2TPs3Btn').click(function () {
      $('#treeSite6Level2TPs3UL').toggle();
    });
    $('#treeSite6Level3Btn').click(function () {
      $('#treeSite6Level3TPs').toggle();
    });
    $('#treeSite6Level3TPsBtn').click(function () {
      $('#treeSite6Level3TPsUL').toggle();
    });
    $('#treeSite6Level3TPs1Btn').click(function () {
      $('#treeSit6Level3TPs1UL').toggle();
    });
    // Open site maps
  $('#treeOpenSite6Map1').click(function () {
    $('.mapsModuleSiteMapContainer').css('display', 'none');
    $('#mapsModSite6Map1').css('display', 'flex');
    $('#mapsModSite6Map1').parent('.moduleSectionContent').removeClass('siteMap');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Site map has been successfully loaded");
    footerMessage();
  });
  $('#treeOpenSite6Map2').click(function () {
    $('.mapsModuleSiteMapContainer').css('display', 'none');
    $('#mapsModSite6Map2').css('display', 'flex');
    $('#mapsModSite6Map2').parent('.moduleSectionContent').removeClass('siteMap');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Site map has been successfully loaded");
    footerMessage();
  });
  

  // Toggle side nav tree (USA)
  $('#mapsSideNavTree2 .treeBtn').click(function () {
    $(this).toggleClass('active');
    $('#mapsSideNavTree2 .treeBtn').removeClass('current');
    $('#mapsSideNavTree2 .treeBtn.tp').removeClass('current');
    $(this).addClass('current');
    if (!$(this).hasClass('active')) {
      $(this).removeClass('current');
    }
  });
  $('.treeOpenSiteMap').click(function () {
    $('#mapsSideNavTree2 .treeBtn').removeClass('active, current');
    $('#mapsSideNavTree2 .treeBtn.tp').removeClass('active, current');
    $(this).parent('li').children('.treeBtn').addClass('active, current');
  });
  $('#treeUSA').click(function () {
    $('#treeMiami').toggle();
  });
  $('#treeMiamiBtn').click(function () {
    $('#treeMiamiSites').toggle();
  });
  $('#treeSite3Btn').click(function () {
    $('#treeSite3Levels').toggle();
  });
  $('#treeSite3Level1Btn').click(function () {
    $('#treeSite3Level1TPs').toggle();
  });
  $('#treeSite3Level1TPsBtn').click(function () {
    $('#treeSite3Level1TPsUL').toggle();
  });
  $('#treeSite3Level1TPs1Btn').click(function () {
    $('#treeSite3Level1TPs1UL').toggle();
  });
  $('#treeSite3Level1TPs2Btn').click(function () {
    $('#treeSite3Level1TPs2UL').toggle();
  });
  $('#treeSite3Level2Btn').click(function () {
    $('#treeSite3Level2TPs').toggle();
  });
  $('#treeSite3Level2TPsBtn').click(function () {
    $('#treeSite3Level2TPsUL').toggle();
  });
  $('#treeSite3Level2TPs1Btn').click(function () {
    $('#treeSite3Level2TPs1UL').toggle();
  });
  $('#treeSite3Level2TPs2Btn').click(function () {
    $('#treeSite3Level2TPs2UL').toggle();
  });
  $('#treeSite3Level2TPs3Btn').click(function () {
    $('#treeSite3Level2TPs3UL').toggle();
  });
  // Open site maps
  $('#treeOpenSiteMap3').click(function () {
    $('.mapsModuleSiteMapContainer').css('display', 'none');
    $('#mapsModSiteMap3').css('display', 'flex');
    $('#mapsModSiteMap3').parent('.moduleSectionContent').removeClass('siteMap');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Site map has been successfully loaded");
    footerMessage();
  });
  $('#treeOpenSiteMap4').click(function () {
    $('.mapsModuleSiteMapContainer').css('display', 'none');
    $('#mapsModSiteMap4').css('display', 'flex');
    $('#mapsModSiteMap3').parent('.moduleSectionContent').removeClass('siteMap');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Site map has been successfully loaded");
    footerMessage();
  });

  // Toggle side nav tree (Mexico)
  $('#mapsSideNavTree3 .treeBtn').click(function () {
    $(this).toggleClass('active');
    $('#mapsSideNavTree3 .treeBtn').removeClass('current');
    $('#mapsSideNavTree3 .treeBtn.tp').removeClass('current');
    $(this).addClass('current');
    if (!$(this).hasClass('active')) {
      $(this).removeClass('current');
    }
  });
  $('.treeOpenSiteMap').click(function () {
    $('#mapsSideNavTree3 .treeBtn').removeClass('active, current');
    $('#mapsSideNavTree3 .treeBtn.tp').removeClass('active, current');
    $(this).parent('li').children('.treeBtn').addClass('active, current');
  });
  $('#treeMexico').click(function () {
    $('#treeMexicoCity').toggle();
  });
  $('#treeMexicoCityBtn').click(function () {
    $('#treeMexicoCitySites').toggle();
  });
  $('#treeSite4Btn').click(function () {
    $('#treeSite4Levels').toggle();
  });
  $('#treeSite4Level1Btn').click(function () {
    $('#treeSite4Level1TPs').toggle();
  });
  $('#treeSite4Level1TPsBtn').click(function () {
    $('#treeSite4Level1TPsUL').toggle();
  });
  $('#treeSite4Level1TPs1Btn').click(function () {
    $('#treeSite4Level1TPs1UL').toggle();
  });
  $('#treeSite4Level1TPs2Btn').click(function () {
    $('#treeSite4Level1TPs2UL').toggle();
  });
  $('#treeSite4Level2Btn').click(function () {
    $('#treeSite4Level2TPs').toggle();
  });
  $('#treeSite4Level2TPsBtn').click(function () {
    $('#treeSite4Level2TPsUL').toggle();
  });
  $('#treeSite4Level2TPs1Btn').click(function () {
    $('#treeSite4Level2TPs1UL').toggle();
  });
  $('#treeSite4Level2TPs2Btn').click(function () {
    $('#treeSite4Level2TPs2UL').toggle();
  });
  $('#treeSite4Level2TPs3Btn').click(function () {
    $('#treeSite4Level2TPs3UL').toggle();
  });
  $('#treeSite4Level3Btn').click(function () {
    $('#treeSite4Level3TPs').toggle();
  });
  $('#treeSite4Level3TPsBtn').click(function () {
    $('#treeSite4Level3TPsUL').toggle();
  });
  $('#treeSite4Level3TPs1Btn').click(function () {
    $('#treeSit4Level3TPs1UL').toggle();
  });
  // Open site maps
  $('#treeOpenSite4Map1').click(function () {
    $('.mapsModuleSiteMapContainer').css('display', 'none');
    $('#mapsModSite4Map1').css('display', 'flex');
    $('#mapsModSite4Map1').parent('.moduleSectionContent').removeClass('siteMap');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Site map has been successfully loaded");
    footerMessage();
  });
  $('#treeOpenSite4Map2').click(function () {
    $('.mapsModuleSiteMapContainer').css('display', 'none');
    $('#mapsModSite4Map2').css('display', 'flex');
    $('#mapsModSite4Map2').parent('.moduleSectionContent').removeClass('siteMap');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Site map has been successfully loaded");
    footerMessage();
  });
  $('#treeOpenSite4Map3').click(function () {
    $('.mapsModuleSiteMapContainer').css('display', 'none');
    $('#mapsModSite4Map3').css('display', 'flex');
    $('#mapsModSite4Map3').parent('.moduleSectionContent').removeClass('siteMap');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Site map has been successfully loaded");
    footerMessage();
  });
  $('.closeSiteMap').click(function () {
    $('.mapsModuleSiteMapContainer').css('display', 'none');
    $('.mapsModuleSiteMapContainer').parent('.moduleSectionContent').addClass('siteMap');
    $('.treeOpenSiteMap').parent('li').children('.treeBtn').removeClass('active, current');
  });


  // Toggle side nav tree (UAE)
  $('#mapsSideNavTree4 .treeBtn').click(function () {
    $(this).toggleClass('active');
    $('#mapsSideNavTree4 .treeBtn').removeClass('current');
    $('#mapsSideNavTree4 .treeBtn.tp').removeClass('current');
    $(this).addClass('current');
    if (!$(this).hasClass('active')) {
      $(this).removeClass('current');
    }
  });
  $('.treeOpenSiteMap').click(function () {
    $('#mapsSideNavTree4 .treeBtn').removeClass('active, current');
    $('#mapsSideNavTree4 .treeBtn.tp').removeClass('active, current');
    $(this).parent('li').children('.treeBtn').addClass('active, current');
  });
  $('#treeUAE').click(function () {
    $('#treeAbuD').toggle();
  });
  $('#treeAbuDBtn').click(function () {
    $('#treeAbuDSites').toggle();
  });
  $('#treeSite8Btn').click(function () {
    $('#treeSite8Levels').toggle();
  });
  $('#treeSite8Level1Btn').click(function () {
    $('#treeSite8Level1TPs').toggle();
  });
  $('#treeSite8Level1TPsBtn').click(function () {
    $('#treeSite8Level1TPsUL').toggle();
  });
  $('#treeSite8Level1TPs1Btn').click(function () {
    $('#treeSite8Level1TPs1UL').toggle();
  });
  $('#treeSite8Level1TPs2Btn').click(function () {
    $('#treeSite8Level1TPs2UL').toggle();
  });
  // Open site maps
  $('#treeOpenSiteMap8').click(function () {
    $('.mapsModuleSiteMapContainer').css('display', 'none');
    $('#mapsModSiteMap8').css('display', 'flex');
    $('#mapsModSiteMap8').parent('.moduleSectionContent').removeClass('siteMap');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Site map has been successfully loaded");
    footerMessage();
  });

  // Toggle side nav tree (Portugal)
  $('#mapsSideNavTree5 .treeBtn').click(function () {
    $(this).toggleClass('active');
    $('#mapsSideNavTree5 .treeBtn').removeClass('current');
    $('#mapsSideNavTree5 .treeBtn.tp').removeClass('current');
    $(this).addClass('current');
    if (!$(this).hasClass('active')) {
      $(this).removeClass('current');
    }
  });
  $('.treeOpenSiteMap').click(function () {
    $('#mapsSideNavTree5 .treeBtn').removeClass('active, current');
    $('#mapsSideNavTree5 .treeBtn.tp').removeClass('active, current');
    $(this).parent('li').children('.treeBtn').addClass('active, current');
  });
  $('#treePortug').click(function () {
    $('#treePorto').toggle();
  });
  $('#treePortoBtn').click(function () {
    $('#treePortoSites').toggle();
  });
  $('#treeSite9Btn').click(function () {
    $('#treeSite9Levels').toggle();
  });
  $('#treeSite9Level1Btn').click(function () {
    $('#treeSite9Level1TPs').toggle();
  });
  $('#treeSite9Level1TPsBtn').click(function () {
    $('#treeSite9Level1TPsUL').toggle();
  });
  $('#treeSite9Level1TPs1Btn').click(function () {
    $('#treeSite9Level1TPs1UL').toggle();
  });
  $('#treeSite9Level1TPs2Btn').click(function () {
    $('#treeSite9Level1TPs2UL').toggle();
  });
  // Open site maps
  $('#treeOpenSiteMap9').click(function () {
    $('.mapsModuleSiteMapContainer').css('display', 'none');
    $('#mapsModSiteMap9').css('display', 'flex');
    $('#mapsModSiteMap9').parent('.moduleSectionContent').removeClass('siteMap');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Site map has been successfully loaded");
    footerMessage();
  });





  // Toggle side nav tree (Egypt)
  $('#mapsSideNavTree6 .treeBtn').click(function () {
    $(this).toggleClass('active');
    $('#mapsSideNavTree6 .treeBtn').removeClass('current');
    $('#mapsSideNavTree6 .treeBtn.tp').removeClass('current');
    $(this).addClass('current');
    if (!$(this).hasClass('active')) {
      $(this).removeClass('current');
    }
  });
  $('.treeOpenSiteMap').click(function () {
    $('#mapsSideNavTree6 .treeBtn').removeClass('active, current');
    $('#mapsSideNavTree6 .treeBtn.tp').removeClass('active, current');
    $(this).parent('li').children('.treeBtn').addClass('active, current');
  });
  $('#treeEgypt').click(function () {
    $('#treeSuez, #treeMatrouh, #treeCairo').toggle();
  });
  // Suez
  $('#treeSuezBtn').click(function () {
    $('#treeSuezSites').toggle();
  });
  $('#treeSite17Btn').click(function () {
    $('#treeSite17Levels').toggle();
  });
  $('#treeSite17Level1Btn').click(function () {
    $('#treeSite17Level1TPs').toggle();
  });
  $('#treeSite17Level1TPsBtn').click(function () {
    $('#treeSite17Level1TPsUL').toggle();
  });
  $('#treeSite17Level1TPs1Btn').click(function () {
    $('#treeSite17Level1TPs1UL').toggle();
  });
  $('#treeSite17Level1TPs2Btn').click(function () {
    $('#treeSite17Level1TPs2UL').toggle();
  });
  $('#treeSite17Level1TPs3Btn').click(function () {
    $('#treeSite17Level1TPs3UL').toggle();
  });
  $('#treeSite17Level1TPs4Btn').click(function () {
    $('#treeSite17Level1TPs4UL').toggle();
  });
  $('#treeSite17Level1TPs5Btn').click(function () {
    $('#treeSite17Level1TPs5UL').toggle();
  });
  $('#treeSite17Level1TPs6Btn').click(function () {
    $('#treeSite17Level1TPs6UL').toggle();
  });
  // Open site maps
  $('#treeOpenSiteMap17').click(function () {
    $('.mapsModuleSiteMapContainer').css('display', 'none');
    $('#mapsModSiteMap17').css('display', 'flex');
    $('#mapsModSiteMap17').parent('.moduleSectionContent').removeClass('siteMap');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Site map has been successfully loaded");
    footerMessage();
  });
  // Matrouh
  $('#treeMatrouhBtn').click(function () {
    $('#treeMatrouhSites').toggle();
  });
  $('#treeSite18Btn').click(function () {
    $('#treeSite18Levels').toggle();
  });
  $('#treeSite18Level1Btn').click(function () {
    $('#treeSite18Level1TPs').toggle();
  });
  $('#treeSite18Level1TPsBtn').click(function () {
    $('#treeSite18Level1TPsUL').toggle();
  });
  $('#treeSite18Level1TPs1Btn').click(function () {
    $('#treeSite18Level1TPs1UL').toggle();
  });
  $('#treeSite18Level1TPs2Btn').click(function () {
    $('#treeSite18Level1TPs2UL').toggle();
  });
  $('#treeSite18Level1TPs3Btn').click(function () {
    $('#treeSite18Level1TPs3UL').toggle();
  });
  $('#treeSite18Level1TPs4Btn').click(function () {
    $('#treeSite18Level1TPs4UL').toggle();
  });
  // Open site maps
  $('#treeOpenSiteMap18').click(function () {
    $('.mapsModuleSiteMapContainer').css('display', 'none');
    $('#mapsModSiteMap18').css('display', 'flex');
    $('#mapsModSiteMap18').parent('.moduleSectionContent').removeClass('siteMap');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Site map has been successfully loaded");
    footerMessage();
  });
  // Cairo
  $('#treeCairoBtn').click(function () {
    $('#treeCairoSites').toggle();
  });
  $('#treeSite19Btn').click(function () {
    $('#treeSite19Levels').toggle();
  });
  $('#treeSite19Level1Btn').click(function () {
    $('#treeSite19Level1TPs').toggle();
  });
  $('#treeSite19Level1TPsBtn').click(function () {
    $('#treeSite19Level1TPsUL').toggle();
  });
  $('#treeSite19Level1TPs1Btn').click(function () {
    $('#treeSite19Level1TPs1UL').toggle();
  });
  $('#treeSite19Level1TPs2Btn').click(function () {
    $('#treeSite19Level1TPs2UL').toggle();
  });
  $('#treeSite19Level1TPs3Btn').click(function () {
    $('#treeSite19Level1TPs3UL').toggle();
  });
  $('#treeSite19Level1TPs4Btn').click(function () {
    $('#treeSite19Level1TPs4UL').toggle();
  });
  // Open site maps
  $('#treeOpenSiteMap19').click(function () {
    $('.mapsModuleSiteMapContainer').css('display', 'none');
    $('#mapsModSiteMap19').css('display', 'flex');
    $('#mapsModSiteMap19').parent('.moduleSectionContent').removeClass('siteMap');

    $("#footerImgLoading").show();
    $("#footerMessage").html("Site map has been successfully loaded");
    footerMessage();
  });



});