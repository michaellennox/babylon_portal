exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['features/**/*.feature.js'],
  onPrepare: function () {
    require('protractor-uisref-locator')(protractor);
    var SpecReporter = require('jasmine-spec-reporter');
    jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
  },
  jasmineNodeOpts: {
    print: function() {}
  }
};
