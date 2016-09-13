var express = require('express');
var path = require('path');
var games = require('./routes/games');
var rankings = require('./routes/rankings');
var app = express();

app.use(express.static('public'));

app.use('/games', games);
app.use('/rankings', rankings);

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
})

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log("listening on port", port);
})
