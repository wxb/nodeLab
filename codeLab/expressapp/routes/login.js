var express = require('express');
var router = express.Router();

/* GET login listing. */
router.get('/', function(req, res, next) {
    res.render('login');
});

/* POST login listing. */
router.post('/', function(req, res, next) {
    var user = {
        username: 'admin',
        password: 'admin'
    }
    if(req.body.username==user.username&&req.body.password==user.password)
    {
        req.session.user = user;
       res.send(200);
    }else{
        req.session.error = "用户名或密码不正确";
       res.send( 404 );
    }
    //res.send({status: 0, msg:"用户名称为：" + req.body.username});
});

module.exports = router;
