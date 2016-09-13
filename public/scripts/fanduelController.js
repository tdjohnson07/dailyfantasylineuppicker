angular.module('dailyFantasy').controller('fanduelController',['$http', '$location','DataService','RankingsService', function($http, $location, DataService, RankingsService){
  var vm=this;
  vm.data = DataService.data;
  vm.rankings = RankingsService.data;
  vm.data.pickedGames = [];

  RankingsService.getQbs();
  RankingsService.getRbs();
  RankingsService.getWrs();
  RankingsService.getTes();
  RankingsService.getDefs();
  RankingsService.getKs();
  DataService.getScheduleTwo();
  console.log('dataservice data', vm.data);

  vm.pickedGames = function(){
    for(var i=0; i<vm.data.weeklySchedule.length; i++){
      if(vm.data.weeklySchedule[i].picked){
        vm.data.pickedGames.push(vm.data.weeklySchedule[i])
      }
    }
    RankingsService.getPlayers();
    console.log("RankingsService data", vm.rankings);
    console.log(DataService.data.pickedGames);
  }
}]);
