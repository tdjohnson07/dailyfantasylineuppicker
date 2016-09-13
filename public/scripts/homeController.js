angular.module('dailyFantasy').controller('homeController',['$http', '$location', function($http, $location){
  var vm=this;
  function getSchedule(){
    $http.get('/games').then(handleSuccess, handleFailure);
  }
  function handleSuccess(res){
    console.log("schedule sent", res);
  }
  function handleFailure(res){
    console.log(res);
  }
  vm.fanduel = function(){
    $location.path('/fanduel');
  }
  vm.draftkings = function(){
    $location.path('/draftkings')
  }
  getSchedule();
}]);
