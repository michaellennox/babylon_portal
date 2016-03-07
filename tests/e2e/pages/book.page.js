var bookpage = {
  url: 'http://localhost:8080/bookaconsultation',
  heading: element(by.className('md-display-1')),
  familyMembers: element.all(by.repeater('member in bookingCtrl.familyMembers')),

  getHeading: function() {
    return this.heading.getText();
  },

  getNumberOfFamilyMembers: function() {
    return this.familyMembers.count();
  },

  getSelectedFamilyMember: function() {
    var memberAvatars = this.familyMembers.column('member.avatar');
    var memberNames = this.familyMembers.column('member.name');
    memberAvatars.filter(function(elem, index) {
      if (elem.getAttribute('class').includes('active')) {
        return memberNames(index).getText();
      }
    });
  },

  clickFamilyMember: function(name) {
    var memberNames = this.familyMembers.column('member.name');
    memberAvatars.filter(function(elem, index) {
      return elem.getText().then(function(text) {
        return text === name;
      });
    }).first().click();
  }
};

module.exports = bookpage;
