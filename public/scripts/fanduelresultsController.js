angular.modular('dailyFantasy').controller('fanduelresultsController',['SecretService', function(SecretService){
  var vm = this;
  vm.lineup = SecretService.lineup;
}])
