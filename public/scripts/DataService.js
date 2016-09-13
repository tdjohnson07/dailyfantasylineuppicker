angular.module('dailyFantasy').factory('DataService',['$http', function($http){
  var data = {};
  data.weeklySchedule = [];
  function getSchedule(){
    $http.get('/games').then(handleSuccess, handleFailure);
  }
  function handleSuccess(res){
    // console.log("schedule sent", res);
  }
  function handleFailure(res){
    console.log(res);
  }
  function getScheduleTwo(){
    $http.get('/games/schedule').then(handleSuccessTwo, handleFailureTwo)
  }
  function handleSuccessTwo(res){
    data.schedule = res.data.schedule.Schedule;
    data.currentWeek = res.data.schedule.currentWeek;
    getWeeklySchedule();
    // console.log('schedule', data.schedule);
    // console.log('currentWeek', data.currentWeek);
  }
  function handleFailureTwo(res){
    console.log('err in retreiving schedule', res);
  }
  function getWeeklySchedule(){
    for(var i=0; i<data.schedule.length; i++){
      if(data.currentWeek === data.schedule[i].gameWeek){
        data.weeklySchedule.push(data.schedule[i]);
      }
    }
  }
  return{
    data: data,
    getSchedule: getSchedule,
    getScheduleTwo: getScheduleTwo
  }
}]);
