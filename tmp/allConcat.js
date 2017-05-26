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
