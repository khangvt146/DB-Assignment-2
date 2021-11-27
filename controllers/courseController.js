const courseModel = require("../models/course")
class courseController {

    async getAllCourse(req, res) {
        // var courseapi = require("../public/api/course.json");
        let course = await courseModel.getAllCourse();
        console.log(course)
        res.render('khoahoc', {
            title: 'Online Course Management',
            CourseArray: course,
        });
    }

};

module.exports = new courseController();