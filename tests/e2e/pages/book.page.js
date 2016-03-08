var bookpage = {
  url: 'http://localhost:8080/bookaconsultation',
  heading: element(by.className('md-display-1')),
  familyMembers: element.all(by.repeater('familyMember in bookingForm.familyMembers'))
    .filter(function(elem, index) {
      return index % 2 === 0;
    }),
  activeMember: element.all(by.className('activemember')).first(),

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
  }
};

module.exports = bookpage;
