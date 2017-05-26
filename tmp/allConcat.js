var Doc = require('./../js/doctor.js').docModule;

var displayDoctors = function (doctors) {
  doctors.forEach(function(doctor){
      $('#showDoctors').append(doctor.profile.first_name);
  });
};

$(document).ready(function() {
  var currentDoctorObject = new Doc();
  $('#submitIssue').click(function() {
    var medicalIssue = $('#medicalIssue').val();
    $('#medicalIssue').val("");
    currentDoctorObject.getDoctors(medicalIssue, displayDoctors);
  });
});
