var router = require('express').Router();
var request = require('request');
require('dotenv').config();
var data={};

router.get('/', function(req, res){
  request("http://www.fantasyfootballnerd.com/service/schedule/json/" + process.env.key,
  function(err, res, body){
    if(err){console.log('err getting schedule', err);}
    else{
      data.schedule=JSON.parse(body);
      console.log(data.schedule);
    }
  })
  res.sendStatus(200);
});
router.get('/schedule', function(req, res){
  res.send(data);
})
module.exports = router;
