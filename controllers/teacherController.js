const teacherModel = require("../models/teacher")
class teacherController {

    async getAllteacher(req, res) {
        // var courseapi = require("../public/api/course.json");
        let teacher = await teacherModel.getAllTeacher();
        // console.log(teacher)
        res.render('giaovien', {
            title: 'Quản lý giáo viên',
            TeacherArray: teacher,
        });
    }

    async filterTeacher(req, res) {
        let teacher = await teacherModel.getFullTeacher();
        console.log(teacher);
        const filters = req.body
        if (filters.filter_grade_form !== ' ')
            teacher = teacher.filter( function (c) {return c.ten_lop.match(filters.filter_grade_form)})

        if (filters.filter_subject_form !== ' ')
            teacher = teacher.filter( function (c) {return c.ten_mon.match(filters.filter_subject_form)})


        res.render('giaovien', {
            title: 'Quản lý giáo viên',
            TeacherArray: teacher,
            filters: filters,
            filterFlag: true
        });

    }


};

module.exports = new teacherController();