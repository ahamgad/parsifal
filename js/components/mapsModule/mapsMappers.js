// Germany airport video mapper
$("#openAlarm38MapsMapper").click(function () {
  $('#moduleStyle1 .siteMapMapper').css('display', 'none');
  $('#alarm38MapsMapper').css('display', 'flex');
});

$("#openAlarm35MapsMapper").click(function () {
  $('#moduleStyle1 .siteMapMapper').css('display', 'none');
  $('#alarm35MapsMapper').css('display', 'flex');
});

$("#openAlarm34MapsMapper").click(function () {
  $('#moduleStyle1 .siteMapMapper').css('display', 'none');
  $('#alarm34MapsMapper').css('display', 'flex');
});

$("#openAlarm33MapsMapper").click(function () {
  $('#moduleStyle1 .siteMapMapper').css('display', 'none');
  $('#alarm33MapsMapper').css('display', 'flex');
});

$("#openAlarm29MapsMapper").click(function () {
  $('#moduleStyle1 .siteMapMapper').css('display', 'none');
  $('#alarm29MapsMapper').css('display', 'flex');
});

$("#openAlarm28MapsMapper").click(function () {
  $('#moduleStyle1 .siteMapMapper').css('display', 'none');
  $('#alarm28MapsMapper').css('display', 'flex');
});

$("#openAlarm31MapsMapper").click(function () {
  $('#moduleStyle1 .siteMapMapper').css('display', 'none');
  $('#alarm31MapsMapper').css('display', 'flex');
});

$("#openAlarm39MapsMapper").click(function () {
  $('#moduleStyle1 .siteMapMapper').css('display', 'none');
  $('#alarm39MapsMapper').css('display', 'flex');
});

$("#openAlarm32MapsMapper").click(function () {
  $('#moduleStyle1 .siteMapMapper').css('display', 'none');
  $('#alarm32MapsMapper').css('display', 'flex');
});

$("#openParkingMapsMapper2").click(function () {
  $('#moduleStyle1 .siteMapMapper').css('display', 'none');
  $('#parkingMapsMapper2').css('display', 'flex');
});

$("#openWeatherMapsMapper2").click(function () {
  $('#moduleStyle1 .siteMapMapper').css('display', 'none');
  $('#weatherMapsMapper2').css('display', 'flex');
});

$("#openAirQMapsMapper2").click(function () {
  $('#moduleStyle1 .siteMapMapper').css('display', 'none');
  $('#airQMapsMapper2').css('display', 'flex');
});

$("#openAirTraficMapsMapper2").click(function () {
  $('#moduleStyle1 .siteMapMapper').css('display', 'none');
  $('#airtraficMapsMapper2').css('display', 'flex');
});

// Mexico video mapper
$("#openAlarm24MapsMapper").click(function () {
  $('#moduleStyle1 .siteMapMapper').css('display', 'none');
  $('#alarm24MapsMapper').css('display', 'flex');
});

$("#openAlarm21MapsMapper").click(function () {
  $('#moduleStyle1 .siteMapMapper').css('display', 'none');
  $('#alarm21MapsMapper').css('display', 'flex');
});

$("#openAlarm20MapsMapper").click(function () {
  $('#moduleStyle1 .siteMapMapper').css('display', 'none');
  $('#alarm20MapsMapper').css('display', 'flex');
});

$("#openAlarm19MapsMapper").click(function () {
  $('#moduleStyle1 .siteMapMapper').css('display', 'none');
  $('#alarm19MapsMapper').css('display', 'flex');
});

$("#openAlarm15MapsMapper").click(function () {
  $('#moduleStyle1 .siteMapMapper').css('display', 'none');
  $('#alarm15MapsMapper').css('display', 'flex');
});

$("#openAlarm14MapsMapper").click(function () {
  $('#moduleStyle1 .siteMapMapper').css('display', 'none');
  $('#alarm14MapsMapper').css('display', 'flex');
});

$("#openAlarm17MapsMapper").click(function () {
  $('#moduleStyle1 .siteMapMapper').css('display', 'none');
  $('#alarm17MapsMapper').css('display', 'flex');
});

$("#openAlarm25MapsMapper").click(function () {
  $('#moduleStyle1 .siteMapMapper').css('display', 'none');
  $('#alarm25MapsMapper').css('display', 'flex');
});

$("#openAlarm13MapsMapper").click(function () {
  $('#moduleStyle1 .siteMapMapper').css('display', 'none');
  $('#alarm13MapsMapper').css('display', 'flex');
});

$("#openAlarm18MapsMapper").click(function () {
  $('#moduleStyle1 .siteMapMapper').css('display', 'none');
  $('#alarm18MapsMapper').css('display', 'flex');
});

$("#openParkingMapsMapper").click(function () {
  $('#moduleStyle1 .siteMapMapper').css('display', 'none');
  $('#parkingMapsMapper').css('display', 'flex');
});

$("#openWeatherMapsMapper").click(function () {
  $('#moduleStyle1 .siteMapMapper').css('display', 'none');
  $('#weatherMapsMapper').css('display', 'flex');
});

$("#openAirQMapsMapper").click(function () {
  $('#moduleStyle1 .siteMapMapper').css('display', 'none');
  $('#airQMapsMapper').css('display', 'flex');
});

$("#openAirTraficMapsMapper").click(function () {
  $('#moduleStyle1 .siteMapMapper').css('display', 'none');
  $('#airtraficMapsMapper').css('display', 'flex');
});

  document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'complete') {
      setTimeout(function () {
        document.getElementById('interactive');
        document.getElementById('loader').style.visibility = "hidden";
      }, 0);
    }
  }
// Pin mapper
$("#moduleStyle1 .siteMapMapperPin").click(function () {
  $(this).toggleClass('exit');
  $(this).closest('.siteMapMapper').toggleClass('pinned');
});

// Signal Iduna Park
$("#openParkingDortMapper").click(function () {
  $('#moduleStyle1 .siteMapMapper').css('display', 'none');
  $('#parkingDortMapper').css('display', 'flex');
});
$("#openAccessDortMapper").click(function () {
  $('#moduleStyle1 .siteMapMapper').css('display', 'none');
  $('#accessgDortMapper').css('display', 'flex');
});
// Close mapper
$("#moduleStyle1 .siteMapMapperClose").click(function () {
  $('#moduleStyle1 .siteMapMapper').css('display', 'none');
  $('#moduleStyle1 .siteMapMapperPin').removeClass('exit');
  $('#moduleStyle1 .siteMapMapper').removeClass('pinned');
});

// open alarm
$("#moduleStyle1 .mapperBtnAction").click(function () {
  alarmsModule();
});
