const courseModel = require("../models/course")
class courseController {

    async getAllCourse(req, res) {
        var courseapi = require("../public/api/course.json");
        res.render('khoahoc', {
            title: 'Online Course Management',
            CourseArray: courseapi,
        });
    }

};

module.exports = new courseController();