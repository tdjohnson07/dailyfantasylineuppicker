angular.module('dailyFantasy').factory('SortService',['$http', function($http){
  function pickPlayers(games, players){
    console.log('games',games);
    console.log('players', players);
    var picked = {};
    picked.qbs=[];
    picked.rbs=[];
    picked.wrs=[];
    picked.tes=[];
    picked.defs=[];
    picked.kicks=[];
    for(var i=0; i<players.qbs.length; i++){
      for(var j=0; j<games.length; j++){
        if((players.qbs[i].team === games[j].homeTeam || players.qbs[i].team === games[j].awayTeam) && Number(players.qbs[i].standard) > 0.5){
          picked.qbs.push(players.qbs[i]);
        }
      }
    }
    for(var i=0; i<players.rbs.length; i++){
      for(var j=0; j<games.length; j++){
        if((players.rbs[i].team === games[j].homeTeam || players.rbs[i].team === games[j].awayTeam) && Number(players.rbs[i].standard) > 0.5){
          picked.rbs.push(players.rbs[i]);
        }
      }
    }
    for(var i=0; i<players.wrs.length; i++){
      for(var j=0; j<games.length; j++){
        if((players.wrs[i].team === games[j].homeTeam || players.wrs[i].team === games[j].awayTeam) && Number(players.wrs[i].standard) > 0.5){
          picked.wrs.push(players.wrs[i]);
        }
      }
    }
    for(var i=0; i<players.tes.length; i++){
      for(var j=0; j<games.length; j++){
        if((players.tes[i].team === games[j].homeTeam || players.tes[i].team === games[j].awayTeam) && Number(players.tes[i].standard) > 0.5){
          picked.tes.push(players.tes[i]);
        }
      }
    }
    for(var i=0; i<players.defs.length; i++){
      for(var j=0; j<games.length; j++){
        if((players.defs[i].team === games[j].homeTeam || players.defs[i].team === games[j].awayTeam) && Number(players.defs[i].standard) > 0.5){
          picked.defs.push(players.defs[i]);
        }
      }
    }
    for(var i=0; i<players.kicks.length; i++){
      for(var j=0; j<games.length; j++){
        if((players.kicks[i].team === games[j].homeTeam || players.kicks[i].team === games[j].awayTeam) && Number(players.kicks[i].standard) > 0.5){
          picked.kicks.push(players.kicks[i]);
        }
      }
    }

    return picked;
  }
  function removePlayers(players){
    for (var i=0; i<players.qbs.length; i++){
      if(players.qbs[i].remove){
        players.qbs.splice(i, 1);
        i--;
      }
    }
    for (var i=0; i<players.rbs.length; i++){
      if(players.rbs[i].remove){
        players.rbs.splice(i, 1);
        i--;
      }
    }
    for (var i=0; i<players.wrs.length; i++){
      if(players.wrs[i].remove){
        players.wrs.splice(i, 1);
        i--;
      }
    }
    for (var i=0; i<players.tes.length; i++){
      if(players.tes[i].remove){
        players.tes.splice(i, 1);
        i--;
      }
    }
    for (var i=0; i<players.defs.length; i++){
      if(players.defs[i].remove){
        players.defs.splice(i, 1);
        i--;
      }
    }
    for (var i=0; i<players.kicks.length; i++){
      if(players.kicks[i].remove){
        players.kicks.splice(i, 1);
        i--;
      }
    }
  }
  function calcProjections(players){
    for(var i=0; i<players.qbs.length; i++){
      players.qbs[i].projected= (Number(players.qbs[i].standard)*.3)+(players.qbs[i].espn*.7);
    }
    for(var i=0; i<players.rbs.length; i++){
      players.rbs[i].projected= (Number(players.rbs[i].standard)*.3)+(players.rbs[i].espn*.7);
    }
    for(var i=0; i<players.wrs.length; i++){
      players.wrs[i].projected= (Number(players.wrs[i].standard)*.3)+(players.wrs[i].espn*.7);
    }
    for(var i=0; i<players.tes.length; i++){
      players.tes[i].projected= (Number(players.tes[i].standard)*.3)+(players.tes[i].espn*.7);
    }
    for(var i=0; i<players.defs.length; i++){
      players.defs[i].projected= (Number(players.defs[i].standard)*.3)+(players.defs[i].espn*.7);
    }
    for(var i=0; i<players.kicks.length; i++){
      players.kicks[i].projected= (Number(players.kicks[i].standard)*.3)+(players.kicks[i].espn*.7);
    }
  }

  return{
    pickPlayers: pickPlayers,
    removePlayers: removePlayers,
    calcProjections: calcProjections
  }
}]);
