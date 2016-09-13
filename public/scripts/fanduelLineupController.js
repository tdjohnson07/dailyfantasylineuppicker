angular.module('dailyFantasy').controller('fanduelLineupController', ['$http','DataService','RankingsService','SortService','SecretService', function($http, DataService, RankingsService, SortService, SecretService){
  var vm = this;
  vm.espn = true;
  vm.games = DataService.data.pickedGames;
  vm.players = RankingsService.data;
  vm.pickedPlayers = SortService.pickPlayers(vm.games, vm.players.rankings);
  console.log(vm.pickedPlayers);

  vm.makeprojections = function(){
    SortService.removePlayers(vm.pickedPlayers);
    SortService.calcProjections(vm.pickedPlayers);
    console.log(vm.pickedPlayers);
    vm.espn = false;
  }
  vm.calcLineup = function(){
    SecretService.calcLineup(vm.pickedPlayers);
  }
  // console.log('players', vm.players);
  // console.log('games', vm.games);
}]);
