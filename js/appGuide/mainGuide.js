$(document).ready(function () {
  var homepageGuide = sessionStorage.getItem("homepageGuide");
  if (homepageGuide != null) {
    if (sessionStorage.getItem("mapsMain") != null) {
      var enjoyhint_instance = new EnjoyHint({});
      var enjoyhint_script_steps = [{
        'click #openMapsSideNav': 'Let\'s explore the navigation menu'
      }, {
        'click #treeGermany': 'Now, you can navigate to a specific country from here'
      }, {
        'click #treeBerlin': 'Expand to view the city details'
      }, {
        'click #treeSites': 'All of your managed sites are listed here'
      }, {
        'click .treeOpenSiteMap': 'From here you can open the site\'s map'
      }, {
        'click #openMapsSideNav': 'Click here again to hide the navigation menu'
      }, {
        'click #GISmapRecentAlarmsBtn': 'You can explore the recent alarms from here'
      }, {
        'click .GISmapSideAlarmsView': 'Let\’s view the details of this alarm'
      }, {
        'click #alarmsModAlarm1Details': 'Explore the event details in this tab'
      }, {
        'click #alarmsModAlarm1AcP': 'You can execute the <b>Action Plan</b> of this alarm from this tab<br><br>The <b>Action Plan</b> is a freely configurable flow chart<br>with manual or automaticelements and ensures maximum<br>speed and efficiency in the event handling process.'
      }, {
        'click #alarmsModAlarm1SOP': 'Alternatively the event handling can be guided in form of a <b>SOP</b><br><br>Instead of the Action Plan the event handling process can also be<br>displayed in the form of a <b>Standard Operating Procedure</b>.'
      }, {
        'click #alarmsModAlarm1RTPs': 'In this tab you can view the related touchpoints to those that have caused the alarm'
      }, {
        'click #alarmsModAlarm1Attach': 'In this tab you can view the related attachments of the alarm'
      }, {
        'click #alarmsModAlarm1History': 'In this tab you can view all history related of the alarm'
      }, {
        'click #openAlarmsSideNav': 'Also, you can find more alarms in the alarms stack menu'
      }, {
        'click #alarmSideNavBLPersonStack': 'In this tab you can find history of all transaction of this alarm'
      }, {
        'click #alarmsModOpenAlarm2': 'Also, you can click here to open this alarm in a new tab'
      }, {
        'click #pinAlarmsSideNav': 'Let\'s pin the alarms stack menu next to the opened alarms'
      }];
      //set script config
      enjoyhint_instance.set(enjoyhint_script_steps);
      enjoyhint_instance.run()
    }
    sessionStorage.removeItem("homepageGuide");
  }
});
