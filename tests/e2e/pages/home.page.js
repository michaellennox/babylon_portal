var homepage = {
  url: 'http://localhost:8080/',
  greeting: element(by.className('md-display-1')),
  bookingButton: element(by.uiSref('book')),

  get: function() {
    browser.get(this.url);
  },

  getGreeting: function() {
    return this.greeting.getText();
  },

  isBookingButtonDisplayed: function() {
    return this.bookingButton.isDisplayed();
  },

  clickBookingButton: function() {
    this.bookingButton.click();
  }
};

module.exports = homepage;
