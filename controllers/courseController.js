const courseModel = require("../models/course")
class courseController {

    async getAllCourse(req, res) {
        // var courseapi = require("../public/api/course.json");
        let course = await courseModel.getAllCourse();
        res.render('khoahoc', {
            title: 'Quản lý bài giảng',
            CourseArray: course,
            filters: {}
        });
    }

    async filterCourse(req, res) {
        // var courseapi = require("../public/api/course.json");
        let course = await courseModel.getAllCourse();
        console.log(req.body)
        res.render('khoahoc', {
            title: 'Quản lý bài giảng',
            CourseArray: course,
            filters: req.body
        });
    }

};

module.exports = new courseController();