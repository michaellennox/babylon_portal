var homepage = require('../pages/home.page.js');

describe('Booking a consultation', function() {
  describe('When a user comes to the site', function() {
    beforeEach(function() {
      homepage.get();
    });

    it('Then user should be greeted\
        and be prompted to book a consultation', function() {
          expect(hompage.getGreeting()).toEqual('Welcome, How Can We Help You?');
    });
  });
});
