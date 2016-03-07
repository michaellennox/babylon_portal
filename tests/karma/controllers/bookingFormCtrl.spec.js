describe('BookingFormCtrl', function() {
  var ctrl;
  var dataResourceFactoryMock;
  var $q;
  var $rootScope;

  beforeEach(function() {
    dataResourceFactoryMock = jasmine.createSpyObj(
      'dataResourceFactoryMock',
      ['getFamilyMembers']
    );
    module('babylonPortal', {
      dataResourceFactory: dataResourceFactoryMock
    });
    inject(function($controller, _$q_, _$rootScope_) {
      ctrl = $controller('BookingFormCtrl');
      $q = _$q_;
      $rootScope = _$rootScope_;
    });
  });

  it('initializes with family members from the dataResourceFactory', function() {
    var response = {
      data: {
        familyMembers: [
          {'name': 'Yourself'},
          {'name': 'Jessica'}
        ]
      }
    };
    dataResourceFactoryMock.getFamilyMembers
      .and.returnValue($q.when(response));
    $rootScope.$digest();
    expect(ctrl.familyMembers).toEqual(response.data.familyMembers);
  });
});
