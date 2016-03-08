describe('BookingFormCtrl', function() {
  var ctrl;
  var dataResourceFactoryMock;
  var $rootScope;
  var familyMembersResponse = {
    data: {
      familyMembers: [
        {'name': 'Yourself'},
        {'name': 'Jessica'}
      ]
    }
  };

  beforeEach(function() {
    dataResourceFactoryMock = jasmine.createSpyObj(
      'dataResourceFactoryMock',
      ['getFamilyMembers']
    );
    module('babylonPortal', {
      dataResourceFactory: dataResourceFactoryMock
    });
    inject(function($controller, $q, _$rootScope_) {
      dataResourceFactoryMock.getFamilyMembers
        .and.returnValue($q.when(familyMembersResponse));
      ctrl = $controller('BookingFormCtrl');
      $rootScope = _$rootScope_;
    });
  });

  it('initializes with family members from the dataResourceFactory', function() {
    $rootScope.$digest();
    expect(ctrl.familyMembers).toEqual(familyMembersResponse.data.familyMembers);
  });

  it('initializes with the first family member as active', function() {
    $rootScope.$digest();
    expect(ctrl.activeMember).toEqual(0);
  });
});
