
angular
  .module('bookingbug')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'js/views/home.html',
      controller: 'BookingsHomeCtrl as bookingsHome'
    })
    .state('bookingsIndex', {
      url: '/companies',
      templateUrl: 'js/views/bookings/index.html',
      controller: 'BookingsIndexCtrl as bookingsIndex'
    })
    .state('bookingsShow', {
      url: '/bookings/:id/:name',
      templateUrl: 'js/views/bookings/show.html',
      controller: 'BookingsShowCtrl as bookingsShow'
    });
  $urlRouterProvider.otherwise('/home');
}
