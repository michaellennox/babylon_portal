var homepage = require('../pages/home.page.js');
var bookpage = require('../pages/book.page.js');

describe('Booking a Consultation', function() {
  describe('Given a user has come to the Babylon portal', function() {
    beforeEach(function() {
      homepage.get();
    });

    it('The user should be greeted with a welcome message ' +
       'and be prompted to book a consultation', function() {
          expect(homepage.getHeading()).toEqual('Welcome, How Can We Help You?');
          expect(homepage.isBookingButtonDisplayed()).toBeTruthy();
    });
  });

  describe('Given a user has clicked the button to open the booking form', function() {
    beforeEach(function() {
      homepage.get();
      homepage.clickBookingButton();
    });

    it('The user should be routed to the page containing the booking form ' +
       'and see a message suggesting they Book a Consultation', function() {
          expect(browser.getCurrentUrl()).toEqual(bookpage.url);
          expect(bookpage.getHeading()).toEqual('Book a Consultation');
    });

    it('The user should be able to select the family member who needs a consultation', function() {
      expect(bookpage.getNumberOfFamilyMembers()).toEqual(2);
      expect(bookpage.getActiveFamilyMember()).toEqual('Yourself');
      bookpage.clickFamilyMember('Sarah');
      expect(bookpage.getActiveFamilyMember()).toEqual('Sarah');
    });

    it('The user should be able to select the service the require', function() {
      expect(bookpage.getNumberOfServices()).toEqual(4);
      expect(bookpage.getActiveService()).toEqual('GP');
      bookpage.clickService('Specialist');
      expect(bookpage.getActiveService()).toEqual('Specialist');
    });
  });
});
