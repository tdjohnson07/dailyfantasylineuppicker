var router = require('express').Router();
var request = require('request');
require('dotenv').config();
var data={};

router.get('/', function(req, res){
  res.send(data);
})

router.get('/qb', function(req, res){
  request('http://www.fantasyfootballnerd.com/service/weekly-rankings/json/'+process.env.key+'QB/',
  function(err, res, body){
    if(err){console.log(err);}
    else{
      data.qbs = JSON.parse(body).Rankings;
      console.log(data.qbs);
    }
  });
  res.sendStatus(200);
});
router.get('/rb', function(req, res){
  request('http://www.fantasyfootballnerd.com/service/weekly-rankings/json/'+process.env.key+'RB/',
  function(err, res, body){
    if(err){console.log(err);}
    else{
      data.rbs = JSON.parse(body).Rankings;
    }
  });
  res.sendStatus(200);
});
router.get('/wr', function(req, res){
  request('http://www.fantasyfootballnerd.com/service/weekly-rankings/json/'+process.env.key+'WR/',
  function(err, res, body){
    if(err){console.log(err);}
    else{
      data.wrs = JSON.parse(body).Rankings;
    }
  });
  res.sendStatus(200);
});
router.get('/te', function(req, res){
  request('http://www.fantasyfootballnerd.com/service/weekly-rankings/json/'+process.env.key+'TE/',
  function(err, res, body){
    if(err){console.log(err);}
    else{
      data.tes = JSON.parse(body).Rankings;
    }
  });
  res.sendStatus(200);
});
router.get('/def', function(req, res){
  request('http://www.fantasyfootballnerd.com/service/weekly-rankings/json/'+process.env.key+'DEF/',
  function(err, res, body){
    if(err){console.log(err);}
    else{
      data.defs = JSON.parse(body).Rankings;
    }
  });
  res.sendStatus(200);
});
router.get('/k', function(req, res){
  request('http://www.fantasyfootballnerd.com/service/weekly-rankings/json/'+process.env.key+'K/',
  function(err, res, body){
    if(err){console.log(err);}
    else{
      data.kicks = JSON.parse(body).Rankings;
    }
  });
  res.sendStatus(200);
});

module.exports = router;
