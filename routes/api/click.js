var express = require('express');
var router = express.Router();

/* GET create click entry. */
router.get('/add', function(req, res, next) {
    res.json({
        message: 'click created'
    });
});

module.exports = router;