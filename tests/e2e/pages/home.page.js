var homepage = {
  url: 'http://localhost:8080/',
  heading: element(by.className('md-display-1')),
  bookingButton: element(by.uiSref('book')),

  get: function() {
    browser.get(this.url);
  },

  getHeading: function() {
    return this.heading.getText();
  },

  isBookingButtonDisplayed: function() {
    return this.bookingButton.isDisplayed();
  },

  clickBookingButton: function() {
    this.bookingButton.click();
  }
};

module.exports = homepage;
