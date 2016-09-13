angular.module('dailyFantasy').factory('RankingsService',['$http', function($http){
  var data = {};
  function getQbs(){
    $http.get('/rankings/qb').then(handleSuccess, handleFailure);
  }
  function getRbs(){
    $http.get('/rankings/rb').then(handleSuccess, handleFailure);
  }
  function getWrs(){
    $http.get('/rankings/wr').then(handleSuccess, handleFailure);
  }
  function getTes(){
    $http.get('/rankings/te').then(handleSuccess, handleFailure);
  }
  function getDefs(){
    $http.get('/rankings/def').then(handleSuccess, handleFailure);
  }
  function getKs(){
    $http.get('/rankings/k').then(handleSuccess, handleFailure);
  }
  function getPlayers(){
    $http.get('/rankings').then(rankingsSuccess, handleFailure)
  }
  function rankingsSuccess(res){
    data.rankings = res;
    console.log(data.rankings);
  }
  function handleSuccess(res){

  }
  function handleFailure(res){

  }
  return{
    data: data,
    getQbs: getQbs,
    getRbs: getRbs,
    getWrs: getWrs,
    getTes: getTes,
    getDefs: getDefs,
    getKs: getKs,
    getPlayers: getPlayers
  }
}]);
