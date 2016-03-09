var bookpage = {
  url: 'http://localhost:8080/bookaconsultation',
  heading: element(by.className('md-display-1')),
  familyMembers: element.all(by.repeater('familyMember in bookingForm.familyMembers'))
    .filter(function(elem, index) {
      return index % 2 === 0;
    }),
  activeMember: element(by.className('activemember')),
  services: element.all(by.repeater('service in bookingForm.availableServices'))
    .filter(function(elem, index) {
      return index % 2 === 0;
    }),
  activeService: element(by.className('activeservice')),
  medicSelector: element(by.className('md-select-value')),
  medicList: element.all(by.repeater('medic in bookingForm.medics')),

  getHeading: function() {
    return this.heading.getText();
  },

  getNumberOfFamilyMembers: function() {
    return this.familyMembers.count();
  },

  getActiveFamilyMember: function() {
    return this.activeMember.getText();
  },

  clickFamilyMember: function(name) {
    this.familyMembers.filter(function(elem, index) {
      return elem.getText().then(function(text) {
        return text === name;
      });
    }).first().click();
  },

  getNumberOfServices: function() {
    return this.services.count();
  },

  getActiveService: function() {
    return this.activeService.getText();
  },

  clickService: function(name) {
    this.services.filter(function(elem, index) {
      return elem.getText().then(function(text) {
        return text === name;
      });
    }).first().click();
  },

  getSelectedMedic: function() {
    this.medicSelector.getText();
  },

  clickMedicSelection: function() {
    this.medicSelector.click();
  },

  selectMedic: function(name) {
    this.medicList.filter(function(elem, index) {
      return elem.getText().then(function(text) {
        return text === name;
      });
    }).first().click();
  }
};

module.exports = bookpage;
