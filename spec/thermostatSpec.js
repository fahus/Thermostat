'use strict';

describe ('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('temperature', function() {

    it ('starts at 20 degrees', function(){
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

    it('increases in temperature with up()',function(){
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });

    it('decreases in temperature with down()', function(){
      thermostat.down();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });

    it('has a minimum temperature of 10 degrees', function(){
      for (var i = 0; i < 11; i++){
        thermostat.down();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });

    it('reset temperature to 20 degrees with a reset', function(){
      thermostat.up();
      thermostat.resetTemperature();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

  });

    describe('power save mode', function(){

      it('Power save mode on has a maximum temperature of 25 degrees', function(){
        thermostat.powerSavingModeOn()
        for (var i = 0; i < 6; i++){
          thermostat.up();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(25)
      });

      it('Power save mode off has a maximum temperature of 32 degrees', function(){
        thermostat.powerSavingModeOff()
        for (var i = 0; i < 13; i++){
          thermostat.up();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(32)
      });

      it('Power saving mode is on by default', function(){
        expect(thermostat.powerSavingModeOn()).toEqual(true);
      });

    });

    describe('energy usage', function(){

      it('returns low usage when < 18', function(){
        for (var i = 0; i < 3; i++){
          thermostat.down();
        }
        expect(thermostat.usage()).toEqual('low-usage')
      });

      it('returns medium usage when < 25', function(){
        expect(thermostat.usage()).toEqual('medium-usage')
      });

      it('returns hi usage when > 25', function(){
        thermostat.powerSavingModeOff();
        for (var i = 0; i < 6; i++){
          thermostat.up();
        }
        expect(thermostat.usage()).toEqual('high-usage')
      });

    });

  });
