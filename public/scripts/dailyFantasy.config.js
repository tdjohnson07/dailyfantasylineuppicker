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
  .when('/fanduelLineup',{
    templateUrl: '/views/fanduelLineup.html',
    controller: 'fanduelLineupController',
    controllerAs: 'fdlu'
  })
  $locationProvider.html5Mode(true);
}]);
