var express = require('express');
var router = express.Router();
const fs = require('fs');
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
router.get('/', async function(req, res, next) {
    res.render('index', {
        title: 'Express Services'
    });
});

// router.post("/submit_user", UserCtrl.submitUser);
// router.post("/authentication", UserCtrl.authentication);

// router.post("/get_date_data", EarningsCtrl.getList);
// router.post("/submit_earnings", EarningsCtrl.submitDate);
// router.post("/remove_earnings", EarningsCtrl.delete);

module.exports = router;