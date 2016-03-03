babylonPortal.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  var templateBase = '../views/partials/'
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: templateBase + 'home.html'
    })
    .state('book', {
      url: '/bookaconsultation',
      templateUrl: templateBase + 'book.html'
    })
});
