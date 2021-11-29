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
        // if (filters.baigiang_sort_form !== " ")
        //     course = course.filter(function (c) { return c.ten.match(filters.filter_grade_form) })

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
        var course_class = req.body.ten_lop;
        var course_level = req.body.ten_level;
        if (course_class !== "" & course_level !== "") {
            let ma_trinh_do = await courseModel.getLevelID(course_class, course_level);
            req.body.ma_trinh_do = ma_trinh_do[0].ma_trinh_do;
        }
        delete req.body.ten_lop;
        delete req.body.ten_level;
        console.log(req.body);
        if (req.body.hinh_anh === "") {
            delete req.body.hinh_anh
        }
        else {
            req.body.hinh_anh = "./images/course/" + req.body.hinh_anh
        }
        // res.json(req.body)
        courseModel.createOneLesson(req.body).then(() => res.redirect('/')).catch(error => next(error));
    }

    async updateLesson(req, res, next) {
        var course_class = req.body.ten_lop;
        var course_level = req.body.ten_level;
        if (course_class !== "" & course_level !== "") {
            let ma_trinh_do = await courseModel.getLevelID(course_class, course_level);
            req.body.ma_trinh_do = ma_trinh_do[0].ma_trinh_do;
        }
        delete req.body.ten_lop;
        delete req.body.ten_level;
        req.body.hoc_phi = req.body.hoc_phi.replace('.', '');
        console.log(req.body);
        if (req.body.hinh_anh === "") {
            delete req.body.hinh_anh
        }
        else {
            req.body.hinh_anh = "./images/course/" + req.body.hinh_anh
        }
        // res.json(req.body)
        courseModel.updateOneLesson(req.body).then(() => res.redirect('/')).catch(error => next(error));
    }

    async deleteLesson(req, res) {
        courseModel.deleteOneLesson(Number(req.body.ma_kh)).then(() => res.redirect('/')).catch(error => next(error));
    }

};

module.exports = new lessonController();