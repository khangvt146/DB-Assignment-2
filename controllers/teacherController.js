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
        res.redirect('/');

    };

    async deleteTeacher(req, res) {
        await teacherModel.deleteOneTeacher(Number(req.body.id));
        res.redirect('/');
    }
    async addTeacher(req, res) {
        console.log('hello');
        console.log(req.body);
        // await teacherModel.deleteOneTeacher(Number(req.body.id));
        // res.redirect('/');
    }


};

module.exports = new teacherController();