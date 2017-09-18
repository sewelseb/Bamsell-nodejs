var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ClickModel = require('../model/click');

/* GET create click entry. */
router.get('/add', function(req, res, next) {
    console.log(req);
    var regClick = new ClickModel({userId:1, clickEvent:null})
    regClick.save(function(err, regClick){
      console.log('save');
      if(err)
      {
        console.log(err);
      }
    });
    res.json({
        message: 'click created'
    });
});

module.exports = router;
