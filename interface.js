$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemp();


  displayWeather('London');

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    displayWeather(city);
  })


  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  }



  $('#temperature-up').click(function() {
    thermostat.increaseTemp();
    updateTemp();
  });

  $('#temperature-down').click(function() {
    thermostat.decreaseTemp();
    updateTemp();
  });

  $('#temperature-reset').click(function() {
    thermostat.resetTemp();
    updateTemp();
  });

  $('#powersaving-on').click(function() {
    thermostat.powerSavingModeOn();
    $('#power-saving-status').text('on')
    updateTemp();
  });

  $('#powersaving-off').click(function() {
    thermostat.powerSavingModeOff();
    $('#power-saving-status').text('off')
    updateTemp();
  });

  function updateTemp() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };
});
