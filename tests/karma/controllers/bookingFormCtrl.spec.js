describe('BookingFormCtrl', function() {
  var ctrl;
  var dataResourceFactoryMock;
  var $rootScope;

  beforeEach(function() {
    dataResourceFactoryMock = jasmine.createSpyObj(
      'dataResourceFactoryMock',
      ['getFamilyMembers', 'getAvailableServices', 'postBookings']
    );
    locationMock = jasmine.createSpy('locationMock');
    module('babylonPortal', {
      dataResourceFactory: dataResourceFactoryMock,
      $location: locationMock
    });
    inject(function($controller, $q, _$rootScope_) {
      dataResourceFactoryMock.getFamilyMembers
        .and.returnValue($q.when(familyMembersResponse));
      dataResourceFactoryMock.getAvailableServices
        .and.returnValue($q.when(availableServicesResponse));
      dataResourceFactoryMock.postBookings
        .and.returnValue($q.when());
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

  it('initializes with the first time from medic set as active', function() {
    $rootScope.$digest();
    expect(ctrl.activeAppointment.time).toEqual('1458308800000');
  });

  describe('#setActiveFamilyMember()', function() {
    it('sets the active family member to number passed', function() {
      ctrl.setActiveFamilyMember(2);
      expect(ctrl.activeMember).toEqual(2);
    });
  });

  describe('#setActiveService()', function() {
    it('sets the active service to number passed', function() {
      $rootScope.$digest();
      ctrl.setActiveService(1);
      expect(ctrl.activeService).toEqual(1);
    });

    it('sets the active medic relevant to service', function() {
      $rootScope.$digest();
      ctrl.setActiveService(1);
      expect(ctrl.activeMedic.name).toEqual('A. Specialist');
    });

    it('sets the active appointment relevant to medic', function() {
      $rootScope.$digest();
      ctrl.setActiveService(1);
      expect(ctrl.activeAppointment.time).toEqual('1458308800000');
    });
  });

  describe('#completeBooking()', function() {
    it('calls postBookings on the dataResourceFactory passing the information from form', function() {
      var service = availableServicesResponse.data.availableServices;
      $rootScope.$digest();
      ctrl.completeBooking();
      expect(dataResourceFactoryMock.postBookings).toHaveBeenCalledWith(
        {'name': 'Yourself'},
        service[0],
        service[0].medics[0],
        service[0].medics[0].appointments[0]
      );
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
                { "time": "1458308800000" },
                { "time": "1458308900000" }
              ]
            },
            {
              "name": "A. N. GP",
              "appointments": [
                { "time": "1458308800000" },
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
                { "time": "1458308800000" },
                { "time": "1458308900000" }
              ]
            },
          ]
        }
      ]
    }
  };
});
