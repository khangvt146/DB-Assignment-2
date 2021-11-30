const studentModel = require("../models/student")

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var ID = 0;


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

        

    };


    async updateStudent(req, res, next) {
        console.log(req.body);
        var  truonghoc= req.body.truong_hoc;
        var id_nd = req.body.id;
        delete req.body.truong_hoc;
        if(req.body.gioi_tinh == "Nam"){
            req.body.gioi_tinh = 1;
        }{
            req.body.gioi_tinh = 0;
        }
        req.body.id = Number(req.body.id);
        await studentModel.updateOneStudent(req.body);
        await studentModel.updateStudent(Number(id_nd), {truong_hoc: truonghoc})
        res.redirect('/hocvien');

    };

    async deleteStudent(req, res) {
        console.log(req.body)
        await studentModel.deleteOneStudent(Number(req.body.id));
        res.redirect('/hocvien');
    }


    async addStudent(req, res) {
        console.log('hello');
        console.log(req.body);
        ID = getRndInteger(1, 1000);
            while (true) {
                var check = false;
                await studentModel.checkID(ID).then(function(result) {
                    if (result.length > 0) {
                        ID = getRndInteger(1, 1000);
                    } else {
                        check = true;
                    }
                });
                if (check) {
                    break;
                }
            }
        req.body.id = ID;
        console.log(ID);
        var  truonghoc = req.body.truong_hoc;
        delete req.body.truong_hoc;
        req.body.gioi_tinh = Number(req.body.gioi_tinh);
        await studentModel.addOneStudent(req.body);
        await studentModel.addStudent({ma_hv:ID, truong_hoc: truonghoc});
        res.redirect('/hocvien');
    }



};

module.exports = new studentController();