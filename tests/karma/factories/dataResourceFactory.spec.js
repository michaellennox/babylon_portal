describe('dataResourceFactory', function() {
  var factory;
  var $httpBackend;

  beforeEach(function() {
    module('babylonPortal');
    inject(function(dataResourceFactory, _$httpBackend_) {
      factory = dataResourceFactory;
      $httpBackend = _$httpBackend_;
    });
  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('#getFamilyMembers', function() {
    it('returns the data from the families endpoint', function() {
      var fakedFamily = {'familyMemers': 'many members'}
      $httpBackend.expectGET('/public/mocked_data/faked_family.json').respond(fakedFamily);
      factory.getFamilyMembers().then(function(response) {
        expect(response.data).toEqual(fakedFamily);
      });
      $httpBackend.flush();
    });
  });
});
