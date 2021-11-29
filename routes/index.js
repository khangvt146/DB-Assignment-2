var express = require('express');
var router = express.Router();
var teacherapi = require("../public/api/teacher.json");
var userapi = require("../public/api/user.json");
const courseController = require('../controllers/courseController')
const teacherController = require('../controllers/teacherController')
const studentController = require('../controllers/studentController')
const lessonController = require('../controllers/lessonController')

// ROUTE COURSE
router.get('/', courseController.getAllCourse);
router.post('/course-filter', courseController.filterCourse);
router.post('/course-add', courseController.addCourse);
router.post('/course-update', courseController.updateCourse);
router.post('/course-delete', courseController.deleteCourse);


router.get('/giaovien', teacherController.getAllteacher);
router.post('/teacher-filter', teacherController.filterTeacher);

router.get('/hocvien', studentController.getAllstudent);
router.post('/student-filter', studentController.filterStudent);


// ROUTE LESSON
router.get('/baigiang', lessonController.getAllLesson);



module.exports = router;