babylonPortal.controller('BookingFormCtrl', ['dataResourceFactory', function(dataResourceFactory) {
  var self = this;

  self.setActiveFamilyMember = function(index) {
    self.activeMember = index;
  };

  (function init() {
    dataResourceFactory.getFamilyMembers(1)
      .then(function(response) {
        self.familyMembers = response.data.familyMembers;
        self.activeMember = 0;
      });
  }).call();
}]);
