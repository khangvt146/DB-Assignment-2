var express = require('express');
var router = express.Router();
var teacherapi = require("../public/api/teacher.json");
var userapi = require("../public/api/user.json");
var lessonapi = require("../public/api/lesson.json");
const courseController = require('../controllers/courseController')
const teacherController = require('../controllers/teacherController')
const studentController = require('../controllers/studentController')


// ROUTE COURSE
router.get('/', courseController.getAllCourse);
router.post('/course-filter', courseController.filterCourse);

router.get('/giaovien', teacherController.getAllteacher);
router.post('/teacher-filter', teacherController.filterTeacher);

router.get('/hocvien', studentController.getAllstudent);
router.post('/student-filter', studentController.filterStudent);


router.get('/baigiang', function(req, res, next) {
    res.render('baigiang', {
        title: 'Quản lý bài giảng',
        LessonArray: lessonapi,
    });
});



module.exports = router;