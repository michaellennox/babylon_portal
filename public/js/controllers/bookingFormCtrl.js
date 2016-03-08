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
    dataResourceFactory.getAvailableServices(1)
      .then(function(response) {
        self.availableServices = response.data.availableServices;
        self.activeService = 0;
      });
  }).call();
}]);
