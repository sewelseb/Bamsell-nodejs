var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var url = require('url');



var ClickModel = require('../../model/clicksModel').ClickModel;

//route: /api/click/


/* GET create click entry. */
router.get('/add', function(req, res, next) {
    //console.log(req);
    var userId = req.query.userId;
    if(userId == 'undefined')
    {
        userId = null;
    }
    var regClick = new ClickModel({
        userId: userId,
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

router.get('/count', function(req, res, next) {


    ClickModel.count({}, function (err, count) {
        //console.log(count);
        res.jsonp({
            'numberOfClicks': count
        });
    });


});

module.exports = router;
