var bookpage = {
  url: 'http://localhost:8080/bookaconsultation',
  heading: element(by.className('md-display-1')),

  getHeading: function() {
    return this.heading.getText();
  },
};

module.exports = bookpage;
