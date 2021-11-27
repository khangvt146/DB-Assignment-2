var express = require('express');
var router = express.Router();
var teacherapi = require("../public/api/teacher.json");
var userapi = require("../public/api/user.json");
var lessonapi = require("../public/api/lesson.json");
const courseController = require('../controllers/courseController')


// ROUTE COURSE
router.get('/', courseController.getAllCourse);
router.post('/course/filter', courseController.filterCourse);

router.get('/giaovien', function(req, res, next) {
    res.render('giaovien', {
        title: 'Quản lý giáo viên',
        TeacherArray: teacherapi,
    });
});

router.get('/hocvien', function(req, res, next) {
    res.render('hocvien', {
        title: 'Quán lý học viên',
        UserArray: userapi,
    });
});

router.get('/baigiang', function(req, res, next) {
    res.render('baigiang', {
        title: 'Quản lý bài giảng',
        LessonArray: lessonapi,
    });
});

module.exports = router;