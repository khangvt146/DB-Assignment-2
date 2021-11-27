/* Show course detail js */
// const moment = require("moment");


function SetShowDetail() {
    var courseSelected = document.querySelectorAll(".khoahoc_container #i_btn");
    courseSelected.forEach((course) => {
        course.onclick = function (e) {
            var tem = document.querySelector(".info-course-container");
            tem.classList.add("info__active");
            var id = $(this).data("id");
            setDetail(id)
        };
        return course;
    });
}



function setDetail(id) {
    var courseList = document.querySelectorAll(".course-content");
    courseList = Array.from(courseList);
    let courseSelected = courseList.find((course) => {
        return $(course).find("#i_btn").data('id') === id;
    });
    console.log(courseSelected);
    $('#detail-course-name').text($(courseSelected).find("#course-name").text());
    $('#detail-course-tuition').text($(courseSelected).find("#course-tuition").text());
    $('#detail-course-startDate').text($(courseSelected).find("#course-startDate").text());
    $('#detail-course-closeDate').text($(courseSelected).find("#course-closeDate").text());
    $('#detail-course-endDate').text($(courseSelected).find("#course-endDate").text());
    $('#detail-course-description').text($(courseSelected).find("#course-description").text());
    document.getElementById('detail-course-subject').value = Number($(courseSelected).find("#course-subject").text());
    console.log($(courseSelected).find("#course-class").text())
    $('#detail-course-class').text($(courseSelected).find("#course-class").text());
    $('#detail-course-level').text($(courseSelected).find("#course-level").text());

}



var outinfo = document.querySelector(".close__info-icon");
outinfo.onclick = function (e) {
    var tem = document.querySelector(".info-course-container");
    tem.classList.remove("info__active");
};

/* Add course js */
function SetAddCourse() {
    var courseAdd = document.querySelectorAll(".dropdown_khoahoc .add_button");
    courseAdd.forEach((course) => {
        course.onclick = function (e) {
            var tem = document.querySelector(".add-course-container");
            tem.classList.add("add-course--active");
        };
        return course;
    });
}

var outAdd = document.querySelector(".close__add-course-icon");
outAdd.onclick = function (e) {
    var tem = document.querySelector(".add-course-container");
    tem.classList.remove("add-course--active");
};


/* Update course js */
function SetUpdateCourse() {
    var courseUpdate = document.querySelectorAll(".khoahoc_container #u_btn");
    courseUpdate.forEach((course) => {
        course.onclick = function (e) {
            var tem = document.querySelector(".update-course-container");
            tem.classList.add("update-course--active");
            var id = $(this).data("id");
            setUpdate(id)
        };
        return course;
    });
}


function setUpdate(id) {
    var courseList = document.querySelectorAll(".course-content");
    courseList = Array.from(courseList);
    let courseSelected = courseList.find((course) => {
        return $(course).find("#u_btn").data('id') === id;
    });

    document.getElementById('update-course-name').value = ($(courseSelected).find("#course-name").text());
    document.getElementById('update-course-tuition').value = ($(courseSelected).find("#course-tuition").text());
    document.getElementById('update-course-startDate').value = formatDate($(courseSelected).find("#course-startDate").text());
    document.getElementById('update-course-submitDate').value = formatDate($(courseSelected).find("#course-submitDate").text());
    document.getElementById('update-course-endDate').value = formatDate($(courseSelected).find("#course-endDate").text());
    document.getElementById('update-course-description').value = ($(courseSelected).find("#course-description").text());
    document.getElementById('update-course-courseType').value = Number($(courseSelected).find("#course-courseType").text());
    document.getElementById('update-course-subject').value = Number($(courseSelected).find("#course-subject").text());
    console.log(document.getElementById('update-course-class').text)
    document.getElementById('update-course-class').value = $(courseSelected).find("#course-class").text();
    console.log(document.getElementById('update-course-class').text)

    document.getElementById('update-course-level').value = $(courseSelected).find("#course-level").text();

}


var outUpdate = document.querySelector(".close__update-course-icon");
outUpdate.onclick = function (e) {
    var tem = document.querySelector(".update-course-container");
    tem.classList.remove("update-course--active");
};

function formatDate(date) {
    date = date.replace(/\s+/g, '');
    var tmpArray = date.split('-');
    return [tmpArray[2], tmpArray[1], tmpArray[0]].join('-');
}

/* Call function */
SetShowDetail();
SetAddCourse();
SetUpdateCourse();