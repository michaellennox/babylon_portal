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
});
