babylonPortal.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  var templateBase = '../views/partials/';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: templateBase + 'home.html'
    })
    .state('book', {
      url: '/bookaconsultation',
      templateUrl: templateBase + 'book.html'
    });

  $locationProvider.html5Mode(true);
});
