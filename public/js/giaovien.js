    /* Teacher info js */
    function teacherShowDetail() {
        var teacherInfo = document.querySelectorAll(".giaovien_container #i_btn");
        teacherInfo.forEach((teacher) => {
            teacher.onclick = function(e) {
                var tem = document.querySelector(".info-giaovien-container");
                tem.classList.add("info-giaovien--active");
                var id = $(this).data("id");
                setTeacherDetail(id)
            };
            return teacher;
        });
    }

    function setTeacherDetail(id) {
        var teacherList = document.querySelectorAll(".teacher-content");
        teacherList = Array.from(teacherList);
        let teacherSelected = teacherList.find((teacher) => {
            return $(teacher).find("#i_btn").data('id') === id;
        });
        console.log(teacherSelected);
        $('#detail-teacher-name').text($(teacherSelected).find("#teacher-name").text());
        $('#detail-teacher-school').text($(teacherSelected).find("#teacher-school").text());
        $('#detail-teacher-subject').text($(teacherSelected).find("#teacher-subject").text());
        $('#detail-teacher-degree').text($(teacherSelected).find("#teacher-degree").text());
        $('#detail-teacher-email').text($(teacherSelected).find("#teacher-email").text());
        $('#detail-teacher-follow').text($(teacherSelected).find("#teacher-follow").text());
        $('#detail-teacher-description').text($(teacherSelected).find("#teacher-des").text());
        document.getElementById("detail-teacher-image").src = ($(teacherSelected).find("#teacher-image").attr('src'));
    }

    var outTeacherInfo = document.querySelector(".close__info-giaovien-icon");
    outTeacherInfo.onclick = function(e) {
        var tem = document.querySelector(".info-giaovien-container");
        tem.classList.remove("info-giaovien--active");
    };



    /* Add teacher js */
    function addTeacher() {
        var add = document.querySelectorAll(".dropdown_giaovien .add_button");
        add.forEach((teacher) => {
            teacher.onclick = function(e) {
                var tem = document.querySelector(".add-giaovien-container");
                tem.classList.add("add-giaovien--active");
            };
            return teacher;
        });
    }

    var outAddTeacher = document.querySelector(".close__add-giaovien-icon");
    outAddTeacher.onclick = function(e) {
        var tem = document.querySelector(".add-giaovien-container");
        tem.classList.remove("add-giaovien--active");
    };

    /* Update teacher js */
    function updateTeacher() {
        var update = document.querySelectorAll(".giaovien_container #u_btn");
        update.forEach((teacher) => {
            teacher.onclick = function(e) {
                var tem = document.querySelector(".update-giaovien-container");
                tem.classList.add("update-giaovien--active");
                var id = $(this).data("id");
                setTeacherUpdate(id)
            };
            return teacher;
        });
    }

    function formatDateTeacher(date) {
        var tmpArray = date.split(' ');
        if (tmpArray[2] = 'Jan') {
            return [tmpArray[4], '01', tmpArray[3]].join('-');
        } else if (tmpArray[2] = 'Feb') {
            return [tmpArray[4], '02', tmpArray[3]].join('-');
        } else if (tmpArray[2] = 'Mar') {
            return [tmpArray[4], '03', tmpArray[3]].join('-');
        } else if (tmpArray[2] = 'Apr') {
            return [tmpArray[4], '04', tmpArray[3]].join('-');
        } else if (tmpArray[2] = 'May') {
            return [tmpArray[4], '05', tmpArray[3]].join('-');
        } else if (tmpArray[2] = 'Jun') {
            return [tmpArray[4], '06', tmpArray[3]].join('-');
        } else if (tmpArray[2] = 'Jul') {
            return [tmpArray[4], '07', tmpArray[3]].join('-');
        } else if (tmpArray[2] = 'Aug') {
            return [tmpArray[4], '08', tmpArray[3]].join('-');
        } else if (tmpArray[2] = 'Sep') {
            return [tmpArray[4], '09', tmpArray[3]].join('-');
        } else if (tmpArray[2] = 'Oct') {
            return [tmpArray[4], '10', tmpArray[3]].join('-');
        } else if (tmpArray[2] = 'Nov') {
            return [tmpArray[4], '11', tmpArray[3]].join('-');
        } else {
            return [tmpArray[4], '12', tmpArray[3]].join('-');
        }

    }

    function setTeacherUpdate(id) {
        var teacherList = document.querySelectorAll(".teacher-content");
        teacherList = Array.from(teacherList);
        let teacherSelected = teacherList.find((teacher) => {
            return $(teacher).find("#u_btn").data('id') === id;
        });
        document.getElementById('update-giaovien_ID').value = ($(teacherSelected).find("#teacher-id").text());
        document.getElementById('update-giaovien_FName').value = ($(teacherSelected).find("#teacher-fname").text());
        document.getElementById('update-giaovien_MName').value = ($(teacherSelected).find("#teacher-mname").text());
        document.getElementById('update-giaovien_LName').value = ($(teacherSelected).find("#teacher-lname").text());
        console.log($(teacherSelected).find("#teacher-birthday").text());
        document.getElementById('update-giaovien_Birthday').value = formatDateTeacher($(teacherSelected).find("#teacher-birthday").text());
        if (Number($(teacherSelected).find("#teacher-sex").text()) == 0) {
            document.getElementById('update-giaovien_Sex').value = 'Nam';
        } else {
            document.getElementById('update-giaovien_Sex').value = 'Nữ'
        }
        document.getElementById('update-giaovien_Email').value = ($(teacherSelected).find("#teacher-email").text());
        document.getElementById('update-giaovien_City').value = ($(teacherSelected).find("#teacher-city").text());
        document.getElementById('update-giaovien_District').value = ($(teacherSelected).find("#teacher-district").text());
        document.getElementById('update-giaovien_Ward').value = ($(teacherSelected).find("#teacher-ward").text());
        document.getElementById('update-giaovien_LoginName').value = ($(teacherSelected).find("#teacher-loginname").text());
        document.getElementById('update-giaovien_Password').value = ($(teacherSelected).find("#teacher-pass").text());
        document.getElementById('update-giaovien_Workplace').value = ($(teacherSelected).find("#teacher-school").text());
        document.getElementById('update-giaovien_description').value = ($(teacherSelected).find("#teacher-des").text());
    }

    var outTeacherupdate = document.querySelector(".close__update-giaovien-icon");
    outTeacherupdate.onclick = function(e) {
        var tem = document.querySelector(".update-giaovien-container");
        tem.classList.remove("update-giaovien--active");
    };





    const filter_gra = document.querySelector("#filter_grade-t");
    const filter_sub = document.querySelector("#filter_subject-t");
    const filterF = document.forms['filter-form'];

    filter_gra.onchange = function(e) {
        document.getElementById('filter_grade_form').value = filter_gra.value;
        document.getElementById('filter_subject_form').value = filter_sub.value;
        filterF.submit();
    };

    filter_sub.onchange = function(e) {
        document.getElementById('filter_grade_form').value = filter_gra.value;
        document.getElementById('filter_subject_form').value = filter_sub.value;
        filterF.submit();
    };

    filter_gra.value = document.getElementById('filter_grade_form').value;
    filter_sub.value = document.getElementById('filter_subject_form').value;


    function convertGender() {
        var gender = document.querySelector("")
    }


    document.addEventListener('DOMContentLoaded', function() {
        var btnDeleteFood = document.getElementById('delete_btn');
        teacherForm = document.forms['update-giaovien-form'];
        console.log(teacherForm);
        btnDeleteFood.onclick = function() {
            teacherForm.action = '/teacher-delete';
            teacherForm.submit();
        }
    });

    /* Call function */
    teacherShowDetail();
    addTeacher();
    updateTeacher();