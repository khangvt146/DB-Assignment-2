const studentModel = require("../models/student")
class studentController {

    async getAllstudent(req, res) {
        // var courseapi = require("../public/api/course.json");
        let student = await studentModel.getAllStudent();
        // console.log(teacher)
        res.render('hocvien', {
            title: 'Quản lý học viên',
            UserArray: student,
        });
    }

    async filterStudent(req, res) {
        let student;
        const filters = req.body
        console.log(filters);
        if(filters.filter_sort !== ' ') {
            if(filters.filter_sort === 'ID (tăng dần)'){
                student = await studentModel.getStudentIDA();
            }else if(filters.filter_sort === 'ID (giảm dần)'){
                student = await studentModel.getStudentIDD();
            }else if(filters.filter_sort === 'Họ (tăng dần)'){
                student = await studentModel.getStudentHA();
            }else if(filters.filter_sort === 'Họ (giảm dần)'){
                student = await studentModel.getStudentHD();
            }else if(filters.filter_sort === 'Tên (tăng dần)'){
                student = await studentModel.getStudentNA();
            }else if(filters.filter_sort === 'Tên (giảm dần)'){
                student = await studentModel.getStudentND();
            }
        }else{
            student = await studentModel.getAllStudent();
        }
        if (filters.filter_student_num !== ' ')
            student = student.filter( function (c) {return c.so_KHTG === Number(filters.filter_student_num)})

        if (filters.filter_sex !== ' '){
            if(filters.filter_sex==='Nam'){
                student = student.filter( function (c) {return c.gioi_tinh == 1});
            }else{
                student = student.filter( function (c) {return c.gioi_tinh == 0});
            }
        }

        res.render('hocvien', {
            title: 'Quản lý học viên',
            UserArray: student,
            filters: filters,
            filterFlag: true
        });

    }


};

module.exports = new studentController();