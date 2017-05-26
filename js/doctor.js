var apiKey = require('./../.env').apiKey;

Doc = function () {
};


Doc.prototype.getDoctors = function(medicalIssue, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue + '&location=45.512794%2C%20-122.679565%2C100&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=' + apiKey)
   .then(function(result) {
     displayDoctors(result.data);
      console.log(result.meta.item_type);
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.docModule = Doc;
