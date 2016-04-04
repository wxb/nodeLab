var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(req.query);
    console.info(req.query.n);
    res.send([1,2,3]); //[1,2,3]
  //res.send('respond with a resource');
});

module.exports = router;
