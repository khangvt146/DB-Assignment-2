const teacherModel = require("../models/teacher")
class teacherController {

    async getAllteacher(req, res) {
        // var courseapi = require("../public/api/course.json");
        let teacher = await teacherModel.getAllTeacher();
        console.log(teacher)
        res.render('giaovien', {
            title: 'Quản lý giáo viên',
            TeacherArray: teacher,
        });
    }

};

module.exports = new teacherController();