var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var url = require('url');


var model = require('../../model/clicksModel');


/* GET create click entry. */
router.get('/add', function(req, res, next) {
    //console.log(req);
    var regClick = new model.ClickModel({
        userId: req.query.userId,
        url: req.query.url,
        clickEvent:null
    })
    regClick.save(function(err, regClick){
      console.log('save');
      if(err)
      {
        console.log(err);
      }
    });
    res.json({
    });
});

module.exports = router;
