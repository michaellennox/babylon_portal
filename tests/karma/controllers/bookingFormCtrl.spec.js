describe('BookingFormCtrl', function() {
  var ctrl;
  var dataResourceFactoryMock;
  var $rootScope;

  beforeEach(function() {
    dataResourceFactoryMock = jasmine.createSpyObj(
      'dataResourceFactoryMock',
      ['getFamilyMembers', 'getAvailableServices']
    );
    module('babylonPortal', {
      dataResourceFactory: dataResourceFactoryMock
    });
    inject(function($controller, $q, _$rootScope_) {
      dataResourceFactoryMock.getFamilyMembers
        .and.returnValue($q.when(familyMembersResponse));
      dataResourceFactoryMock.getAvailableServices
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
    $rootScope.$digest();
    expect(ctrl.activeService).toEqual(0);
  });

  it('initializes with the first medic from service set as active', function() {
    $rootScope.$digest();
    expect(ctrl.activeMedic.name).toEqual('A. GP');
  });

  describe('#setActiveFamilyMember()', function() {
    it('sets the active family member to number passed', function() {
      ctrl.setActiveFamilyMember(2);
      expect(ctrl.activeMember).toEqual(2);
    });
  });

  describe('#setActiveService()', function() {
    it('sets the active service to number passed', function() {
      ctrl.setActiveService(4);
      expect(ctrl.activeService).toEqual(4);
    });

    it('sets the active medic relevant to service', function() {
      ctrl.setActiveService(4);
      expect(ctrl.activeMedic.name).toEqual('A. Specialist');
    });
  });

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
        {
          'type': 'GP',
          "medics": [
            {
              "name": "A. GP",
              "appointments": [
                { "time": "1458308800" },
                { "time": "1458308900" }
              ]
            },
            {
              "name": "A. N. GP",
              "appointments": [
                { "time": "1458308800" },
              ]
            }
          ]
        },
        {
          'type': 'Specialist',
          "medics": [
            {
              "name": "A. Specialist",
              "appointments": [
                { "time": "1458308800" },
                { "time": "1458308900" }
              ]
            },
          ]
        }
      ]
    }
  };
});
