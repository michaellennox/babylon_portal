babylonPortal.controller('BookingFormCtrl', ['dataResourceFactory', '$location', function(dataResourceFactory, $location) {
  var self = this;

  self.setActiveFamilyMember = function(index) {
    self.activeMember = index;
  };

  self.setActiveService = function(index) {
    self.activeService = index;
    self._setActiveMedicFromService();
  };

  self.completeBooking = function() {
    dataResourceFactory.postBookings(
      self.familyMembers[self.activeMember],
      self.availableServices[self.activeService],
      self.activeMedic,
      self.activeAppointment
    ).then(function() {
      $location.path('/');
    });
  };

  self._setActiveMedicFromService = function() {
    self.medics = self.availableServices[self.activeService].medics;
    self.activeMedic = self.medics[0];
    self._setActiveAppointmentFromMedic();
  };

  self._setActiveAppointmentFromMedic = function() {
    self.appointments = self.activeMedic.appointments;
    self.activeAppointment = self.appointments[0];
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
