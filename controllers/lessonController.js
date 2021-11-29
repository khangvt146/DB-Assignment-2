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
        let course = await courseModel.getAllLesson();
        const filters = req.body
        if (filters.filter_grade_form !== ' ')
            course = course.filter(function (c) { return c.ten.match(filters.filter_grade_form) })

        if (filters.filter_subject_form !== ' ')
            course = course.filter(function (c) { return c.ma_mon_hoc === Number(filters.filter_subject_form) })

        if (filters.filter_type_form !== ' ')
            course = course.filter(function (c) { return Number(c.kieu_kh) === Number(filters.filter_type_form) })

        if (filters.filter_gradeType_form !== ' ')
            course = course.filter(function (c) { return c.loai_trinh_do.match(filters.filter_gradeType_form) })

        res.render('khoahoc', {
            title: 'Quản lý bài giảng',
            LessonArray: course,
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