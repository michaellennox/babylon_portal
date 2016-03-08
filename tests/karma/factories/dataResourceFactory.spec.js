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

  describe('#getFamilyMembers()', function() {
    it('returns the data from the families endpoint', function() {
      var fakedFamily = {'familyMemers': 'many members'}
      $httpBackend.expectGET('/api/families/1').respond(fakedFamily);
      factory.getFamilyMembers(1).then(function(response) {
        expect(response.data).toEqual(fakedFamily);
      });
      $httpBackend.flush();
    });
  });

  describe('#getAvailableServices()', function() {
    it('returns the data from the services endpoint', function() {
      var fakedServices = {'services': 'many services'}
      $httpBackend.expectGET('/api/families/1/services').respond(fakedServices);
      factory.getAvailableServices(1).then(function(response) {
        expect(response.data).toEqual(fakedServices);
      });
      $httpBackend.flush();
    })
  });
});
