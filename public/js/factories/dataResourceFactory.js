babylonPortal.factory('dataResourceFactory', ['$http', '$q', function($http, $q) {
  var self = {};

  self.getFamilyMembers = function(family_id) {
    // this function would call the below endpoint
    // return $http.get('/api/families/' + family_id);

    // but for now it will just grab the faked data
    return $http.get('/public/mocked_data/faked_family.json');
  };

  return self;
}]);
