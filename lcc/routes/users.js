var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    var err = new Error('= Not Found');
    err.status = 404;
    next(err);
});

module.exports = router;
