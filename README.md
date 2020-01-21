# Thermostat :thermometer:

Makers Academy Week 5 challenge, to help us to learn a brand new language, Javascript. The challenge was to test drive a front-end web app using Javascript, with the client specifications below.

The thermostat also uses a weather API to check the weather of your current location, so that you can adjust your thermostat accordingly.

## Client requirements:

* Thermostat starts at 20 degrees
* You can increase the temperature with an up function
* You can decrease the temperature with a down function
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default
* You can reset the temperature to 20 with a reset function
* You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.green, `medium-usage` indicated with black, `high-usage` indicated with red.)


## Using this program

* Clone this repo
* From the command line, type 'open index.html'
* Select your city from the drop-down menu, to check the current weather and adjust your thermostat accordingly
* If power-saving mode is on, you won't be able to increase the temperature higher than 25 degrees. If you turn it off, you can increase up to 32. Turning power save mode off, increasing the temperature and then turning power save mode back on will change the maximum back to 25 again.


## Demo

![demo](https://media.giphy.com/media/hubce65hwykDdkw6Bq/giphy.gif)


## What I learned from this project

* How to test drive a simple front-end web app with Javascript
* Reading and writing Javascript syntax
* How to follow an effective process for learning a new language
* How to encapsulate behaviour in Javascript
* Introduced to Ajax and jQuery
* How to test and debug in multiple languages

## Testing

### Feature Testing

* Copy the code in the 'thermostat.js' file and paste this into your console on Chrome Dev Tools.
* Create a new thermostat object by typing thermostat = new Thermostat();
* You can increase the temperature by typing `thermostat.up();` and decrease it by typing `thermostat.down();`
* To toggle the power saving mode on or off, type `thermostat.switchPSM();`
* To check your energy usage, type `thermostat.energyUsage();`
* To check the current temperature, type `thermostat.temp();`
* To reset the temperature, type `thermostat.reset();`

### Unit Testing

* Clone this repo
* From the command line, type 'open SpecRunner.html'
* All unit tests pass

![image](https://user-images.githubusercontent.com/52044764/72189629-3f496480-33f5-11ea-9147-ce45d82b5b03.png)
