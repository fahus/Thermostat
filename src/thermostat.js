'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
  this.maxmimumTemperature = 25;


  Thermostat.prototype.isMinimumTemperature = function () {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  };
  Thermostat.prototype.isMaximumTemperature = function () {
    return this.temperature === this.maxmimumTemperature;
  };

  Thermostat.prototype.getCurrentTemperature = function () {
    return this.temperature;
  };

  Thermostat.prototype.up = function () {
    if (this.isMaximumTemperature()) {
      return;
    }
    this.temperature += 1;
    return this.temperature
  };

  Thermostat.prototype.down = function () {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature -= 1;
    return this.temperature
  };

  Thermostat.prototype.powerSavingModeOn = function () {
    this.maxmimumTemperature = 25;
    return true
  };

  Thermostat.prototype.powerSavingModeOff = function () {
    this.maxmimumTemperature = 32;
    return false
  };

  Thermostat.prototype.resetTemperature = function () {
    this.temperature = 20;
    return this.temperature
  };

  Thermostat.prototype.usage = function () {
    if (this.temperature < 18) {
      return 'low-usage'
    } else if (this.temperature < 25 && this.temperature > 18) {
      return 'medium-usage'
    } else if (this.temperature > 25) {
      return 'high-usage'
    }
  };

};
