// Dashboards tabs
function openMetcoDashboardTab(evt, styleName) {
  var i, x, metcoDashboardTabs;
  x = $(".metcoDashboardStyle");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  metcoDashboardTabs = $(".metcoDashboardTab");
  for (i = 0; i < x.length; i++) {
    metcoDashboardTabs[i].className = metcoDashboardTabs[i].className.replace(" active", "");
  }
  document.getElementById(styleName).style.display = "block";
  evt.currentTarget.className += " active";
}
$(".metcoDashboardTab").click(function () {
  $(".metcoDashboard").removeClass("active");
  $(this).parent().addClass("active");
});

// Loading dashboards
function loadMetcoKnowledge() {
  $.ajax({
    url: "components/metcoDashboards/Knowledge.html",
    type: "GET",
    dataType: "html",
    cache: true,
    success: function (data) {
      $("#metcoSectionContent").append(data);
      $('#metcoDashboardsHeader .metcoDashboardKnowledge').removeAttr("hidden", "hidden");

      $('.metcoDashboard:visible:first').children('.metcoDashboardTab').click();
      $('#metcoDashboardsHeader').find('.metcoDashboard:visible:first').addClass("active");
    }
  });
}

function loadMetcoPrediction() {
  $.ajax({
    url: "components/metcoDashboards/Prediction.html",
    type: "GET",
    dataType: "html",
    cache: true,
    success: function (data) {
      $("#metcoSectionContent").append(data);
      $('#metcoDashboardsHeader .metcoDashboardPrediction').removeAttr("hidden", "hidden");

      $('.metcoDashboard:visible:nth-child(11)').children('.metcoDashboardTab').click();
      $('#metcoDashboardsHeader').find('.metcoDashboard:visible:nth-child(11)').addClass("active");
    }
  });
}

function loadMetcoExterRes() {
  $.ajax({
    url: "components/metcoDashboards/ExternalResources.html",
    type: "GET",
    dataType: "html",
    cache: true,
    success: function (data) {
      $("#metcoSectionContent").append(data);
      $('#metcoDashboardsHeader .metcoDashboardExterRes').removeAttr("hidden", "hidden");

      $('.metcoDashboard:visible:nth-child(15)').children('.metcoDashboardTab').click();
      $('#metcoDashboardsHeader').find('.metcoDashboard:visible:nth-child(15)').addClass("active");
    }
  });
}

// Toggle select all
$("#selectAllMetcoDB").change(function () {
  var checked = $(this).is(':checked'); // Checkbox state
  if (checked) { // Select all
    $(this).parent('.checkC').children('.metcoAdvancedFilter').addClass('active');

    $('#metcoSectionContent').html('');
    $('#metcoDashboardsHeader .metcoDashboard').attr("hidden", "hidden");

    loadMetcoExterRes();
    loadMetcoPrediction();
    loadMetcoKnowledge();
    $('.selectThisMetcoDB').prop('checked', true);

    $('#metcoDBStack .selectThisMetcoDB').each(function () {
      $(this).prop('checked', true);
      $('.metcoSideNavRow').children('.radioCmLabel').addClass('active');
      $('#metcoDBStack .metcoSideNavRow').addClass('active');

    });
  } else { // Deselect All
    $('.selectThisMetcoDB').each(function () {
      $(this).parent('.checkC').children('.metcoAdvancedFilter').removeClass('active');
      $(this).prop('checked', false);
      $('.metcoSideNavRow').children('.radioCmLabel').removeClass('active');
      $('#metcoDBStack .metcoSideNavRow').removeClass('active');

      // Reset div
      $('#metcoSectionContent').html('');
      $('#metcoDashboardsHeader .metcoDashboard').attr("hidden", "hidden");
    });
  }
});
$("#metcoDBStack .selectThisMetcoDB").change(function () { // Changing state of Checkbox
  if ($("#metcoDBStack .selectThisMetcoDB").length === $('#metcoDBStack .selectThisMetcoDB:checked').length) {
    $("#selectAllMetcoDB").prop("checked", true);
    $('#selectAllMetcoDB').parent('.checkC').children('.metcoAdvancedFilter').addClass('active');
  } else {
    $('#selectAllMetcoDB').parent('.checkC').children('.metcoAdvancedFilter').removeClass('active');
    $("#selectAllMetcoDB").prop('checked', false);
  }
});

function ClearMetcoBIDCheck() {
  $('.selectThisMetcoDB').each(function () {
    $(this).parent('.checkC').children('.metcoAdvancedFilter').removeClass('active');
    $(this).prop('checked', false);
    $('.metcoSideNavRow').children('.radioCmLabel').removeClass('active');
    $('#metcoDBStack .metcoSideNavRow').removeClass('active');
    // Reset div
    $('#metcoSectionContent').html('');
    $('#metcoDashboardsHeader .metcoDashboard').attr("hidden", "hidden");
  });
}

$("#metcoCheckVal1").change(function () {
  var checked = $(this).is(':checked');
  if (checked) { // Select all
    $(this).parent('.metcoSideNavRow').children('.radioCmLabel').addClass('active');
    $(this).parent('.metcoSideNavRow').addClass('active');

    loadMetcoKnowledge();

  } else {
    $(this).parent('.metcoSideNavRow').children('.radioCmLabel').removeClass('active');
    $(this).parent('.metcoSideNavRow').removeClass('active');

    $('#metcoSectionContent .removeKnowledgeJS').remove();
    $('#metcoDashboardsHeader .metcoDashboardKnowledge').attr("hidden", "hidden");

    $('.metcoDashboard:visible:first').children('.metcoDashboardTab').click();
    $('#metcoDashboardsHeader').find('.metcoDashboard:visible:first').addClass("active");
  }
});
$("#metcoCheckVal2").change(function () {
  var checked = $(this).is(':checked');
  if (checked) { // Select all
    $(this).parent('.metcoSideNavRow').children('.radioCmLabel').addClass('active');
    $(this).parent('.metcoSideNavRow').addClass('active');

    loadMetcoPrediction();

  } else {
    $(this).parent('.metcoSideNavRow').children('.radioCmLabel').removeClass('active');
    $(this).parent('.metcoSideNavRow').removeClass('active');

    $('#metcoSectionContent .removePredictionJS').remove();
    $('#metcoDashboardsHeader .metcoDashboardPrediction').attr("hidden", "hidden");

    $('.metcoDashboard:visible:first').children('.metcoDashboardTab').click();
    $('#metcoDashboardsHeader').find('.metcoDashboard:visible:first').addClass("active");
  }
});
$("#metcoCheckVal3").change(function () {
  var checked = $(this).is(':checked');
  if (checked) { // Select all
    $(this).parent('.metcoSideNavRow').children('.radioCmLabel').addClass('active');
    $(this).parent('.metcoSideNavRow').addClass('active');

    loadMetcoExterRes();

  } else {
    $(this).parent('.metcoSideNavRow').children('.radioCmLabel').removeClass('active');
    $(this).parent('.metcoSideNavRow').removeClass('active');

    $('#metcoSectionContent .removeExterResJS').remove();
    $('#metcoDashboardsHeader .metcoDashboardExterRes').attr("hidden", "hidden");

    $('.metcoDashboard:visible:first').children('.metcoDashboardTab').click();
    $('#metcoDashboardsHeader').find('.metcoDashboard:visible:first').addClass("active");
  }
});