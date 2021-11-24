var express = require('express');
var router = express.Router();
var courseapi = require("../public/api/course.json");
var teacherapi = require("../public/api/teacher.json");
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('khoahoc', {
        title: 'Online Course Management',
        CourseArray: courseapi,
    });
});

router.get('/giaovien', function(req, res, next) {
    res.render('giaovien', {
        title: 'Online Course Management',
        TeacherArray: teacherapi,
    });
});

module.exports = router;