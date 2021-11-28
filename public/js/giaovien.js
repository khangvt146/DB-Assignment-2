    /* Teacher info js */
function teacherShowDetail() {
    var teacherInfo = document.querySelectorAll(".giaovien_container #i_btn");
    teacherInfo.forEach((teacher) => {
        teacher.onclick = function(e) {
            var tem = document.querySelector(".info-giaovien-container");
            tem.classList.add("info-giaovien--active");
            var id = $(this).data("id");
            setDetail(id)
        };
        return teacher;
    });
}

function setDetail(id) {
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
        };
        return teacher;
    });
}
const filter_gra = document.querySelector("#filter_grade-t");
const filter_sub = document.querySelector("#filter_subject-t");
const filterF = document.forms['filter-form'];

filter_gra.onchange = function (e) {
    document.getElementById('filter_grade_form').value = filter_gra.value;
    document.getElementById('filter_subject_form').value = filter_sub.value;
    filterF.submit();
};

filter_sub.onchange = function (e) {
    document.getElementById('filter_grade_form').value = filter_gra.value;
    document.getElementById('filter_subject_form').value = filter_sub.value;
    filterF.submit();
};

filter_gra.value = document.getElementById('filter_grade_form').value;
filter_sub.value = document.getElementById('filter_subject_form').value;

/* Call function */
teacherShowDetail();
addTeacher();
updateTeacher();