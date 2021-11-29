const teacherModel = require("../models/teacher")
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var ID = 0;

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
    };

    async updateTeacher(req, res, next) {
        console.log(req.body);
        var  noicongtac= req.body.noi_cong_tac;
        var  mota = req.body.mo_ta;
        var id_nd = req.body.id;
        delete req.body.noi_cong_tac;
        delete req.body.mo_ta
        if(req.body.gioi_tinh == "Nam"){
            req.body.gioi_tinh = 1;
        }{
            req.body.gioi_tinh = 0;
        }
        req.body.id = Number(req.body.id);
        console.log(req.body);
        await teacherModel.updateOneTeacher(req.body);
        await teacherModel.updateTeacher(Number(id_nd), {noi_cong_tac:noicongtac, mo_ta:mota})
        res.redirect('/giaovien');

    };

    async deleteTeacher(req, res) {
        await teacherModel.deleteOneTeacher(Number(req.body.id));
        res.redirect('/giaovien');
    }
    async addTeacher(req, res) {
        console.log(req.body);

        ID = getRndInteger(2000, 3000);
            while (true) {
                var check = false;
                await teacherModel.checkID(ID).then(function(result) {
                    if (result.length > 0) {
                        ID = getRndInteger(2000, 3000);
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
        if(req.body.gioi_tinh == "Nam"){
            req.body.gioi_tinh = 1;
        }{
            req.body.gioi_tinh = 0;
        }
        var id = req.body.id;
        var noi_cong_tac = req.body.noi_cong_tac;
        var mo_ta = req.body.mo_ta;
        var ngay_bat_dau = new Date().toISOString().split('T')[0];
        console.log(ngay_bat_dau);
        var hesoluong = req.body.he_so_luong;
        var linkanh = './images/teacher/teacher_'+ String(getRndInteger(1, 119)) + '.png'

        delete req.body.noi_cong_tac;
        delete req.body.mo_ta;
        delete req.body.he_so_luong;
        delete req.body.ngay_bat_dau;
        console.log(req.body);
        await teacherModel.addOneUser(req.body);
        await teacherModel.addOneTeacher({id:id,noi_cong_tac:noi_cong_tac, ngay_bat_dau_day:ngay_bat_dau, he_so_luong:hesoluong, hinh_anh: linkanh, mo_ta:mo_ta});
        res.redirect('/giaovien');
    }


};

module.exports = new teacherController();