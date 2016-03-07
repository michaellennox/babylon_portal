babylonPortal.controller('BookingFormCtrl', ['dataResourceFactory', function(dataResourceFactory) {
  var self = this;

  (function init() {
    dataResourceFactory.getFamilyMembers()
      .then(function(response) {
        self.familyMembers = response.data.familyMembers;
      });
  }).call();
}]);
