angular.module('dailyFantasy').controller('fanduelController',['$http', '$location', function($http, $location){
  var vm=this;
  function getSchedule(){
    $http.get('/games/schedule').then(handleSuccess, handleFailure)
  }
  function handleSuccess(res){
    console.log('schedule', res);
  }
  function handleFailure(res){
    console.log('err in retreiving schedule', res);
  }
  getSchedule();
}]);
