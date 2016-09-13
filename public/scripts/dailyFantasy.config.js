angular.module('dailyFantasy').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
  .when('/',{
    templateUrl: '/views/home.html',
    controller: 'homeController',
    controllerAs: 'home'
  })
  .when('/fanduel',{
    templateUrl: '/views/fanduel.html',
    controller: 'fanduelController',
    controllerAs: 'fan'
  })
  .when('/draftkings',{
    templateUrl: '/views/draftkings.html',
    controller: 'draftkingsController',
    controllerAs: 'draftkings'
  })
  $locationProvider.html5Mode(true);
}]);
