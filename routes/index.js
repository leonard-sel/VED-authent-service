var express = require('express');
var router = express.Router();
const fs = require('fs');
var bcrypt = require('bcrypt');
// const UserCtrl = require('../Controlers/UserCtrl');
// var db = require("../database/mongo");

/**
 * Trace function can log in fo to debug
 * @param {object} obj 
 * @param {message} msg 
 */
function trace(obj, msg) {
    if (undefined == msg || null == msg || "" == msg) msg = "\ndebug log:";
    console.log(msg);
    console.log(obj);
}
//--------------Auto load controlser----------------------------
// try {
//     var pathCtrl = __dirname + "/../Controlers";
//     var files = fs.readdirSync(pathCtrl);
//     files.forEach(file => {
//         var name = file.substr(0, file.length - 3);
//         var pathName = "../Controlers/" + name;
//         eval(name + "=" + "require('" + pathName + "')(db)")
//     });
// } catch (exc) {
//     trace(exc);
// }
//==============================================================
/* GET home page. */
router.get('/', async function (req, res, next) {
    res.render('index', {
        title: 'Express Services'
    });
});

router.post('/change', async function (req, res, next) {
    const text = req.body.text;
    const salt = bcrypt.genSaltSync(11);
    const text_hash = bcrypt.hashSync(text, salt);
    return res.json({ received: text_hash });
});

router.get('/test', async function (req, res, next) {
    return res.json({
        message: 'Test route is working!',
        timestamp: new Date().toISOString()
    });
});

// Add 404 handler - this should be the last route
router.use(function (req, res, next) {
    res.status(404).render('404', {
        title: '404 - Page Not Found',
        message: 'The page you are looking for does not exist.'
    });
});

module.exports = router;