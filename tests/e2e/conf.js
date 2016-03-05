exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['features/**/*.feature.js'],
  onPrepare: function () {
    require('protractor-uisref-locator')(protractor);
  }
};
