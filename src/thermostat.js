'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MIN_TEMP = 10;
  this.maxTemp = 25;
};

Thermostat.prototype.isMinTemp = function() {
  return this.temperature === this.MIN_TEMP;
};
Thermostat.prototype.isMaxTemp = function () {
  return this.temperature === this.maxTemp;
};

Thermostat.prototype.currentTemp = function() {
  return this.temperature
};
Thermostat.prototype.increaseTemp = function() {
  if (this.isMaxTemp()) {
    return;
  }
  this.temperature += 1;
  return this.temperature
};
Thermostat.prototype.decreaseTemp = function() {
  if (this.isMinTemp()) {
    return;
  }
  this.temperature -= 1;
  return this.temperature
};
Thermostat.prototype.resetTemp = function () {
  this.temperature = 20;
  return this.temperature
};

Thermostat.prototype.powerSavingModeOn = function () {
  this.maxTemp = 25;
  return true
};
Thermostat.prototype.powerSavingModeOff = function () {
  this.maxTemp = 32;
  return false
};

Thermostat.prototype.energyUsage = function () {
  if (this.temperature < 18) {
    return 'low-usage'
  } else if (this.temperature < 25 && this.temperature > 18) {
    return 'medium-usage'
  } else if (this.temperature > 25) {
    return 'high-usage'
  }
};
