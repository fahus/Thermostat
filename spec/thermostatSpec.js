'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('temperature', function() {
    it('starts with a default of 20 degrees', function() {
      expect(thermostat.currentTemp()).toEqual(20);
    });

    it('increases tempature when called', function() {
      thermostat.increaseTemp()
      expect(thermostat.currentTemp()).toEqual(21);
    });

    it('decreases temperature when called', function() {
      thermostat.decreaseTemp()
      expect(thermostat.currentTemp()).toEqual(19);
    });

    it('temperature cannot drop below 10 degrees', function() {
      for (var i = 0; i < 11; i++) {
        thermostat.decreaseTemp()
      }
      expect(thermostat.currentTemp()).toEqual(10);
    });

    it('reset temperature to 20 degrees with a reset', function() {
      thermostat.increaseTemp();
      thermostat.resetTemp();
      expect(thermostat.currentTemp()).toEqual(20);
    });
  });

  describe('power save mode', function(){
    it('Power save mode on has a maximum temperature of 25 degrees', function() {
      thermostat.powerSavingModeOn()
      for (var i = 0; i < 6; i++) {
        thermostat.increaseTemp();
      }
      expect(thermostat.currentTemp()).toEqual(25)
    });

    it('Power save mode off has a maximum temperature of 32 degrees', function() {
      thermostat.powerSavingModeOff()
      for (var i = 0; i < 13; i++) {
        thermostat.increaseTemp();
      }
      expect(thermostat.currentTemp()).toEqual(32)
    });

    it('Power saving mode is on by default', function() {
      expect(thermostat.powerSavingModeOn()).toEqual(true);
    });
  });

  describe('energy usage', function() {
    it('returns low usage when < 18', function() {
      for (var i = 0; i < 3; i++) {
        thermostat.decreaseTemp();
      }
      expect(thermostat.energyUsage()).toEqual('low-usage')
    });

    it('returns medium usage when < 25', function() {
      expect(thermostat.energyUsage()).toEqual('medium-usage')
    });

    it('returns hi usage when > 25', function() {
      thermostat.powerSavingModeOff();
      for (var i = 0; i < 6; i++) {
        thermostat.increaseTemp();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage')
    });
  });

});
