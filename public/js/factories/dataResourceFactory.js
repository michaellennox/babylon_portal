babylonPortal.factory('dataResourceFactory', ['$http', '$q', function($http, $q) {
  var self = {};

  self.getFamilyMembers = function(family_id) {
    return $http.get('/api/families/' + family_id);
  };

  self.getAvailableServices = function(family_id) {
    return $http.get('/api/families/' + family_id + '/services');
  };

  self.postBookings = function(user, service, medic, appointment) {
    var req = $http.post('/api/bookings', {
      user: user,
      service: service,
      medic: medic,
      appointment: appointment
    });
    return req;
  };

  return self;
}]);
