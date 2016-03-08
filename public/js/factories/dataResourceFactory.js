babylonPortal.factory('dataResourceFactory', ['$http', '$q', function($http, $q) {
  var self = {};

  self.getFamilyMembers = function(family_id) {
    return $http.get('/api/families/' + family_id);
  };

  return self;
}]);
