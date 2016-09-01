var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/heros', {
      templateUrl: '/views/heros.html',
      controller: "HeroController"
    })
    .when('/settings', {
      templateUrl: '/views/settings.html',
      controller: "SettingsController"
    })
    .otherwise({
      redirectTo: 'heros'
    })
}]);
