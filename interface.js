
$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemp();

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
