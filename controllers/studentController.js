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
            }else if(filters.filter_sort === 'Năm sinh (tăng dần)'){
                student = await studentModel.getStudentNSA();
            }else if(filters.filter_sort === 'Năm sinh (giảm dần)'){
                student = await studentModel.getStudentNSD();
            }
        }else{
            student = await studentModel.getAllStudent();
        }
        if (filters.filter_student_num !== ' ')
            if(filters.filter_student_num === '0 - 2'){
                student = student.filter( function (c) {return c.so_KHTG >=0 && c.so_KHTG <=2});
            }else if(filters.filter_student_num === '3 - 5'){
                student = student.filter( function (c) {return c.so_KHTG >=3 && c.so_KHTG <=5})
            }else if(filters.filter_student_num === '5 - 8'){
                student = student.filter( function (c) {return c.so_KHTG >=6 && c.so_KHTG <=8})
            }else{
                student = student.filter( function (c) {return c.so_KHTG >8})
            }

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