babylonPortal.factory('dataResourceFactory', ['$http', '$q', function($http, $q) {
  var self = {};

  self.getFamilyMembers = function(family_id) {
    // this function would call the below endpoint
    // return $http.get('/api/families/' + family_id);
    // the API would verify that the logged in user is a member of that family,
    // then return the rest of the family with the current user flagged as 'Yourself' instead of the username

    // but for now it will just grab the faked data
    return $http.get('/public/mocked_data/faked_family.json');
  };

  return self;
}]);
