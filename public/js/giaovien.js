/* Teacher info js */
function teacherShowDetail() {
    var teacherInfo = document.querySelectorAll(".giaovien_container #i_btn");
    teacherInfo.forEach((teacher) => {
        teacher.onclick = function(e) {
            var tem = document.querySelector(".info-giaovien-container");
            tem.classList.add("info-giaovien--active");
            var info = teacher.innerText.split("\n");
            console.log(info[0]);
            // SetDetail(info[0]);
        };
        return teacher;
    });
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

var outUpdateTeacher = document.querySelector(".close__update-giaovien-icon");
outUpdateTeacher.onclick = function(e) {
    var tem = document.querySelector(".update-giaovien-container");
    tem.classList.remove("update-giaovien--active");
};


/* Call function */
teacherShowDetail();
addTeacher();
updateTeacher();