/* Show course detail js */
// const moment = require("moment");


function SetShowDetail() {
    var courseSelected = document.querySelectorAll(".khoahoc_container #i_btn");
    courseSelected.forEach((course) => {
        course.onclick = function (e) {
            var tem = document.querySelector(".info-course-container");
            tem.classList.add("course_info__active");
            var course_id = $(this).data("id");
            setDetailCourse(course_id);
        };
        return course;
    });
}



function setDetailCourse(id) {
    var courseList = document.querySelectorAll(".course-content");
    courseList = Array.from(courseList);
    console.log(id)
    let courseSelected = courseList.find((course) => {
        return $(course).find("#i_btn").data('id') === id;
    });
    $('#detail-course-name').text($(courseSelected).find("#course-name").text());
    $('#detail-course-tuition').text($(courseSelected).find("#course-tuition").text());
    $('#detail-course-startDate').text($(courseSelected).find("#course-startDate").text());
    $('#detail-course-submitDate').text($(courseSelected).find("#course-submitDate").text());
    $('#detail-course-endDate').text($(courseSelected).find("#course-endDate").text());
    $('#detail-course-description').text($(courseSelected).find("#course-description").text());
    $('#detail-course-subject').text(getSubjectCourse(Number($(courseSelected).find("#course-subject").text())));
    $('#detail-course-class').text($(courseSelected).find("#course-class").text());
    $('#detail-course-level').text($(courseSelected).find("#course-level").text());
    document.getElementById("detail-course-image").src = ($(courseSelected).find("#course-image").attr('src'));
    $('#detail-course-teacher').text($(courseSelected).find("#course-teacher").text());

}



var outinfo = document.querySelector(".close__info-icon");
outinfo.onclick = function (e) {
    var tem = document.querySelector(".info-course-container");
    tem.classList.remove("course_info__active");
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
    document.getElementById('update-course-courseID').value = ($(courseSelected).find("#course-id").text());
    document.getElementById('update-course-name').value = ($(courseSelected).find("#course-name").text());
    document.getElementById('update-course-tuition').value = ($(courseSelected).find("#course-tuition").text());
    document.getElementById('update-course-startDate').value = formatDate($(courseSelected).find("#course-startDate").text());
    document.getElementById('update-course-submitDate').value = formatDate($(courseSelected).find("#course-submitDate").text());
    document.getElementById('update-course-endDate').value = formatDate($(courseSelected).find("#course-endDate").text());
    document.getElementById('update-course-description').value = ($(courseSelected).find("#course-description").text());
    document.getElementById('update-course-courseType').value = Number($(courseSelected).find("#course-courseType").text());
    document.getElementById('update-course-subject').value = Number($(courseSelected).find("#course-subject").text());
    document.getElementById('update-course-class').value = getClass($(courseSelected).find("#course-class").text());
    document.getElementById('update-course-level').value = getLevel($(courseSelected).find("#course-level").text());
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

function getClass(str) {
    if (str.match("L???p 6")) {
        return "L???p 6"
    }
    else if (str.match("L???p 7")) {
        return "L???p 7"
    }
    else if (str.match("L???p 8")) {
        return "L???p 8"
    }
    else if (str.match("L???p 9")) {
        return "L???p 9"
    }
    else if (str.match("L???p 10")) {
        return "L???p 10"
    }
    else if (str.match("L???p 11")) {
        return "L???p 11"
    }
    else if (str.match("L???p 12")) {
        return "L???p 12"
    }
}

function getLevel(str) {
    if (str.match("HOCTOT")) {
        return "HOCTOT"
    }
    else if (str.match("MASTER")) {
        return "MASTER"
    }
    else if (str.match("MASTERZ")) {
        return "MASTERZ"
    }
    else if (str.match("BOTRO")) {
        return "BOTRO"
    }
    else if (str.match("PEN-I")) {
        return "PEN-I"
    }
    else if (str.match("PEN-C")) {
        return "PEN-C"
    }
    else if (str.match("PEN-M")) {
        return "PEN-M"
    }
}


const filter_grade = document.querySelector("#filter_grade");
const filter_subject = document.querySelector("#filter_subject");
const filter_type = document.querySelector("#filter_type");
const filter_gradeType = document.querySelector("#filter_gradeType");
const filterForm = document.forms['filter-form'];

filter_grade.onchange = function (e) {
    document.getElementById('filter_grade_form').value = filter_grade.value;
    document.getElementById('filter_subject_form').value = filter_subject.value;
    document.getElementById('filter_type_form').value = filter_type.value;
    document.getElementById('filter_gradeType_form').value = filter_gradeType.value;
    filterForm.submit();
};

filter_subject.onchange = function (e) {
    document.getElementById('filter_grade_form').value = filter_grade.value;
    document.getElementById('filter_subject_form').value = filter_subject.value;
    document.getElementById('filter_type_form').value = filter_type.value;
    document.getElementById('filter_gradeType_form').value = filter_gradeType.value;
    filterForm.submit();
};

filter_type.onchange = function (e) {
    document.getElementById('filter_grade_form').value = filter_grade.value;
    document.getElementById('filter_subject_form').value = filter_subject.value;
    document.getElementById('filter_type_form').value = filter_type.value;
    document.getElementById('filter_gradeType_form').value = filter_gradeType.value;
    filterForm.submit();
};

filter_gradeType.onchange = function (e) {
    document.getElementById('filter_grade_form').value = filter_grade.value;
    document.getElementById('filter_subject_form').value = filter_subject.value;
    document.getElementById('filter_type_form').value = filter_type.value;
    document.getElementById('filter_gradeType_form').value = filter_gradeType.value;
    filterForm.submit();
};


filter_grade.value = document.getElementById('filter_grade_form').value;
filter_subject.value = document.getElementById('filter_subject_form').value;
filter_type.value = document.getElementById('filter_type_form').value;
filter_gradeType.value = document.getElementById('filter_gradeType_form').value;

document.addEventListener('DOMContentLoaded', function() {
    var btnDeleteFood = document.getElementById('delete_btn');
    updateForm = document.forms['update-khoahoc-form'];
    btnDeleteFood.onclick = function () {
    updateForm.action = '/course-delete';
    updateForm.submit();
  }
  });


  function getSubjectCourse(id) {
    switch(id) {
        case 0:
        return "T???ng h???p nhi???u m??n";
        break;
        case 1: return "Ng??? V??n"; break;
        case 2: return "To??n h???c"; break;
        case 3: return "Ti???ng Anh"; break;
        case 4: return "Tin h???c"; break;
        case 5: return "V???t l??"; break;
        case 6: return "H??a h???c"; break;
        case 7: return "Sinh h???c"; break;
        case 8: return "L???ch s???"; break;
        default: return "T???ng h???p nhi???u m??n";
    }
}
/* Call function */
SetShowDetail();
SetAddCourse();
SetUpdateCourse();