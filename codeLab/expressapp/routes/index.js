var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
  //res.render('index', { title: 'Express' });
});

router.get('/logout', function(req, res, next) {
    req.session.user = null;
    req.session.error = null;
    res.redirect('/');
});

module.exports = router;
