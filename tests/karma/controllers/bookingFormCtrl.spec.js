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
  var availableServicesResponse = {
    data: {
      availableServices: [
        {'type': 'GP'},
        {'type': 'Specialist'}
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
      dataResourceFactoryMock.getFamilyMembers
        .and.returnValue($q.when(availableServicesResponse));
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

  it('initializes with services data from dataResourceFactory', function() {
    $rootScope.$digest();
    expect(ctrl.availableServices).toEqual(availableServicesResponse.data.availableServices);
  });

  it('initializes with the first service set as active', function() {
    $rootscope.$digest();
    expect(ctrl.activeService).toEqual(0);
  });

  describe('#setActiveFamilyMember()', function() {
    it('sets the active family member to number passed', function() {
      ctrl.setActiveFamilyMember(2);
      expect(ctrl.activeMember).toEqual(2);
    });
  });
});
