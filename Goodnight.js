const minLen = 30;
const secsLen = minLen * 60;
const perTick = 255 / secsLen;

var Hue = require('philips-hue');
var hue = new Hue;

hue.bridge = "192.168.1.212";  // from hue.getBridges
hue.username = "nd57mE7fuKSO9ipz3nCfPkrowcc7o6yrFn9NrVwO"; // from hue.auth

var timePassed = 0;

var lightState = {bri: 255, sat: 255, hue: 0}; //Red Full Brightness
var brightness = 255;

hue.light(9).on();
hue.light(4).on();
hue.light(9).setState(lightState);
hue.light(4).setState(lightState);

var mainTimer = setInterval(function() {
  timePassed += 1;
  brightness -= perTick;
  lightState.bri = Math.round(brightness);

  //console.log(timePassed);
  //console.log(lightState.bri);

  hue.light(9).setState(lightState);
  hue.light(4).setState(lightState);

  if (lightState.bri <= 0) {
    hue.light(9).off();
    hue.light(4).off();
    clearInterval(mainTimer);
  }

}, 1000);
