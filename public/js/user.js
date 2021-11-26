/* Add course js */
function SetAddUser() {
    var courseAdd = document.querySelectorAll(".dropdown_hocvien .add_button");
    courseAdd.forEach((course) => {
        course.onclick = function(e) {
            var tem = document.querySelector(".add-course-container");
            tem.classList.add("add-course--active");
        };
        return course;
    });
}

var outAdd = document.querySelector(".close__add-course-icon");
outAdd.onclick = function(e) {
    var tem = document.querySelector(".add-course-container");
    tem.classList.remove("add-course--active");
};

function SetUpdateUser() {
    var courseUpdate = document.querySelectorAll("#edit_btn");
    courseUpdate.forEach((course) => {
        course.onclick = function(e) {
            var tem = document.querySelector(".update-course-container");
            tem.classList.add("update-course--active");
        };
        return course;
    });
}

var outUpdate = document.querySelector(".close__update-course-icon");
outUpdate.onclick = function(e) {
    var tem = document.querySelector(".update-course-container");
    tem.classList.remove("update-course--active");
};
/* Call function */
SetAddUser()
SetUpdateUser();