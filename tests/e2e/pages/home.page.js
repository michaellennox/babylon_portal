var homepage = {
  url: 'http://localhost:8080/',
  greeting: element(by.css('h1')),

  get: function() {
    browser.get(this.url)
  },

  getGreeting: function() {
    return this.greeting.getText();
  }
};

module.exports = homepage;
