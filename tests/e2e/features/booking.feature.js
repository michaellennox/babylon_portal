var homepage = require('../pages/home.page.js');

describe('Booking a consultation \n', function() {
  describe('Given a user has come to the Babylon portal \n', function() {
    beforeEach(function() {
      homepage.get();
    });

    it('Then user should be greeted with a welcome message \n\
        and be prompted to book a consultation', function() {
          expect(homepage.getGreeting()).toEqual('Welcome, How Can We Help You?');
    });
  });
});
