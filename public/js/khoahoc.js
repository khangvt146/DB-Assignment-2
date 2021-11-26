/* Show course detail js */
function SetShowDetail() {
    var courseSelected = document.querySelectorAll(".khoahoc_container #i_btn");
    courseSelected.forEach((course) => {
        course.onclick = function(e) {
            var tem = document.querySelector(".info-course-container");
            tem.classList.add("info__active");
            var info = course.innerText.split("\n");
        };
        return course;
    });
}

var outinfo = document.querySelector(".close__info-icon");
outinfo.onclick = function(e) {
    var tem = document.querySelector(".info-course-container");
    tem.classList.remove("info__active");
};

/* Add course js */
function SetAddCourse() {
    var courseAdd = document.querySelectorAll(".dropdown_khoahoc .add_button");
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


/* Update course js */
function SetUpdateCourse() {
    var courseUpdate = document.querySelectorAll(".khoahoc_container #u_btn");
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
SetShowDetail();
SetAddCourse();
SetUpdateCourse();