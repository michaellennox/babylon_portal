babylonPortal.controller('BookingFormCtrl', ['dataResourceFactory', '$filter', function(dataResourceFactory, $filter) {
  var self = this;

  self.setActiveFamilyMember = function(index) {
    self.activeMember = index;
  };

  self.setActiveService = function(index) {
    self.activeService = index;
    self._setActiveMedicFromService();
  };

  self._setActiveMedicFromService = function() {
    self.activeMedic = self.availableServices[self.activeService].medics[0];
  };

  dataResourceFactory.getFamilyMembers(1)
    .then(function(response) {
      self.familyMembers = response.data.familyMembers;
      self.activeMember = 0;
    });
  dataResourceFactory.getAvailableServices(1)
    .then(function(response) {
      self.availableServices = response.data.availableServices;
      self.activeService = 0;
      self._setActiveMedicFromService();
    });
}]);
