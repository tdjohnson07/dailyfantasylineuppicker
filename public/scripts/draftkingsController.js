angular.module('dailyFantasy').controller('draftkingsController',['$http', '$location','DataService','RankingsService', function($http, $location, DataService, RankingsService){
  var vm=this;
  DataService.getScheduleTwo();
  vm.data = DataService.data;
  vm.rankings = RankingsService.data;
  vm.data.pickedGames = [];

  RankingsService.getQbs();
  RankingsService.getRbs();
  RankingsService.getWrs();
  RankingsService.getTes();
  RankingsService.getDefs();

  vm.pickedGames = function(){
    for(var i=0; i<vm.data.weeklySchedule.length; i++){
      if(vm.data.weeklySchedule[i].picked){
        vm.data.pickedGames.push(vm.data.weeklySchedule[i]);
      }
    }
    RankingsService.getPlayers();
    $location.path('/draftkingsLineup')
    console.log("RankingsService data", vm.rankings);
    console.log(DataService.data.pickedGames);
  }


}]);
