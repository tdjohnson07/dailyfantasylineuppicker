angular.modular('dailyFantasy').controller('draftkingsLineupController', ['$http','$location', 'DataService', 'RankingsService', function($http, $location, DataService, RankingsService){
  var vm = this;
  vm.data = DataService.data;
  vm.rankings = RankingsService.data;
}])
