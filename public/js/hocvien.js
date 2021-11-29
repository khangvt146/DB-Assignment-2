/* Add hocvien js */
function SetAddhocvien() {
    var hocvienAdd = document.querySelectorAll(".dropdown_hocvien .add_button");
    hocvienAdd.forEach((hocvien) => {
        hocvien.onclick = function(e) {
            var tem = document.querySelector(".add-hocvien-container");
            tem.classList.add("add-hocvien--active");
        };
        return hocvien;
    });
}

var outAddHocvien = document.querySelector(".close__add-hocvien-icon");
outAddHocvien.onclick = function(e) {
    var tem = document.querySelector(".add-hocvien-container");
    tem.classList.remove("add-hocvien--active");
};

/* Info hocvien js */
function infoHocvien() {
    var infoHV = document.querySelectorAll(".hocvien_container .i_btn");
    infoHV.forEach((hocvien) => {
        hocvien.onclick = function(e) {
            var tem = document.querySelector(".info-hocvien-container");
            tem.classList.add("info-hocvien--active");
            var id = $(this).data("id");
            setDetail(id);
        };
        return hocvien;
    });
}

function setDetail(id) {
    var studentList = document.querySelectorAll(".student-content");
    studentList = Array.from(studentList);
    console.log(id);
    console.log(studentList);
    let studentSelected = studentList.find((student) => {
        return $(student).find("#i_btn").data('id') === id;
    });
    console.log(studentSelected);
    $('#detail-student-name').text($(studentSelected).find("#student-ten").text());
    $('#detail-student-gender').text($(studentSelected).find("#student-gioi_tinh").text());
    $('#detail-student-birthday').text($(studentSelected).find("#student-ngay_sinh").text());
    $('#detail-student-phone').text($(studentSelected).find("#student-sdt").text());
    $('#detail-student-email').text($(studentSelected).find("#student-email").text());
    $('#detail-student-school').text($(studentSelected).find("#student-truong").text());
    $('#detail-student-ward').text($(studentSelected).find("#student-xa").text());
    $('#detail-student-district').text($(studentSelected).find("#student-huyen").text());
    $('#detail-student-provine').text($(studentSelected).find("#student-tinh").text());
    $('#detail-student-attend').text($(studentSelected).find("#student-KHTG").text());
    $('#detail-student-grade').text($(studentSelected).find("#student-diem").text());
}

var outInfoHocvien = document.querySelector(".close__info-hocvien-icon");
outInfoHocvien.onclick = function(e) {
    var tem = document.querySelector(".info-hocvien-container");
    tem.classList.remove("info-hocvien--active");
};



/* Update hocvien js */
function SetUpdatehocvien() {
    var hocvienUpdate = document.querySelectorAll(".hocvien_container #u_btn");
    hocvienUpdate.forEach((hocvien) => {
        hocvien.onclick = function(e) {
            var tem = document.querySelector(".update-hocvien-container");
            tem.classList.add("update-hocvien--active");
        };
        return hocvien;
    });
}

var outUpdateHocvien = document.querySelector(".close__update-hocvien-icon");
outUpdateHocvien.onclick = function(e) {
    var tem = document.querySelector(".update-hocvien-container");
    tem.classList.remove("update-hocvien--active");
};


const filter_sort = document.querySelector("#sort");
const filter_num = document.querySelector("#filter_hocvien_num");
const filter_gender = document.querySelector("#filter_gender");
const filterform = document.forms['filter-form'];

filter_sort.onchange = function(e) {
    document.getElementById('filter_sort').value = filter_sort.value;
    document.getElementById('filter_student_num').value = filter_num.value;
    document.getElementById('filter_sex').value = filter_gender.value;
    filterform.submit();
};

filter_num.onchange = function(e) {
    console.log(filter_num.value);
    console.log(filter_sort.value);
    console.log(filter_gender.value);
    document.getElementById('filter_sort').value = filter_sort.value;
    document.getElementById('filter_student_num').value = filter_num.value;
    document.getElementById('filter_sex').value = filter_gender.value;
    filterform.submit();
};

filter_gender.onchange = function(e) {
    document.getElementById('filter_sort').value = filter_sort.value;
    document.getElementById('filter_student_num').value = filter_num.value;
    document.getElementById('filter_sex').value = filter_gender.value;
    filterform.submit();
};



filter_sort.value = document.getElementById('filter_sort').value;
filter_num.value = document.getElementById('filter_student_num').value;
filter_gender.value = document.getElementById('filter_sex').value;




/* Call function */
SetAddhocvien();
SetUpdatehocvien();
infoHocvien();