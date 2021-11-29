const lessonModel = require("../models/lesson")
const courseModel = require("../models/course")
const teacherModel = require("../models/teacher")
class lessonController {

    async getAllLesson(req, res) {
        // var lessonapi = require("../public/api/lesson.json");
        let lesson = await lessonModel.getAllLesson();
        let course = await courseModel.getAllCourse();
        let teacher = await teacherModel.getAllTeacher();
        res.render('baigiang', {
            title: 'Quản lý bài giảng',
            LessonArray: lesson,
            CourseArray: course,
            TeacherArray: teacher
        });
    }

    async filterLesson(req, res) {
        let lesson = await lessonModel.getAllLesson();
        let course = await courseModel.getAllCourse();
        let teacher = await teacherModel.getAllTeacher();
        const filters = req.body
        // res.json(filters)
        if (filters.baigiang_sort_form !== " ") {
            switch (Number(filters.baigiang_sort_form)) {
                case 0:
                    lesson = lesson.sort(function (a, b) {
                        if (a.upload_time === b.upload_time) return 0;
                        return a.upload_time > b.upload_time ? -1 : 1;
                    });
                    break;
                case 1:
                    lesson = lesson.sort(function (a, b) {
                        if (a.upload_time === b.upload_time) return 0;
                        return a.upload_time < b.upload_time ? -1 : 1;
                    });
                    break;
                case 2:
                    lesson = lesson.sort(function (a, b) {
                        if (a.thoi_luong === b.thoi_luong) return 0;
                        return a.thoi_luong < b.thoi_luong ? -1 : 1;
                    });
                    break;
                case 3:
                    lesson = lesson.sort(function (a, b) {
                        if (a.thoi_luong === b.thoi_luong) return 0;
                        return a.thoi_luong > b.thoi_luong ? -1 : 1;
                    });
                    break;
                default: break;
            }
        }

        if (filters.baigiang_filter_grade_form !== '')
            lesson = lesson.filter(function (c) { return c.ten_lop.match(filters.baigiang_filter_grade_form) })

        if (filters.baigiang_filter_subject_form !== '')
            lesson = lesson.filter(function (c) { return Number(c.ma_mon_hoc) === Number(filters.baigiang_filter_subject_form) })

        if (filters.baigiang_filter_giaovien_form !== '')
            lesson = lesson.filter(function (c) { return Number(c.ma_gv) === Number(filters.baigiang_filter_giaovien_form) })

        if (filters.baigiang_filter_course_form !== '')
            lesson = lesson.filter(function (c) { return Number(c.ma_kh) === Number(filters.baigiang_filter_course_form) })
        res.render('baigiang', {
            title: 'Quản lý bài giảng',
            LessonArray: lesson,
            CourseArray: course,
            TeacherArray: teacher,
            filters: filters,
            filterFlag: true
        });
    }

    async addLesson(req, res, next) {
        // res.json(req.body)
        lessonModel.createOneLesson(req.body).then(() => res.redirect('/baigiang')).catch(error => next(error));
    }

    async updateLesson(req, res, next) {
        // res.json(req.body)
        // req.id = Number(req.id)
        // req.ma_gv = Number(req.ma_gv)
        lessonModel.updateOneLesson(req.body).then(() => res.redirect('/baigiang')).catch(error => next(error));
    }

    async deleteLesson(req, res) {
        lessonModel.deleteOneLesson(req.body).then(() => res.redirect('/baigiang')).catch(error => next(error));
    }

};

module.exports = new lessonController();