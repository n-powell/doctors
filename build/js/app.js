(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "a526379f168fb5cf948f0dfac30182b6";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

Doc = function () {
};


Doc.prototype.getDoctors = function(medicalIssue, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue + '&location=45.512794%2C%20-122.679565%2C100&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=' + apiKey)
   .then(function(result) {
     displayDoctors(medicalIssue, result);
      console.log(result);
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.docModule = Doc;

},{"./../.env":1}],3:[function(require,module,exports){
var Doc = require('./../js/doctor.js').docModule;

var displayDoctors = function (medicalIssue, doctorsData) {
  $('.showDoctors').text("The doctors near you for " + medicalIssue + " are " + doctorsData);
};

$(document).ready(function() {
  var currentDoctorObject = new Doc()
  $('#submitIssue').click(function() {
    var medicalIssue = $('#medicalIssue').val();
    $('#medicalIssue').val("");
    currentDoctorObject.getDoctors(medicalIssue, displayDoctors);
  });
});

},{"./../js/doctor.js":2}]},{},[3]);
