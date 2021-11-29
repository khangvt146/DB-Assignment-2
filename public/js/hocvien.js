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

filter_sort.onchange = function (e) {
    document.getElementById('filter_sort').value = filter_sort.value;
    document.getElementById('filter_student_num').value = filter_num.value;
    document.getElementById('filter_sex').value = filter_gender.value;
    filterform.submit();
};

filter_num.onchange = function (e) {
    console.log(filter_num.value);
    console.log(filter_sort.value);
    console.log(filter_gender.value);
    document.getElementById('filter_sort').value = filter_sort.value;
    document.getElementById('filter_student_num').value = filter_num.value;
    document.getElementById('filter_sex').value = filter_gender.value;
    filterform.submit();
};

filter_gender.onchange = function (e) {
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