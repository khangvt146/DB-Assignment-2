var express = require('express');
var router = express.Router();
var courseapi = require("../public/api/course.json");
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('khoahoc', {
        title: 'Online Course Management',
        CourseArray: courseapi,
    });
});

module.exports = router;