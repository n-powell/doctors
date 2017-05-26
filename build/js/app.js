(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "a526379f168fb5cf948f0dfac30182b6";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;


$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    }).fail(function(error) {
        $('.showWeather').text(error.responseJSON.message);
      });
  });

  $('#current-temperature').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then( function(response) {
      $('.showWeather').html("<h3>" + "The temperature in " + city + " is " + ((response.main.temp) - 273.15).toFixed(2) + " C" +  "</h3>" + "<br>" + "<h3>" + "The temperature F in " + city + " is " + ((response.main.temp)*(9/5) - 459.67).toFixed(2) + " F" + "</h3>");
    }).fail(function(error) {
        $('.showWeather').text(error.responseJSON.message);
      });
  });
});

},{"./../.env":1}]},{},[2]);
