angular.module('dailyFantasy').controller('draftkingsController',['$http', '$location','DataService', function($http, $location, DataService){
  var vm=this;
  DataService.getScheduleTwo();
  vm.data = DataService.data;
  console.log(vm.data);
}]);
