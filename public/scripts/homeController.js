angular.module('dailyFantasy').controller('homeController',['$http', '$location', 'DataService', function($http, $location, DataService){
  var vm=this;
  vm.fanduel = function(){
    $location.path('/fanduel');
  }
  vm.draftkings = function(){
    $location.path('/draftkings')
  }
  DataService.getSchedule();
}]);
