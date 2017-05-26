var Doc = require('./../js/doctor.js').docModule;

var displayDoctors = function (doctors) {
  $('#showDoctors').text("")
  doctors.data.forEach(function(doctor){
      $('#showDoctors').append('<li>'+ '<img src=' + doctor.profile.image_url + '>' + doctor.profile.first_name + ' ' + doctor.profile.last_name + '<br>' +  doctor.profile.bio + '<br>' + '<a href=\"' + doctor.practices[0].website + '\">Visit my website</a>') + '<br>' + '</li>' + '<br>');
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
