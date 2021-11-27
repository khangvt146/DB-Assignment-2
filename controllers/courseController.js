const courseModel = require("../models/course")
class courseController {

    async getAllCourse(req, res) {
        let course = await courseModel.getAllCourse();
        res.render('khoahoc', {
            title: 'Quản lý bài giảng',
            CourseArray: course,
        });
    }

    async filterCourse(req, res) {
        let course = await courseModel.getAllCourse();
        const filters = req.body
        if (filters.filter_grade_form !== ' ')
            course = course.filter( function (c) {return c.ten.match(filters.filter_grade_form)})

        if (filters.filter_subject_form !== ' ')
            course = course.filter( function (c) {return c.ma_mon_hoc === Number(filters.filter_subject_form)})

        if (filters.filter_type_form !== ' ')
            course = course.filter( function (c) {return Number(c.kieu_kh) === Number(filters.filter_type_form)})

        if (filters.filter_gradeType_form !== ' ')
            course = course.filter( function (c) {return c.loai_trinh_do.match(filters.filter_gradeType_form)})

        res.render('khoahoc', {
            title: 'Quản lý bài giảng',
            CourseArray: course,
            filters: filters,
            filterFlag: true
        });
    }

};

module.exports = new courseController();